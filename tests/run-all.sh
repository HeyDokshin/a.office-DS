#!/bin/bash
# Полный прогон: все функциональные тесты + смоук всех досок + большой автотест очереди
S=$(cd "$(dirname "$0")" && pwd)
pkill -f "remote-debugging-port=9333"; pkill -f "http.server 8792"; sleep 1
$S/shots.sh Main.dc.html /dev/null >/dev/null
for t in taskflow navtest opentest uitest clienttest cardtest refstest reportstest embedtest createtest modaltest cstest notifytest livecalltest stucktest; do printf "%-13s " $t; perl -e 'alarm 300; exec @ARGV' node $S/$t.mjs $S/qa | grep -E "^FAIL|RESULT" | tr '\n' ' '; echo; done
printf "%-13s " hovertest; perl -e 'alarm 300; exec @ARGV' node $S/hovertest.mjs $S/qa $S/../project | grep -E "^FAIL|RESULT" | tr '\n' ' '; echo
printf "%-13s " smoke; perl -e 'alarm 2400; exec @ARGV' node $S/smoke.mjs $S/qa $S/../project | grep -E "FAIL|SMOKE" | tr '\n' ' '; echo
pkill -f "remote-debugging-port=9333"; pkill -f "http.server 8792"
printf "%-13s " autotest; $S/run-autotest.sh 2>&1 | grep -E "RESULT|console" | tr '\n' ' '; echo
