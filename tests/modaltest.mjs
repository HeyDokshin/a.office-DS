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
const SEL = '.tl-modal, .cc-modal, .cc-drawer, .cs-modal, .tk-dlg, .tk-sheet, .hd-modal, .ms-ovb';
const boards = ['Card-pins', 'Card-fl-passport', 'Card-fl-contacts-sheet', 'Card-fl-addr-sheet', 'Card-fl-link-sheet', 'Card-death', 'Card-contact-add', 'Card-contact-edit', 'Card-contact-del', 'Card-tasks-adv', 'Card-tasks-hold', 'Clients-adv-all', 'Clients-adv-pin', 'Hold-modal', 'Hold-modal-error', 'Hold-modal-forbidden', 'Task-leave', 'Task-refresh', 'Task-taken', 'HeaderCallDial', 'HeaderCallDirectory', 'HeaderCallEnd', 'HeaderCallTransfer', 'HeaderCallInfoError'];
const rect = () => ev(`const m=all(document).filter(e=>e.matches&&e.matches('${SEL}')&&vis(e)); if(!m.length) return null; const e=m[m.length-1]; const b=e.getBoundingClientRect(); return {cls:e.className.split(' ')[0], r:Math.round(innerWidth-b.right), t:Math.round(b.top), b:Math.round(innerHeight-b.bottom), w:Math.round(b.width), anim:getComputedStyle(e).animationName}`);
for (const b of boards) {
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:8792/' + b + '.dc.html' }); await sleep(4200);
  const r = await rect();
  ok(!!r && r.r === 8 && r.t === 8 && r.b === 8 && r.w === 500 && /sheet-in/.test(r.anim), b + ': шторка справа 8/8/8, ширина 500, выезд справа → ' + JSON.stringify(r));
  if (b === 'Card-pins' || b === 'HeaderCallDial' || b === 'Hold-modal') {
    await ev(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})); return 1`); await sleep(300);
    ok((await rect()) === null, b + ': Esc закрывает');
  }
}
// открытие кликом: положение не «прыгает» во время анимации (без скачка из угла/центра)
await send('Page.navigate', { url: 'http://127.0.0.1:8792/Card-ul.dc.html' }); await sleep(4200);
await click('.cc-link', 'Ещё 1120');
const pos = []; for (let i = 0; i < 6; i++) { await sleep(45); const r = await rect(); if (r) pos.push(r.t + ':' + r.b); }
ok(pos.length >= 4 && new Set(pos).size === 1, 'открытие: вертикальное положение шторки не меняется за время анимации → ' + pos.join(' '));
// модалка поиска по модулю
await send('Page.navigate', { url: 'http://127.0.0.1:8792/ModuleSearchResult.dc.html' }); await sleep(4200);
await ev(`const r=all(document).find(e=>e.matches&&e.matches('.ms-t tbody tr')&&vis(e)); if(r){ (r.querySelector('a,button')||r).click(); } return !!r`); await sleep(250);
const mr = await rect();
ok(!mr || (mr.r === 8 && mr.t === 8 && mr.b === 8), 'поиск по модулю: «Открываем задачу» — шторка справа → ' + JSON.stringify(mr));
console.log('\nerrors:', errs.length ? errs : 'none');
console.log(`RESULT: ${fails.length} failed`); process.exit(0);
