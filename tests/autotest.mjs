// Автотест «Умной очереди»: тултипы, фильтры, поповеры, иконки, ошибки консоли.
// node autotest.mjs <port> <outdir>
import fs from 'fs';
const PORT = process.argv[2] || 9333, OUT = process.argv[3] || '.';
const list = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
const pg = list.find(t => t.type === 'page');
const ws = new WebSocket(pg.webSocketDebuggerUrl);
let id = 0; const pend = {}; const consoleErr = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data);
  if (d.id && pend[d.id]) { pend[d.id](d.result || d); delete pend[d.id]; }
  if (d.method === 'Runtime.exceptionThrown') consoleErr.push('EXC ' + (d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text).slice(0, 200));
  if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') consoleErr.push('ERR ' + d.params.args.map(a => a.value || a.description || '').join(' ').slice(0, 200));
};
await new Promise(r => ws.onopen = r);
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const H = `const all=(root,acc=[])=>{for(const el of root.querySelectorAll('*')){acc.push(el); if(el.shadowRoot) all(el.shadowRoot,acc);} return acc;};
const W=innerWidth,Hh=innerHeight; const R=(e)=>{const b=e.getBoundingClientRect();return {l:Math.round(b.left),t:Math.round(b.top),r:Math.round(b.right),b:Math.round(b.bottom),w:Math.round(b.width),h:Math.round(b.height)}};
const efp=(x,y)=>{let el=document.elementFromPoint(x,y); while(el&&el.shadowRoot){const n=el.shadowRoot.elementFromPoint(x,y); if(!n||n===el) break; el=n;} return el;};
const inVp=(b)=>b.l>=-1&&b.t>=-1&&b.r<=W+1&&b.b<=Hh+1;`;
const ev = async (code) => { const r = await send('Runtime.evaluate', { expression: `(()=>{${H}${code}})()`, awaitPromise: true, returnByValue: true }); return r.exceptionDetails ? 'JSERR ' + JSON.stringify(r.exceptionDetails).slice(0, 300) : r.result.value; };
const move = async (x, y) => { await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y }); };
const click = async (x, y) => { await move(x, y); await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 }); await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 }); await sleep(250); };
const shot = async (f) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(OUT + '/' + f, Buffer.from(r.data, 'base64')); };
const fails = []; let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails.push(msg); console.log('FAIL', msg); } };
await send('Runtime.enable'); await send('Page.enable');
// на время теста глушим имитацию SSE (таймеры 6–12 с), чтобы строки не перерисовывались
await send('Page.addScriptToEvaluateOnNewDocument', { source: `(()=>{const st=window.setTimeout; window.setTimeout=function(f,d,...a){ if(d>=5900&&d<=12100) return 0; return st.call(window,f,d,...a); };})()` });
await send('Page.reload'); await sleep(5000);

// --- тултипы: все видимые якоря в текущем виде
async function tooltips(tag) {
  const anchors = await ev(`const a=all(document).filter(e=>e.classList&&e.classList.contains('alfa-tooltip')); window.__A=a; const out=[];
    a.forEach((e,i)=>{const t=e.firstElementChild||e; const b=R(t); if(b.w<2||b.h<2||!inVp(b)||b.t<60) return; const x=b.l+Math.min(b.w/2,40),y=b.t+b.h/2; const top=efp(x,y); if(!top||!(e.contains(top))) return; out.push({i,x,y,b,txt:(t.textContent||t.getAttribute('aria-label')||'').trim().slice(0,30)});}); return out;`);
  let n = 0;
  for (const a of anchors.slice(0, 70)) {
    await move(2, 2); await sleep(60); await move(a.x, a.y); await sleep(560);
    const r = await ev(`const e=window.__A[${a.i}]; if(!e||!e.isConnected) return null; const p=all(e).find(x=>x.getAttribute&&x.getAttribute('role')==='tooltip'&&R(x).w>0&&+getComputedStyle(x).opacity>0.3); if(!p) return {none:1}; const pb=R(p), ab=R(e.firstElementChild||e);
      const pts=[[pb.l+pb.w/2,pb.t+pb.h/2],[pb.l+4,pb.t+4],[pb.r-4,pb.b-4]]; const cvr=pts.map(([x,y])=>{const t=efp(x,y); return (!t||p.contains(t)||t===p)?null:(t.className&&t.className.baseVal!==undefined?t.tagName:t.className||t.tagName)}).filter(Boolean); const cov=cvr.length>0;
      const gap = pb.b<=ab.t+2 ? ab.t-pb.b : pb.t>=ab.b-2 ? pb.t-ab.b : pb.r<=ab.l+2 ? ab.l-pb.r : pb.l>=ab.r-2 ? pb.l-ab.r : -99;
      const hov = pb.r>ab.l && pb.l<ab.r; return {cvr,pb,ab,gap,hov,cov,inv:inVp(pb),txt:p.textContent.slice(0,40)};`);
    if (!r) continue; n++;
    const where = `${tag} «${a.txt}»`;
    if (r.none) { ok(false, `${where}: тултип не появился`); continue; }
    ok(r.inv, `${where}: тултип выходит за экран ${JSON.stringify(r.pb)}`);
    ok(r.gap >= 0 && r.gap <= 12, `${where}: тултип далеко от текста (gap=${r.gap}) tip=${JSON.stringify(r.pb)} anchor=${JSON.stringify(r.ab)}`);
    ok(r.hov || r.gap >= 0 && (r.pb.t < r.ab.b && r.pb.b > r.ab.t), `${where}: тултип смещён вбок от якоря`);
    ok(!r.cov, `${where}: тултип перекрыт другим элементом ${JSON.stringify(r.cvr)} tip=${JSON.stringify(r.pb)}`);
  }
  console.log(tag, 'tooltips checked:', n);
}

