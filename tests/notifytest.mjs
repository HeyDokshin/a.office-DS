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
await send('Page.addScriptToEvaluateOnNewDocument', { source: `(()=>{const st=window.setTimeout; window.setTimeout=function(f,d,...a){ if(d>=5900&&d<=12100) d=400; return st.call(window,f,d,...a); };})()` });
const H = `const all=(root,acc=[])=>{for(const el of root.querySelectorAll('*')){acc.push(el); if(el.shadowRoot) all(el.shadowRoot,acc);} return acc;}; const vis=(e)=>{const b=e.getBoundingClientRect(); return b.width>0&&b.height>0;};`;
const ev = async (code) => { const r = await send('Runtime.evaluate', { expression: `(()=>{${H}${code}})()`, returnByValue: true }); return r.exceptionDetails ? 'JSERR ' + JSON.stringify(r.exceptionDetails).slice(0,200) : r.result.value; };
const text = (sel) => ev(`return all(document).filter(e=>e.matches&&e.matches('${sel}')&&vis(e)).map(e=>e.textContent.replace(/\\s+/g,' ').trim()).join(' | ')`);
const fails = []; const ok = (c, m) => { console.log(c ? 'PASS' : 'FAIL', m); if (!c) fails.push(m); };
const toastHas = () => ev(`return all(document).some(e=>vis(e)&&e.children.length===0&&e.textContent.trim()==='Назначена новая задача')`);
await send('Page.navigate', { url: 'http://127.0.0.1:8792/Main.dc.html' }); await sleep(4000);
await ev(`const b=all(document).filter(e=>e.tagName==='BUTTON'&&vis(e)&&!e.closest('.hd-bar')&&((e.getAttribute('aria-label')||'')+e.textContent).trim()==='Клиенты'); b[0].click(); return 1`);
let seen = false; for (let i = 0; i < 12; i++) { await sleep(500); if (await toastHas()) seen = true; }
ok(!seen, 'новые задачи: на странице клиентов уведомления нет');
await ev(`const b=all(document).filter(e=>e.tagName==='BUTTON'&&vis(e)&&!e.closest('.hd-bar')&&((e.getAttribute('aria-label')||'')+e.textContent).trim()==='Очередь задач'); if(b[0]) b[0].click(); return b.length`);
seen = false; for (let i = 0; i < 16; i++) { await sleep(500); if (await toastHas()) seen = true; }
ok(seen, 'новые задачи: на странице задач уведомление показывается');
console.log(`RESULT: ${fails.length} failed`); process.exit(0);
