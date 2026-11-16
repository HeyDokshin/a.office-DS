import fs from 'fs';
const OUT = process.argv[2];
const list = await (await fetch('http://127.0.0.1:9333/json')).json();
const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
let id = 0; const pend = {}; const errs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d.result); delete pend[d.id]; } if (d.method === 'Runtime.exceptionThrown') errs.push((d.params.exceptionDetails.exception?.description || '').slice(0,200)); if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errs.push(d.params.args.map(a => a.value || a.description || '').join(' ').slice(0, 200)); };
await new Promise(r => ws.onopen = r);
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true });
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.addScriptToEvaluateOnNewDocument', { source: `(()=>{const st=window.setTimeout; window.setTimeout=function(f,d,...a){ if(d>=5900&&d<=12100) return 0; return st.call(window,f,d,...a); };})()` });
const H = `const all=(root,acc=[])=>{for(const el of root.querySelectorAll('*')){acc.push(el); if(el.shadowRoot) all(el.shadowRoot,acc);} return acc;}; const vis=(e)=>{const b=e.getBoundingClientRect(); return b.width>0&&b.height>0;};`;
const ev = async (code) => { const r = await send('Runtime.evaluate', { expression: `(()=>{${H}${code}})()`, returnByValue: true }); return r.exceptionDetails ? 'JSERR ' + JSON.stringify(r.exceptionDetails).slice(0,200) : r.result.value; };
const click = (sel, txt = '', idx = 0) => ev(`const e=all(document).filter(e=>e.matches&&e.matches('${sel}')&&vis(e)&&(e.textContent+' '+(e.getAttribute('aria-label')||'')).includes('${txt}'))[${idx}]; if(!e) return 'NOT FOUND ${sel} ${txt}'; e.click(); return 'ok'`);
const text = (sel) => ev(`return all(document).filter(e=>e.matches&&e.matches('${sel}')&&vis(e)).map(e=>e.textContent.replace(/\\s+/g,' ').trim()).join(' | ')`);
const typeIn = (sel, val) => ev(`const t=all(document).find(e=>e.matches&&e.matches('${sel}')&&vis(e)); if(!t) return 'NO INPUT'; t.focus(); const set=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set; set.call(t,'${val}'); t.dispatchEvent(new Event('input',{bubbles:true})); return 'ok'`);
const key = (sel, k) => ev(`const t=all(document).find(e=>e.matches&&e.matches('${sel}')&&vis(e)); t.dispatchEvent(new KeyboardEvent('keydown',{key:'${k}',bubbles:true})); return 'ok'`);
const fails = []; const ok = (c, m) => { console.log(c ? 'PASS' : 'FAIL', m); if (!c) fails.push(m); };
const shot = async (f) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(OUT + '/' + f, Buffer.from(r.data, 'base64')); };
// Наводим настоящим курсором (CDP), смотрим цвет через 120 мс (ещё прежний) и через 800 мс (изменился)
const pickEl = `const vis2=(e)=>{const b=e.getBoundingClientRect(); return (b.width>0&&b.height>0)||getComputedStyle(e).display==='contents';}; const find=(sel,txt)=>all(document).filter(e=>e.matches&&e.matches(sel)&&vis2(e)&&(e.textContent+' '+(e.getAttribute('aria-label')||'')).includes(txt))[0];`;
const bgAt = (sel, txt) => ev(`${pickEl} const e=find('${sel}','${txt}'); if(!e) return null; const sig=(x)=>{const c=getComputedStyle(x); return c.backgroundColor+c.color+c.boxShadow+c.opacity+c.filter+c.textDecorationColor;}; return [e].concat([...e.children].slice(0,4)).map(sig).join('|')+'|'+getComputedStyle(e,'::before').opacity+getComputedStyle(e,'::before').backgroundColor`);
const center = (sel, txt) => ev(`${pickEl} const e=find('${sel}','${txt}'); if(!e) return null; const t=getComputedStyle(e).display==='contents'?e.children[1]:e; t.scrollIntoView({block:'center'}); const b=t.getBoundingClientRect(); return {x:Math.round(b.left+Math.min(b.width/2,60)),y:Math.round(b.top+b.height/2)}`);
const hover = async (page, sel, txt, name) => {
  if (page) { await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }); await send('Page.navigate', { url: 'http://127.0.0.1:8792/' + page }); await sleep(4300); }
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 5, y: 5 }); await sleep(500);
  const c = await center(sel, txt); if (!c) { ok(false, name + ': элемент не найден'); return; }
  await sleep(200);
  const before = await bgAt(sel, txt);
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: c.x, y: c.y });
  await sleep(140);
  // через 0,14 с переход ещё стоит в фазе задержки: у всех запущенных CSS-переходов delay = 300 мс и прогресс 0
  const ph = await ev(`${pickEl} const e=find('${sel}','${txt}'); const list=[e].concat([...e.children].slice(0,4)); const an=[]; list.forEach(x=>x.getAnimations().forEach(a=>{const t=a.effect.getComputedTiming(); an.push([t.delay, t.progress||0]);})); return {n:an.length, ok:an.every(a=>a[0]>=300&&a[1]===0)}`);
  const early = ph.n > 0 && ph.ok ? before : 'changed';
  await sleep(700); const late = await bgAt(sel, txt);
  ok(early === before && late !== before, name + ': через 0,14 с ещё без реакции, через 0,8 с подсветка есть' + (early === before && late !== before ? '' : ' [рано изменилось: ' + (early !== before) + ', поздно изменилось: ' + (late !== before) + ']'));
};
await hover('Main.dc.html', '.tl-row', '', 'строка очереди');
await hover('', '.sm-item', 'Клиенты', 'пункт меню');
await hover('', '.tl-seg-btn', '', 'кнопка размера таблицы');
await hover('ClientsPage.dc.html', '.cs-row', '', 'строка клиентов');
await hover('Card-tasks.dc.html', '.cc-tr', '', 'строка задач в карточке');
await hover('', '.cc-callpill', '', 'зелёная кнопка звонка');
await hover('Refs-main.dc.html', '.rf-item', 'Признаки поставки', 'ссылка справочника');
await hover('Task-work.dc.html', '.lg-btn', 'Сохранить', 'кнопка во встройке');
await hover('', '.tk-ptab', 'История', 'вкладка окна задачи');
// тултип ДС: тоже с паузой 0,3 с
await send('Page.navigate', { url: 'http://127.0.0.1:8792/Main.dc.html' }); await sleep(4300);
const tc = await ev(`const e=all(document).find(e=>e.matches&&e.matches('.alfa-tooltip')&&vis(e)); const b=e.getBoundingClientRect(); return {x:Math.round(b.left+b.width/2),y:Math.round(b.top+b.height/2)}`);
await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 5, y: 400 }); await sleep(300);
await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: tc.x, y: tc.y });
await sleep(150); const tEarly = await ev(`return all(document).filter(e=>e.matches&&e.matches('.alfa-tooltip__pop')).length`);
await sleep(500); const tLate = await ev(`return all(document).filter(e=>e.matches&&e.matches('.alfa-tooltip__pop')).length`);
ok(tEarly === 0 && tLate >= 1, 'тултип: появляется через 0,3 с (0,15 с: ' + tEarly + ', 0,65 с: ' + tLate + ')');
// статическая проверка: у каждого :hover-правила компонентов есть задержка
const fsmod = await import('fs');
for (const f of ['Main', 'Header', 'Task', 'ClientCard', 'ClientSearch', 'Refs', 'SideMenu', 'ModuleSearch', 'ModuleReports', 'CreateTask']) {
  const s = fsmod.readFileSync(process.argv[3] + '/' + f + '.dc.html', 'utf8'); const css = s.slice(s.indexOf('<style>'), s.indexOf('/* === HOVER-DELAY'));
  const block = s.slice(s.indexOf('/* === HOVER-DELAY'), s.indexOf('/* === /HOVER-DELAY'));
  const n = (css.match(/:hover/g) || []).length;
  ok(block.includes('{transition-delay:.3s}') && n > 0, f + ': ' + n + ' ховеров — все под правилом задержки');
}
console.log('\nerrors:', errs.length ? errs : 'none');
console.log(`RESULT: ${fails.length} failed`); process.exit(0);
