#!/bin/bash
# shots.sh <page.dc.html> <out.png> [w] [h]
S=$(cd "$(dirname "$0")" && pwd)
(python3 -m http.server 8792 --bind 127.0.0.1 --directory $S/../project >/dev/null 2>&1 &) 
pgrep -f "remote-debugging-port=9333" >/dev/null || ( rm -rf $S/chrome-prof; "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --user-data-dir=$S/chrome-prof --remote-debugging-port=9333 about:blank >/dev/null 2>&1 & )
for i in $(seq 1 20); do curl -s http://127.0.0.1:9333/json/version >/dev/null && curl -s http://127.0.0.1:8792/ >/dev/null && break; sleep 0.5; done
node $S/shot.mjs "http://127.0.0.1:8792/$1" "$2" ${3:-1440} ${4:-900}
