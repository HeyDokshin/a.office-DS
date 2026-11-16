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
const stuck = () => ev(`return all(document).find(e=>e.matches&&e.matches('.hd-bar')).dataset.stuck`);
for (const b of ['Card-tasks.dc.html', 'Main.dc.html', 'ClientsPage.dc.html']) {
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:8792/' + b }); await sleep(4000);
  ok((await stuck()) === 'false', b + ': вверху — прогрессивный блюр');
  await ev(`const h=all(document).find(e=>e.matches&&e.matches('.tl-head, .cc-tbl thead th, .rf-tbl thead th, .cs-head > *')); window.scrollTo(0, h.getBoundingClientRect().top + scrollY - 64 + 160); return 1`); await sleep(700);
  ok((await stuck()) === 'true', b + ': заголовок таблицы прилип — ровная матовая панель');
  if (b === 'Card-tasks.dc.html') { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync('cshots2/stuck.png', Buffer.from(r.data, 'base64')); }
  await ev(`window.scrollTo(0, 0); return 1`); await sleep(500);
  ok((await stuck()) === 'false', b + ': обратно наверх — снова прогрессивный');
}
console.log(`RESULT: ${fails.length} failed`); process.exit(0);
