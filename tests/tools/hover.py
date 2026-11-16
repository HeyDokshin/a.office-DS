"""Единое правило ховеров: реакция на наведение начинается через 0,3 с (transition-delay), уход — сразу.
Генерирует блок CSS из всех :hover-правил файла. Запуск повторяемый: старый блок заменяется."""
import sys, re, os
D = sys.argv[1]
FILES = ['Main', 'Header', 'Task', 'ClientCard', 'ClientSearch', 'Refs', 'SideMenu', 'ModuleSearch', 'ModuleReports', 'CreateTask']
PROPS = ['background-color', 'color', 'border-color', 'box-shadow', 'opacity', 'filter', 'text-decoration-color', 'transform']
TR = ','.join(p + ' .15s ease' for p in PROPS)
BEGIN = '/* === HOVER-DELAY (сгенерировано ccw/hover.py): пауза 0,3 с перед реакцией на наведение === */'
END = '/* === /HOVER-DELAY === */'

def split_top(sel):
    out, depth, cur = [], 0, ''
    for ch in sel:
        if ch == '(': depth += 1
        if ch == ')': depth -= 1
        if ch == ',' and depth == 0: out.append(cur); cur = ''
        else: cur += ch
    out.append(cur)
    return [x.strip() for x in out if x.strip()]

def hover_outside_not(part):
    # :hover внутри :not(...) / :has(...) не считаем
    depth, i = 0, 0
    while i < len(part):
        if part[i] == '(': depth += 1
        elif part[i] == ')': depth -= 1
        elif part.startswith(':hover', i) and depth == 0: return True
        i += 1
    return False

def strip_hover(part):
    depth, i, out = 0, 0, ''
    while i < len(part):
        if part[i] == '(': depth += 1
        elif part[i] == ')': depth -= 1
        if part.startswith(':hover', i) and depth == 0: i += 6; continue
        out += part[i]; i += 1
    return out

def gen(css):
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    css = re.sub(r'@keyframes[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}', '', css)
    bases, hovers = [], []
    for m in re.finditer(r'([^{}@]+)\{[^{}]*\}', css):
        for part in split_top(m.group(1)):
            if ':hover' not in part or not hover_outside_not(part): continue
            if '::' in part.split(':hover')[0] and False: continue
            b = strip_hover(part).strip()
            if not b or b.endswith('>') or b.startswith('>'): continue
            if part not in hovers: hovers.append(part)
            if b not in bases: bases.append(b)
    if not hovers: return ''
    lines = [BEGIN]
    lines.append(',\n'.join(bases) + '{transition:' + TR + '}')
    lines.append(',\n'.join(hovers) + '{transition-delay:.3s}')
    lines.append(',\n'.join(h + ':active' for h in hovers if '::' not in h) + '{transition-delay:0s}')
    lines.append(END)
    return '\n'.join(lines) + '\n'

for f in FILES:
    p = os.path.join(D, f + '.dc.html')
    s = open(p, encoding='utf-8').read()
    s = re.sub(re.escape(BEGIN) + r'.*?' + re.escape(END) + r'\n', '', s, flags=re.S)
    i0 = s.find('<style>'); i1 = s.find('</style>')
    block = gen(s[i0 + 7:i1])
    extra = ''
    if f == 'Main':
        extra = '.tl-row > *{transition:background-color .15s ease}\n.tl-row:hover > *{transition-delay:.3s}\n.tl-wide .tl-row,.tl-wide .tl-row:focus-within{transition:background-color .15s ease}\n.tl-wide .tl-row:hover{transition:background-color .15s ease .3s}\n'
    if f == 'ClientSearch':
        extra = '.cs-row > .cs-c{transition:background-color .15s ease}\n.cs-row:hover > .cs-c{transition-delay:.3s}\n'
    if block:
        block = block.replace(END, extra + END)
        s = s[:i1] + block + s[i1:]
    open(p, 'w', encoding='utf-8').write(s)
    print(f, block.count(':hover'))

# дизайн-система
p = os.path.join(D, 'ds/alfa-bank/components/bundle.css')
s = open(p, encoding='utf-8').read()
s = re.sub(re.escape(BEGIN) + r'.*?' + re.escape(END) + r'\n', '', s, flags=re.S)
flat = re.sub(r'@media \(hover: hover\) \{', '', s)
block = gen(flat)
open(p, 'w', encoding='utf-8').write(s.rstrip('\n') + '\n' + block)
print('bundle.css', block.count(':hover'))
