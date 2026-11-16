// Смоук: каждый борд канваса рендерится без исключений и без плашек ошибок рантайма
import fs from 'fs';
const [,, OUT, PROJ] = process.argv;
const canvas = JSON.parse(fs.readFileSync(PROJ + '/canvas.json', 'utf8'));
const list = await (await fetch('http://127.0.0.1:9333/json')).json();
const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
let id = 0; const pend = {}; let errs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d.result); delete pend[d.id]; }
  if (d.method === 'Runtime.exceptionThrown') errs.push((d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text || '').split('\n')[0].slice(0,160));
  if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errs.push(d.params.args.map(a => a.value || a.description || '').join(' ').split('\n')[0].slice(0, 160)); };
await new Promise(r => ws.onopen = r);
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true });
fs.mkdirSync(OUT + '/thumbs', { recursive: true });
const PROBE = `(()=>{const all=(root,acc=[])=>{for(const el of root.querySelectorAll('*')){acc.push(el); if(el.shadowRoot) all(el.shadowRoot,acc);} return acc;};
    const els=all(document); const txt=els.filter(e=>!e.children.length).map(e=>e.textContent).join(' ');
    const bad=(txt.match(/(has already been declared|is not defined|Cannot read propert[^ ]*|is not a function|Unexpected token|Failed to load[^.]*)/g)||[]);
    const vis=els.filter(e=>{const r=e.getBoundingClientRect(); return r.width>0&&r.height>0}).length;
    return {bad:[...new Set(bad)], vis}; })()`;
const rows = [];
for (const [file, b] of Object.entries(canvas.boards)) {
  errs = [];
  await send('Emulation.setDeviceMetricsOverride', { width: Math.min(b.w, 1600), height: Math.min(b.h, 1100), deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:8792/' + file }); await sleep(2600);
  const r = await send('Runtime.evaluate', { returnByValue: true, expression: PROBE });
  let v = r.result.value || {};
  if ((v.vis || 0) <= 5 && !errs.length) { await send('Page.reload'); await sleep(6000); const r2 = await send('Runtime.evaluate', { returnByValue: true, expression: PROBE }); v = r2.result.value || {}; }
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 60 });
  fs.writeFileSync(OUT + '/thumbs/' + file.replace('.dc.html', '.jpg'), Buffer.from(shot.data, 'base64'));
  const ok = !errs.length && !(v.bad || []).length && v.vis > 5;
  rows.push({ file, ok, errs: errs.concat(v.bad || []), vis: v.vis });
  if (!ok) console.log('FAIL', file, JSON.stringify(errs.concat(v.bad || [])), 'visible:', v.vis);
}
console.log(`SMOKE: ${rows.filter(r => r.ok).length}/${rows.length} boards OK`);
fs.writeFileSync(OUT + '/smoke.json', JSON.stringify(rows, null, 1));
process.exit(0);