// --- открытые поповеры не вылезают за экран
async function popupInView(sel, name) {
  const r = await ev(`const p=all(document).find(e=>e.matches&&e.matches('${sel}')&&R(e).w>0); if(!p) return null; return {b:R(p),inv:inVp(p.getBoundingClientRect?R(p):null)};`);
  ok(r, `${name}: поповер не открылся`);
  if (r) ok(r.inv, `${name}: поповер за пределами экрана ${JSON.stringify(r.b)}`);
}
const ptOf = (sel, idx = 0) => ev(`const e=all(document).filter(e=>e.matches&&e.matches('${sel}'))[${idx}]; if(!e) return null; e.scrollIntoView({block:'nearest'}); const b=R(e); return [b.l+b.w/2,b.t+b.h/2];`);
const escape = async () => { await ev(`const b=all(document).find(e=>e.getAttribute&&e.getAttribute('aria-label')==='Закрыть меню'); if(b) b.click(); return 1`); await sleep(200); };

async function filters(tag) {
  const n = await ev(`return all(document).filter(e=>e.matches&&e.matches('.tl-fc-btn')).length`);
  ok(n === 4, `${tag}: ожидалось 4 фильтр-чипа, найдено ${n}`);
  for (let i = 0; i < n; i++) {
    let p = await ptOf('.tl-fc-btn', i); await click(p[0], p[1]);
    await popupInView('.tl-fc-menu', `${tag} фильтр #${i}`);
    const o = await ptOf('.tl-fc-opt', 0); if (o) await click(o[0], o[1]);
    const st = await ev(`const c=all(document).filter(e=>e.matches&&e.matches('.tl-fc'))[${i}]; return {on:c.classList.contains('is-on'),txt:c.textContent.trim(),x:!!c.querySelector('.tl-fc-x'),bg:getComputedStyle(c).backgroundColor}`);
    ok(st.on && st.txt.includes(':') && st.x, `${tag} фильтр #${i}: после выбора нет вида «Название: значение» + крестик (${JSON.stringify(st)})`);
    await escape();
  }
  await shot(`at-${tag}-filters-on.png`);
  for (let i = n - 1; i >= 0; i--) { const x = await ptOf('.tl-fc-x', i); if (x) await click(x[0], x[1]); }
  const left = await ev(`return all(document).filter(e=>e.matches&&e.matches('.tl-fc.is-on')).length`);
  ok(left === 0, `${tag}: крестики не сбросили фильтры (осталось ${left})`);
  // быстрые теги: выбранный — серый
  const q = await ptOf('.tl-filters .alfa-tag', 0); await click(q[0], q[1]);
  const bg = await ev(`const t=all(document).find(e=>e.matches&&e.matches('.tl-filters .alfa-tag--selected')); if(!t) return null; const m=getComputedStyle(t).backgroundColor.match(/[\\d.]+/g).map(Number); return m;`);
  ok(bg && (bg.length === 4 ? bg[3] < 0.3 : (bg[0] + bg[1] + bg[2]) / 3 > 180), `${tag}: выбранный быстрый тег не серый (${bg})`);
  await click(q[0], q[1]);
}

async function icons(tag) {
  const bad = await ev(`return all(document).filter(e=>e.tagName==='svg'&&R(e).w>0&&inVp(R(e))).map(s=>{try{const b=s.getBBox();const vb=s.viewBox.baseVal;return {b,vb,lbl:(s.closest('button')||s.parentElement).textContent.trim().slice(0,20)}}catch(e){return null}}).filter(x=>x&&x.vb&&x.vb.width&&(x.b.width>x.vb.width*1.05||x.b.height>x.vb.height*1.05||x.b.x<-0.5||x.b.y<-0.5)).map(x=>x.lbl+' bbox '+[x.b.x,x.b.y,x.b.width,x.b.height].map(v=>v.toFixed(1)).join(','))`);
  ok(bad.length === 0, `${tag}: иконки выходят за свой viewBox: ${bad.join(' | ')}`);
}

