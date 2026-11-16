import fs from 'fs';
const OUT = process.argv[2];
const list = await (await fetch('http://127.0.0.1:9333/json')).json();
const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
let id = 0; const pend = {}; const errs = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d.result); delete pend[d.id]; } if (d.method === 'Runtime.exceptionThrown') errs.push((d.params.exceptionDetails.exception?.description || '').slice(0,200)); };
await new Promise(r => ws.onopen = r);
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable'); await send('Network.setCacheDisabled', { cacheDisabled: true });
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
const H = `const all=(root,acc=[])=>{for(const el of root.querySelectorAll('*')){acc.push(el); if(el.shadowRoot) all(el.shadowRoot,acc);} return acc;};`;
const ev = async (code) => { const r = await send('Runtime.evaluate', { expression: `(()=>{${H}${code}})()`, returnByValue: true }); return r.exceptionDetails ? 'JSERR' : r.result.value; };
const clickText = (sel, txt, idx = 0) => ev(`const e=all(document).filter(e=>e.matches&&e.matches('${sel}')&&e.textContent.trim().includes('${txt}'))[${idx}]; if(!e) return 'NOT FOUND ${txt}'; e.click(); return 'ok'`);
const text = (sel) => ev(`return all(document).filter(e=>e.matches&&e.matches('${sel}')&&e.getBoundingClientRect().width>0).map(e=>e.textContent.replace(/\\s+/g,' ').trim()).join(' | ')`);
const fails = []; const ok = (c, m) => { console.log(c ? 'PASS' : 'FAIL', m); if (!c) fails.push(m); };
const open = async (b) => { await send('Page.navigate', { url: 'http://127.0.0.1:8792/' + b }); await sleep(3500); };
const shot = async (f) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(OUT + '/' + f, Buffer.from(r.data, 'base64')); };

// 1. Холд: модалка → причина → комментарий → На холд → «Переводим на холд» → «Задача переведена на холд · К следующей» + уведомление
await open('Task-work.dc.html');
console.log(await clickText('button.tk-btn', 'На холд'));
await sleep(300);
ok((await text('.tk-dlg h2')).includes('Поставить на холд'), 'холд: модалка открылась');
ok((await ev(`return all(document).find(e=>e.matches&&e.matches('.tk-dlg .tk-btn--primary')).getAttribute('aria-disabled')`)) === 'true', 'холд: «На холд» неактивна без причины');
console.log(await clickText('.tk-opt', 'Дата валютирования'));
await ev(`const t=all(document).find(e=>e.matches&&e.matches('.tk-ta--auto')); const set=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set; set.call(t,'Ждём выписку банка'); t.dispatchEvent(new Event('input',{bubbles:true})); return 1`);
await sleep(200);
ok((await text('.tk-cnt250')) === '18 / 250', 'холд: счётчик 18 / 250 → ' + await text('.tk-cnt250'));
console.log(await clickText('.tk-dlg .tk-btn--primary', 'На холд'));
await sleep(300);
ok((await text('.tk-cap')).includes('Переводим на холд'), 'холд: «Переводим на холд» → ' + await text('.tk-cap'));
await sleep(1300);
ok((await text('.tk-cap')).includes('Задача переведена на холд') && (await text('.tk-cap')).includes('К следующей'), 'холд: «Задача переведена на холд · К следующей»');
ok((await text('.tk-ntf')).includes('Задача переведена на холд'), 'холд: уведомление → ' + await text('.tk-ntf'));
ok((await text('.tk-st')).includes('Холд'), 'холд: статус Холд');
ok((await text('.tk-acts .tk-btn--primary')).includes('Снять с холда'), 'холд: первая кнопка «Снять с холда»');
await shot('flow-held.png');

// 2. Взять в работу (v2, не назначено)
await open('Task-unassigned.dc.html');
ok((await text('.tk-acts .tk-btn')).includes('Передать задачу'), 'v2: есть «Передать задачу»');
console.log(await clickText('.tk-acts .tk-btn--primary', 'Взять в работу'));
await sleep(400);
ok((await text('.tk-ntf')).includes('Задача взята в работу'), 'взять: уведомление → ' + await text('.tk-ntf'));
ok((await text('.tk-acts .tk-btn--primary')).includes('На холд'), 'взять: появилась «На холд»');
// v1
await open('Take-v1-assigned.dc.html');
ok(!(await text('.tk-acts .tk-btn')).includes('Передать'), 'v1: нет «Передать»/«Отклонить» → ' + await text('.tk-acts .tk-btn'));
// fail
await open('Take-fail.dc.html');
console.log(await clickText('.tk-acts .tk-btn--primary', 'Взять в работу'));
await sleep(400);
ok((await text('.tk-ntf')).includes('Не получилось взять в работу'), 'ошибка взятия: уведомление');
ok((await text('.tk-st')).includes('Не назначено'), 'ошибка взятия: статус не изменился');

