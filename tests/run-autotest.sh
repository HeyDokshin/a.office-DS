#!/bin/bash
# Запуск: run-autotest.sh <папка project>
S=$(cd "$(dirname "$0")" && pwd); P=${1:-$S/../project}; OUT=$S/at; mkdir -p $OUT; rm -f $OUT/*.png
python3 -m http.server 8792 --bind 127.0.0.1 --directory "$P" >/dev/null 2>&1 & SRV=$!
rm -rf $S/chrome-prof; "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --user-data-dir=$S/chrome-prof --remote-debugging-port=9333 --window-size=1440,900 "http://127.0.0.1:8792/Main.dc.html" >/dev/null 2>&1 & CH=$!
for i in $(seq 1 20); do curl -s http://127.0.0.1:9333/json/version >/dev/null && break; sleep 0.5; done
perl -e 'alarm 1500; exec @ARGV' node $S/autotest.mjs 9333 $OUT
kill $CH $SRV 2>/dev/null