async function popups(tag) {
  let p = await ev(`const b=all(document).find(e=>e.matches&&e.matches('.tl-tb-btn')&&e.textContent.includes('Настройки')); const r=R(b); return [r.l+r.w/2,r.t+r.h/2]`);
  await click(p[0], p[1]); await sleep(600); await popupInView(".tl-set", `${tag} Настройки`); await escape();
  p = await ev(`const b=all(document).find(e=>e.matches&&e.matches('.tl-tb-btn')&&e.textContent.includes('Группировка')); if(!b) return null; const r=R(b); return [r.l+r.w/2,r.t+r.h/2]`);
  if (p) { await click(p[0], p[1]); await sleep(150); await shot(`at-${tag}-grp.png`); await escape(); }
}

async function setDensity(i) { const p = await ev(`const g=all(document).find(e=>e.getAttribute&&e.getAttribute('aria-label')==='Размер таблицы'); const b=g.querySelectorAll('button')[${i}]; b.scrollIntoView({block:'nearest'}); const r=R(b); return [r.l+r.w/2,r.t+r.h/2]`); await click(p[0], p[1]); await sleep(500); }
async function setWide(on) {
  let p = await ev(`const b=all(document).find(e=>e.matches&&e.matches('.tl-tb-btn')&&e.textContent.includes('Настройки')); const r=R(b); return [r.l+r.w/2,r.t+r.h/2]`);
  await click(p[0], p[1]);
  const cur = await ev(`return all(document).find(e=>e.matches&&e.matches('.tl-set-sw')).getAttribute('aria-checked')`);
  if ((cur === 'true') !== on) { const s = await ptOf('.tl-set-sw'); await click(s[0], s[1]); }
  await escape(); await sleep(400);
}
async function scrollTable() { await ev(`const r=all(document).find(e=>e.matches&&e.matches('.tl-row')); if(r) r.scrollIntoView({block:'center'}); return 1`); await sleep(300); }

for (const [w, h] of [[1440, 900], [1100, 800]]) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false }); await sleep(600);
  await ev(`scrollTo(0,0); all(document).forEach(e=>{if(e.scrollTop) e.scrollTop=0}); return 1`);
  const T = `${w}`;
  await icons(T); await filters(T); await popups(T);
  await tooltips(T + ' header');
  for (const [d, dn] of [[0, 'S'], [1, 'M'], [2, 'L']]) {
    await setDensity(d);
    for (const wide of [false, true]) {
      await setWide(wide); await scrollTable();
      const tag = `${T} ${dn}${wide ? ' wide' : ''}`;
      await tooltips(tag); await icons(tag);
      if (!wide) { const ov = await ev(`const r=all(document).find(e=>e.matches&&e.matches('.tl-row')); if(!r) return null; const card=r.closest('.tl-grid')||r.parentElement; let host=card; while(host&&getComputedStyle(host).backgroundColor==='rgba(0, 0, 0, 0)') host=host.parentElement; const hb=R(host); const cells=[...r.children].map(R).filter(b=>b.w>0); const mx=Math.max(...cells.map(b=>b.r)); return {mx,hr:hb.r}`);
        if (ov) ok(ov.mx <= ov.hr, `${tag}: колонки вылезают за карточку таблицы (${ov.mx} > ${ov.hr})`); }
      if (wide) {
        const c = await ptOf('.tl-row:not(.is-taken) .tl-k-task', 1); await move(2, 2); await sleep(200); await move(c[0], c[1]); await sleep(120);
        const early = await ev(`const row=all(document).filter(e=>e.matches&&e.matches('.tl-row:not(.is-taken)'))[1]; const list=[row,row.querySelector('.tl-k-sel'),row.querySelector('.tl-k-play')]; return list.map(x=>x.getAnimations().map(a=>a.effect.getComputedTiming().delay).join('/')).join('|')`);
        ok(early === '300|300|300', `${tag}: строка и закреплённые ячейки ждут 0,3 с одинаково (${early})`);
        await sleep(600);
        const r = await ev(`const row=all(document).filter(e=>e.matches&&e.matches('.tl-row:not(.is-taken)'))[1]; const bg=(e)=>getComputedStyle(e).backgroundColor; const sel=row.querySelector('.tl-k-sel'), pl=row.querySelector('.tl-k-play'); const z=(e)=>+getComputedStyle(e).zIndex||0; return {row:bg(row),sel:bg(sel),play:bg(pl),lineZ:+getComputedStyle(row,'::before').zIndex||0,cellZ:z(sel)}`);
        ok(r.row === r.sel && r.row === r.play, `${tag}: фон строки и закреплённых ячеек при наведении разный/не одновременный ${JSON.stringify(r)}`);
        ok(r.lineZ > r.cellZ, `${tag}: разделитель строки под закреплёнными ячейками ${JSON.stringify(r)}`);
      }
      await shot(`at-${tag.replace(/ /g, '-')}.png`);
    }
  }
  await setWide(false); await setDensity(1);
}
console.log('\nconsole errors:', consoleErr.length ? consoleErr : 'none');
ok(consoleErr.length === 0, 'ошибки в консоли');
console.log(`\nRESULT: ${checks - fails.length}/${checks} passed, ${fails.length} failed`);
fs.writeFileSync(OUT + '/autotest-report.txt', fails.join('\n'));
process.exit(0);