// 3. Задачу взял другой
await open('Take-grabbed.dc.html');
await sleep(2200);
ok((await text('.tk-plate')).includes('Волков'), 'перехват: плашка с Волковым → ' + await text('.tk-plate'));
ok((await text('.tk-ntf')).includes('Задачу взял в работу Волков'), 'перехват: уведомление');
await shot('flow-grabbed.png');
console.log(await clickText('.tk-plate .tk-btn', 'Взять в работу'));
await sleep(400);
ok((await text('.tk-ntf')).includes('Задача взята в работу') && !(await text('.tk-plate')), 'перехват: взял обратно');

// 4. Требуется действие
await open('Close-action.dc.html');
await ev(`all(document).find(e=>e.matches&&e.matches('button[aria-label="Ещё действия"]')).click(); return 1`); await sleep(200);
console.log(await clickText('.tk-menu button', 'Закрыть задачу'));
await sleep(300);
ok((await text('.tk-cap')).includes('Требуется действие по задаче'), 'действие: подпись → ' + await text('.tk-cap'));
console.log(await clickText('.lg-btn', 'Сохранить')); await sleep(200);
await ev(`all(document).find(e=>e.matches&&e.matches('button[aria-label="Ещё действия"]')).click(); return 1`); await sleep(200);
console.log(await clickText('.tk-menu button', 'Закрыть задачу'));
await sleep(300);
ok((await text('.tk-cap')).includes('Закрываем задачу'), 'действие: после действия закрываем → ' + await text('.tk-cap'));

// 5. Закрыта · Ищем новую → Ждём задачу
await open('Close-seek.dc.html');
ok((await text('.tk-cap')).includes('Ищем новую'), 'seek: «Ищем новую»');
await sleep(800);
// closeState prop → afterDone не вызывается на маунте; проверим через закрытие вручную
await open('Task-work.dc.html');
await ev(`all(document).find(e=>e.matches&&e.matches('button[aria-label="Ещё действия"]')).click(); return 1`); await sleep(200);
console.log(await clickText('.tk-menu button', 'Закрыть задачу'));
await sleep(300);
ok((await text('.tk-cap')).includes('К следующей'), 'закрытие: «Закрываем задачу · К следующей» → ' + await text('.tk-cap'));
await sleep(1500);
ok((await text('.tk-cap')).includes('Задача закрыта'), 'закрытие: «Задача закрыта»');

const count = (sel) => ev(`return all(document).filter(e=>e.matches&&e.matches('${sel}')&&vis(e)).length`);
// 6. Звонок из контактов → панель
await open('Task-work.dc.html');
await ev(`all(document).find(e=>e.matches&&e.matches('button[aria-label="Позвонить клиенту"]')).click(); return 1`); await sleep(400);
ok((await text('.hd-cw')).includes('Вызов') && (await count('.tk-conv')) === 0, 'звонок: идёт через общий виджет в шапке, без второй панели');
await sleep(2600);
ok((await text('.hd-cw')).includes('Исходящий') && /00:0\d/.test(await text('.hd-cw-t')) && (await ev(`return all(document).find(e=>e.matches&&e.matches('.hd-phone')).dataset.live`)) === 'true', 'звонок: клиент ответил, таймер, трубка залитая');
await ev(`all(document).find(e=>e.matches&&e.matches('.hd-cw-ib--line')).click(); return 1`); await sleep(200);
ok((await text('.hd-cw')).includes('Удержание'), 'звонок: удержание');
await ev(`all(document).find(e=>e.matches&&e.matches('.tk-conv-b--end')).click(); return 1`); await sleep(300);
ok(!(await text('.tk-conv')), 'звонок: завершён, панель скрыта');

// 7. Модалка: ошибка / причины / нет прав
await open('Hold-modal-reasons.dc.html');
ok((await text('.tk-dmsg')).includes('Не получилось загрузить причины'), 'модалка: причины не загрузились');
console.log(await clickText('.tk-dmsg .tk-btn', 'Попробовать'));
await sleep(200);
ok((await text('.tk-opt')).includes('Свой вариант'), 'модалка: повтор загрузил причины');
await open('Hold-modal-error.dc.html');
ok((await text('.tk-dmsg')).includes('Не получилось перевести на холд'), 'модалка: ошибка перевода');
await open('Hold-modal-forbidden.dc.html');
ok((await text('.tk-dmsg')).includes('Недостаточно прав'), 'модалка: нет прав');

console.log('\nerrors:', errs.length ? errs : 'none');
console.log(`RESULT: ${fails.length} failed`); process.exit(0);
