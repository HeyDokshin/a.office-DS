/* @ds-bundle: {"format":4,"namespace":"DesignSystem_88b1f8","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Table"},{"name":"Amount"},{"name":"Avatar"},{"name":"Badge"},{"name":"Banner"},{"name":"Card"},{"name":"CircularTimer"},{"name":"Collapse"},{"name":"Divider"},{"name":"EntityCard"},{"name":"Link"},{"name":"StatCard"},{"name":"StatStrip"},{"name":"Status"},{"name":"Tag"},{"name":"Notification"},{"name":"ProgressBar"},{"name":"Skeleton"},{"name":"Spinner"},{"name":"AmountInput"},{"name":"Calendar"},{"name":"Checkbox"},{"name":"CodeInput"},{"name":"Counter"},{"name":"FileUpload"},{"name":"FilterDropdown"},{"name":"FilterGroup"},{"name":"Input"},{"name":"Radio"},{"name":"RadioGroup"},{"name":"SearchInput"},{"name":"Select"},{"name":"Slider"},{"name":"Switch"},{"name":"Textarea"},{"name":"SegmentedControl"},{"name":"Tabs"},{"name":"BottomSheet"},{"name":"Confirmation"},{"name":"Hint"},{"name":"Modal"},{"name":"OptionList"},{"name":"SidePanel"},{"name":"Tooltip"},{"name":"Alert"},{"name":"List"},{"name":"PureCell"},{"name":"Steps"},{"name":"Pagination"},{"name":"Popover"},{"name":"DateInput"},{"name":"DateRangeInput"},{"name":"TimeInput"},{"name":"CalendarInput"},{"name":"TitleView"},{"name":"IsleBlock"},{"name":"WidgetPlate"},{"name":"BackgroundPlate"},{"name":"TableView"},{"name":"CorporateTopbar"},{"name":"TableBulkActions"},{"name":"FilterBar"},{"name":"ButtonGroup"},{"name":"NavigationCardView"},{"name":"HubMenu"},{"name":"CorporateSystemMessage"},{"name":"ResultScreenModal"},{"name":"OnboardingTooltipNew"},{"name":"Pips"},{"name":"FAQ"},{"name":"StatusPreset"},{"name":"PropertyPreset"},{"name":"PaymentMaskedNumber"}]} */
/* Alfa-Bank Design System — every component in one script: window.DesignSystem_88b1f8.
   Part 1: the original components (sources in components/<group>/*.jsx).
   Part 2: components added to match @alfalab/core-components and the Corp Figma library (sources in components/src/).
   Part 1 is patched at build time for the dark theme: text on accent-secondary uses text-inverted-primary. Styles for part 2: components/bundle.css. */
(() => {

const __ds_ns = (window.DesignSystem_88b1f8 = window.DesignSystem_88b1f8 || {});

const __ds_scope = {};
/* Патч прототипа: эти модули при загрузке вызывают React.createElement до того, как React доступен,
   и падают с «React is not defined». Запускаем их лениво — при первом обращении, когда React уже есть. */
const __lazyVals = {};
function __defLazy(name, run) {
  Object.defineProperty(__ds_scope, name, { configurable: true, enumerable: true,
    get() { if (!(name in __lazyVals)) { __lazyVals[name] = undefined; run(); if (__lazyVals[name] === undefined) delete __lazyVals[name]; } return __lazyVals[name]; },
    set(v) { __lazyVals[name] = v; } });
  Object.defineProperty(__ds_ns, name, { configurable: true, enumerable: true, get() { return __ds_scope[name]; }, set(v) { __lazyVals[name] = v; } });
}

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/button/Button.jsx
__defLazy("Button", () => { try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Button — injects its stylesheet once, then renders by className. */

const STYLE_ID = 'alfa-button-styles';
const CSS = `
.alfa-btn {
    --_radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-sizing: border-box;
    font-family: var(--font-system);
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: var(--_radius);
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    transition: background-color .12s ease, color .12s ease, border-color .12s ease, transform .08s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
}
.alfa-btn:active { transform: scale(0.985); }
.alfa-btn:focus-visible { outline: 2px solid var(--focus-color); outline-offset: 2px; }
.alfa-btn[disabled], .alfa-btn[aria-disabled="true"] {
    cursor: not-allowed; transform: none; pointer-events: none;
}
.alfa-btn__block { display: flex; width: 100%; }
.alfa-btn--fill { flex: 1; }
.alfa-btn--nowrap { white-space: nowrap; }
.alfa-btn__icon { display: inline-flex; flex: 0 0 auto; }
.alfa-btn__icon svg { display: block; }
.alfa-btn__label-wrap { display: inline-flex; flex-direction: column; align-items: flex-start; line-height: 1.1; }
.alfa-btn__hint { font-size: 13px; font-weight: 400; opacity: 0.7; }

/* sizes — value == control height */
.alfa-btn--32 { height: 32px; padding: 0 14px; font-size: 14px; line-height: 18px; --_radius: 8px; }
.alfa-btn--40 { height: 40px; padding: 0 18px; font-size: 15px; line-height: 20px; --_radius: 10px; }
.alfa-btn--48 { height: 48px; padding: 0 22px; font-size: 16px; line-height: 20px; --_radius: 10px; }
.alfa-btn--56 { height: 56px; padding: 0 26px; font-size: 16px; line-height: 20px; --_radius: 12px; }
.alfa-btn--64 { height: 64px; padding: 0 30px; font-size: 18px; line-height: 24px; --_radius: 14px; }
.alfa-btn--72 { height: 72px; padding: 0 34px; font-size: 18px; line-height: 24px; --_radius: 14px; }
.alfa-btn--pill { --_radius: 99px; }

/* accent (brand red) */
.alfa-btn--accent { background: var(--accent-primary); color: #fff; }
.alfa-btn--accent:hover { background: var(--accent-primary-hover); }
.alfa-btn--accent:active { background: var(--accent-primary-press); }
.alfa-btn--accent[disabled] { background: var(--color-neutral-100); color: var(--text-tertiary); }

/* primary (dark ink — Alfa default filled) */
.alfa-btn--primary { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-btn--primary:hover { background: var(--accent-secondary-hover); }
.alfa-btn--primary:active { background: var(--accent-secondary-press); }
.alfa-btn--primary[disabled] { background: var(--color-neutral-100); color: var(--text-tertiary); }

/* secondary (translucent neutral fill) */
.alfa-btn--secondary { background: var(--color-neutral-translucent-300); color: var(--text-primary); }
.alfa-btn--secondary:hover { background: var(--neutral-translucent-300-hover, var(--color-neutral-translucent-400)); }
.alfa-btn--secondary:active { background: var(--neutral-translucent-300-press, var(--color-neutral-translucent-500)); }
.alfa-btn--secondary[disabled] { background: var(--color-neutral-translucent-100); color: var(--text-tertiary); }

/* outlined */
.alfa-btn--outlined { background: transparent; color: var(--text-primary); border-color: var(--color-neutral-1300); }
.alfa-btn--outlined:hover { background: var(--color-neutral-100); }
.alfa-btn--outlined:active { background: var(--neutral-100-press, var(--color-neutral-300)); }
.alfa-btn--outlined[disabled] { color: var(--text-tertiary); border-color: var(--border-primary); }

/* transparent (no chrome until hover) */
.alfa-btn--transparent { background: transparent; color: var(--text-primary); }
.alfa-btn--transparent:hover { background: var(--color-neutral-100); }
.alfa-btn--transparent:active { background: var(--neutral-100-press, var(--color-neutral-300)); }
.alfa-btn--transparent[disabled] { color: var(--text-tertiary); }

/* text (link-like) */
.alfa-btn--text { background: transparent; color: var(--text-primary); padding-left: 4px; padding-right: 4px; height: auto; }
.alfa-btn--text:hover { color: var(--text-secondary); }
.alfa-btn--text[disabled] { color: var(--text-tertiary); }

/* inverted color set — for placement on dark/ink surfaces */
.alfa-btn--inverted.alfa-btn--secondary { background: rgba(255,255,255,0.12); color: #fff; }
.alfa-btn--inverted.alfa-btn--secondary:hover { background: rgba(255,255,255,0.18); }
.alfa-btn--inverted.alfa-btn--primary { background: #fff; color: var(--text-primary); }
.alfa-btn--inverted.alfa-btn--primary:hover { background: #e7e8eb; }
.alfa-btn--inverted.alfa-btn--transparent { background: transparent; color: #fff; }
.alfa-btn--inverted.alfa-btn--transparent:hover { background: rgba(255,255,255,0.12); }
.alfa-btn--inverted.alfa-btn--text { color: #fff; }

@media (prefers-reduced-motion: reduce) {
    .alfa-btn, .alfa-btn:active { transition: none; transform: none; }
}
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Button({
  view = 'secondary',
  size = 56,
  shape = 'rectangular',
  textResizing = 'hug',
  block = false,
  loading = false,
  disabled = false,
  nowrap = false,
  hint,
  colors = 'default',
  leftAddons,
  rightAddons,
  href,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const classes = ['alfa-btn', `alfa-btn--${view}`, view !== 'text' ? `alfa-btn--${size}` : '', shape === 'rounded' ? 'alfa-btn--pill' : '', block ? 'alfa-btn__block' : '', nowrap ? 'alfa-btn--nowrap' : '', textResizing === 'fill' ? 'alfa-btn--fill' : '', colors === 'inverted' ? 'alfa-btn--inverted' : '', className].filter(Boolean).join(' ');
  const showHint = hint && size >= 48 && !loading;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leftAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-btn__icon"
  }, leftAddons) : null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-btn__icon",
    "aria-hidden": "true"
  }, spinner) : null, children || showHint ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-btn__label-wrap"
  }, children ? /*#__PURE__*/React.createElement("span", null, children) : null, showHint ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-btn__hint"
  }, hint) : null) : null, rightAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-btn__icon"
  }, rightAddons) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: classes
    }, restProps), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    disabled: disabled || loading
  }, restProps), content);
}
const spinner = /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  style: {
    animation: 'alfa-spin 0.7s linear infinite'
  }
}, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "9",
  r: "7",
  stroke: "currentColor",
  strokeOpacity: "0.25",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 9a7 7 0 0 0-7-7",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}));
if (typeof document !== 'undefined' && !document.getElementById('alfa-spin-kf')) {
  const kf = document.createElement('style');
  kf.id = 'alfa-spin-kf';
  kf.textContent = '@keyframes alfa-spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(kf);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); } });

// components/button/IconButton.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank IconButton — square/circular button carrying a single glyph. */

const STYLE_ID = 'alfa-iconbutton-styles';
const CSS = `
.alfa-iconbtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    cursor: pointer;
    color: var(--graphic-primary);
    transition: background-color .12s ease, color .12s ease, transform .08s ease;
    -webkit-tap-highlight-color: transparent;
}
.alfa-iconbtn:active { transform: scale(0.94); }
.alfa-iconbtn:focus-visible { outline: 2px solid var(--focus-color); outline-offset: 2px; }
.alfa-iconbtn[disabled] { cursor: not-allowed; color: var(--text-tertiary); transform: none; }
.alfa-iconbtn svg { display: block; }

.alfa-iconbtn--32 { width: 32px; height: 32px; border-radius: 8px; }
.alfa-iconbtn--40 { width: 40px; height: 40px; border-radius: 10px; }
.alfa-iconbtn--48 { width: 48px; height: 48px; border-radius: 12px; }
.alfa-iconbtn--56 { width: 56px; height: 56px; border-radius: 14px; }
.alfa-iconbtn--circle { border-radius: 50%; }

.alfa-iconbtn--secondary { background: var(--color-neutral-translucent-300); }
.alfa-iconbtn--secondary:hover { background: var(--neutral-translucent-300-hover, var(--color-neutral-translucent-400)); }
.alfa-iconbtn--transparent { background: transparent; }
.alfa-iconbtn--transparent:hover { background: var(--color-neutral-100); }
.alfa-iconbtn--accent { background: var(--accent-primary); color: #fff; }
.alfa-iconbtn--accent:hover { background: var(--accent-primary-hover); }
.alfa-iconbtn--primary { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-iconbtn--primary:hover { background: var(--accent-secondary-hover); }

@media (prefers-reduced-motion: reduce) {
    .alfa-iconbtn, .alfa-iconbtn:active { transition: none; transform: none; }
}
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function IconButton({
  view = 'transparent',
  size = 48,
  shape = 'square',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const classes = ['alfa-iconbtn', `alfa-iconbtn--${view}`, `alfa-iconbtn--${size}`, shape === 'circle' ? 'alfa-iconbtn--circle' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Table — desktop data grid used across intranet/corp surfaces
   (task queues, registries, settings tables). Mirrors the house conventions:
   - columns: { id, title, width, align, sortable, render }[]
   - controlled OR uncontrolled sort; onSort(event, { id, direction })
   - row selection via checkbox column; onSelectChange(event, { selected })
   - onRowClick(event, { row, index })
   Rows are a single white card with hairline dividers — the canonical
   white-on-grey list group from the design language. */

const STYLE_ID = 'alfa-table-styles';
const CSS = `
.alfa-table { width: 100%; font-family: var(--font-system); color: var(--text-primary);
    background: var(--surface-primary); border-radius: 20px; overflow: hidden; box-sizing: border-box; }
.alfa-table__scroll { width: 100%; overflow-x: auto; }
.alfa-table table { width: 100%; border-collapse: collapse; }

.alfa-table th, .alfa-table td { text-align: left; vertical-align: top; }
.alfa-table thead th {
    padding: 18px 16px; font-size: 14px; line-height: 18px; font-weight: 500;
    color: var(--text-secondary); white-space: nowrap; user-select: none;
    border-bottom: 1px solid var(--border-secondary);
}
.alfa-table thead th.alfa-table__th--right { text-align: right; }
.alfa-table thead th.alfa-table__th--center { text-align: center; }
.alfa-table__sort { display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
    background: none; border: none; padding: 0; font: inherit; color: inherit; }
.alfa-table__sort-ico { display: inline-flex; color: var(--text-tertiary); transition: color .12s ease, transform .12s ease; }
.alfa-table__sort:hover .alfa-table__sort-ico { color: var(--text-secondary); }
.alfa-table__sort--active .alfa-table__sort-ico { color: var(--text-primary); }
.alfa-table__sort--desc .alfa-table__sort-ico { transform: scaleY(-1); }

.alfa-table tbody td { padding: 22px 16px; font-size: 15px; line-height: 20px;
    border-bottom: 1px solid var(--border-secondary); }
.alfa-table tbody tr:last-child td { border-bottom: none; }
.alfa-table tbody tr { transition: background-color .12s ease; }
.alfa-table--hover tbody tr:hover { background: var(--color-neutral-translucent-100); cursor: pointer; }
.alfa-table tbody tr.alfa-table__row--selected { background: var(--status-muted-info); }
.alfa-table td.alfa-table__td--right { text-align: right; }
.alfa-table td.alfa-table__td--center { text-align: center; }

.alfa-table__check { width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid var(--color-neutral-400);
    background: var(--surface-primary); cursor: pointer; display: inline-flex; align-items: center;
    justify-content: center; flex: 0 0 auto; transition: background-color .12s ease, border-color .12s ease; color: #fff; }
.alfa-table__check--on { background: var(--accent-secondary); border-color: var(--accent-secondary); }
.alfa-table__check svg { display: block; opacity: 0; }
.alfa-table__check--on svg { opacity: 1; }
.alfa-table__selcol { width: 24px; padding-left: 20px !important; padding-right: 0 !important; }

.alfa-table__empty { padding: 48px 16px; text-align: center; color: var(--text-tertiary); font-size: 15px; }

/* ---- size: s (compact) ---- */
.alfa-table--s thead th { padding: 12px 14px; font-size: 13px; line-height: 16px; }
.alfa-table--s tbody td { padding: 13px 14px; font-size: 14px; line-height: 18px; }

/* ---- view: rows (zebra registry) ---- */
.alfa-table--rows { border-radius: 16px; }
.alfa-table--rows tbody tr:nth-child(even) { background: var(--color-neutral-translucent-100); }
.alfa-table--rows tbody td { border-bottom: none; }
.alfa-table--rows.alfa-table--hover tbody tr:hover { background: var(--color-neutral-translucent-200); }

/* ---- view: bordered (full gridlines) ---- */
.alfa-table--bordered { border: 1px solid var(--border-secondary); border-radius: 16px; }
.alfa-table--bordered thead th { background: var(--color-neutral-50, var(--bg-base-secondary)); border-right: 1px solid var(--border-secondary); }
.alfa-table--bordered tbody td { border-right: 1px solid var(--border-secondary); }
.alfa-table--bordered th:last-child, .alfa-table--bordered td:last-child { border-right: none; }

/* sticky header */
.alfa-table--sticky .alfa-table__scroll { max-height: 100%; overflow-y: auto; }
.alfa-table--sticky thead th { position: sticky; top: 0; z-index: 1; background: var(--surface-primary); }
.alfa-table--bordered.alfa-table--sticky thead th { background: var(--color-neutral-50, var(--bg-base-secondary)); }

/* ---- inverted (dark surface) ---- */
.alfa-table--inverted { background: var(--bg-base-inverted-secondary); color: var(--text-inverted-primary); }
.alfa-table--inverted thead th { color: var(--text-inverted-secondary); border-bottom-color: var(--color-neutral-inverted-400); }
.alfa-table--inverted tbody td { border-bottom-color: var(--color-neutral-inverted-400); }
.alfa-table--inverted .alfa-table__sort-ico { color: var(--text-inverted-tertiary); }
.alfa-table--inverted .alfa-table__sort:hover .alfa-table__sort-ico { color: var(--text-inverted-secondary); }
.alfa-table--inverted .alfa-table__sort--active .alfa-table__sort-ico { color: var(--text-inverted-primary); }
.alfa-table--inverted.alfa-table--hover tbody tr:hover { background: var(--color-neutral-translucent-inverted-100); }
.alfa-table--inverted tbody tr.alfa-table__row--selected { background: var(--status-muted-inverted-info); }
.alfa-table--inverted.alfa-table--rows tbody tr:nth-child(even) { background: var(--color-neutral-translucent-inverted-100); }
.alfa-table--inverted .alfa-table__check { background: var(--color-neutral-translucent-inverted-100); border-color: var(--color-neutral-inverted-400); }
.alfa-table--inverted .alfa-table__check--on { background: var(--accent-secondary); border-color: var(--accent-secondary); }
.alfa-table--inverted.alfa-table--bordered { border-color: var(--color-neutral-inverted-400); }
.alfa-table--inverted.alfa-table--bordered thead th, .alfa-table--inverted.alfa-table--bordered tbody td { border-right-color: var(--color-neutral-inverted-400); }
.alfa-table--inverted.alfa-table--bordered thead th { background: var(--color-neutral-inverted-300); }
.alfa-table--inverted .alfa-table__empty { color: var(--text-inverted-tertiary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function SortIcon() {
  return /*#__PURE__*/React.createElement("span", {
    className: "alfa-table__sort-ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4v13M7 17l-3-3M7 17l3-3M17 20V7M17 7l-3 3M17 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
function Table({
  columns = [],
  data = [],
  rowKey = 'id',
  sort: sortProp,
  onSort,
  selectable = false,
  selected,
  onSelectChange,
  onRowClick,
  hoverable = true,
  view = 'card',
  size = 'm',
  inverted = false,
  stickyHeader = false,
  emptyText = 'Нет данных',
  className = '',
  ...rest
}) {
  useStyles();
  const [sortState, setSortState] = React.useState(null);
  const sort = sortProp !== undefined ? sortProp : sortState;
  const [selState, setSelState] = React.useState([]);
  const sel = selected !== undefined ? selected : selState;
  const keyOf = (row, i) => row[rowKey] != null ? row[rowKey] : i;
  const sortedData = React.useMemo(() => {
    if (!sort || !sort.id) return data;
    const col = columns.find(c => c.id === sort.id);
    if (!col) return data;
    const get = col.sortValue || (row => row[sort.id]);
    const dir = sort.direction === 'desc' ? -1 : 1;
    return [...data].sort((a, b) => {
      const av = get(a);
      const bv = get(b);
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir;
      return String(av).localeCompare(String(bv), 'ru') * dir;
    });
  }, [data, sort, columns]);
  const handleSort = (event, col) => {
    if (!col.sortable) return;
    let direction = 'asc';
    if (sort && sort.id === col.id) direction = sort.direction === 'asc' ? 'desc' : 'asc';
    const next = {
      id: col.id,
      direction
    };
    if (sortProp === undefined) setSortState(next);
    if (onSort) onSort(event, next);
  };
  const allKeys = sortedData.map(keyOf);
  const allOn = allKeys.length > 0 && allKeys.every(k => sel.includes(k));
  const emit = (event, next) => {
    if (selected === undefined) setSelState(next);
    if (onSelectChange) onSelectChange(event, {
      selected: next
    });
  };
  const toggleRow = (event, key) => {
    event.stopPropagation();
    const next = sel.includes(key) ? sel.filter(k => k !== key) : [...sel, key];
    emit(event, next);
  };
  const toggleAll = event => emit(event, allOn ? [] : allKeys);
  const Check = ({
    on
  }) => /*#__PURE__*/React.createElement("span", {
    className: `alfa-table__check ${on ? 'alfa-table__check--on' : ''}`,
    role: "checkbox",
    "aria-checked": on
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4L19 7",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  const rootClasses = ['alfa-table', view !== 'card' ? `alfa-table--${view}` : '', size === 's' ? 'alfa-table--s' : '', inverted ? 'alfa-table--inverted' : '', stickyHeader ? 'alfa-table--sticky' : '', hoverable && onRowClick ? 'alfa-table--hover' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "alfa-table__scroll"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    className: "alfa-table__selcol",
    onClick: toggleAll,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Check, {
    on: allOn
  })) : null, columns.map(col => {
    const active = sort && sort.id === col.id;
    const alignCls = col.align === 'right' ? 'alfa-table__th--right' : col.align === 'center' ? 'alfa-table__th--center' : '';
    return /*#__PURE__*/React.createElement("th", {
      key: col.id,
      className: alignCls,
      style: {
        width: col.width
      }
    }, col.sortable ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `alfa-table__sort ${active ? 'alfa-table__sort--active' : ''} ${active && sort.direction === 'desc' ? 'alfa-table__sort--desc' : ''}`,
      onClick: e => handleSort(e, col)
    }, /*#__PURE__*/React.createElement("span", null, col.title), /*#__PURE__*/React.createElement(SortIcon, null)) : col.title);
  }))), /*#__PURE__*/React.createElement("tbody", null, sortedData.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "alfa-table__empty",
    colSpan: columns.length + (selectable ? 1 : 0)
  }, emptyText)) : sortedData.map((row, index) => {
    const k = keyOf(row, index);
    const on = sel.includes(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: on ? 'alfa-table__row--selected' : '',
      onClick: onRowClick ? e => onRowClick(e, {
        row,
        index
      }) : undefined
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      className: "alfa-table__selcol",
      onClick: e => toggleRow(e, k)
    }, /*#__PURE__*/React.createElement(Check, {
      on: on
    })) : null, columns.map(col => {
      const alignCls = col.align === 'right' ? 'alfa-table__td--right' : col.align === 'center' ? 'alfa-table__td--center' : '';
      return /*#__PURE__*/React.createElement("td", {
        key: col.id,
        className: alignCls
      }, col.render ? col.render(row, index) : row[col.id]);
    }));
  })))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/display/Amount.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Amount — formats and renders a money value the Alfa way:
   thin-space thousands, comma decimal, trailing currency sign (₽ $ € …).
   Mirrors @alfalab/core-components-amount conventions:
   - `value` is an integer in MINOR units (kopecks), `minority` is the divisor
   - view 'default' (always show minor) | 'withZeroMinorPart' (hide ,00)
   - the minor part can be dimmed (transparentMinor) */

const STYLE_ID = 'alfa-amount-styles';
const CSS = `
.alfa-amount { font-family: var(--font-system); font-weight: 500; color: var(--text-primary); white-space: nowrap; font-variant-numeric: tabular-nums; }
.alfa-amount--m { font-size: 16px; line-height: 24px; }
.alfa-amount--l { font-size: 20px; line-height: 24px; }
.alfa-amount--xl { font-size: 32px; line-height: 40px; font-weight: 500; }
.alfa-amount--xxl { font-size: 48px; line-height: 56px; font-weight: 500; letter-spacing: -0.5px; }
.alfa-amount--positive { color: var(--text-positive); }
.alfa-amount--negative { color: var(--text-negative); }
.alfa-amount--secondary { color: var(--text-secondary); }
.alfa-amount__minor--dim { color: var(--text-tertiary); }
.alfa-amount__currency { margin-left: 0.18em; }
`;
const CURRENCY_SIGN = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
  GBP: '£',
  KZT: '₸',
  UAH: '₴',
  CNY: '¥'
};
const THIN_SPACE = '\u2009';
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function splitThousands(intStr) {
  return intStr.replace(/\B(?=(\d{3})+(?!\d))/g, THIN_SPACE);
}
function Amount({
  value = 0,
  minority = 100,
  currency = 'RUB',
  view = 'default',
  size = 'm',
  color = 'default',
  transparentMinor = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const sign = value < 0 ? '\u2212' : '';
  const abs = Math.abs(value);
  const minorDigits = Math.max(0, String(minority).length - 1);
  const major = Math.floor(abs / minority);
  const minor = abs - major * minority;
  const majorStr = splitThousands(String(major));
  const minorStr = minorDigits > 0 ? String(minor).padStart(minorDigits, '0') : '';
  const hideMinor = view === 'withZeroMinorPart' && minor === 0;
  const currencySign = CURRENCY_SIGN[currency] || currency;
  const classes = ['alfa-amount', `alfa-amount--${size}`, color !== 'default' ? `alfa-amount--${color}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, restProps), sign, majorStr, !hideMinor && minorStr ? /*#__PURE__*/React.createElement("span", {
    className: transparentMinor ? 'alfa-amount__minor--dim' : undefined
  }, ",", minorStr) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-amount__currency"
  }, currencySign));
}
Object.assign(__ds_scope, { Amount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Amount.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/* Alfa-Bank Avatar — round identity token with image or initials. */

const STYLE_ID = 'alfa-avatar-styles';
const CSS = `
.alfa-avatar {
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 50%; overflow: hidden;
    font-family: var(--font-system); font-weight: 500;
    background: var(--surface-tertiary); color: var(--text-primary);
    flex: 0 0 auto;
}
.alfa-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.alfa-avatar--brand { background: var(--accent-primary); color: #fff; }
.alfa-avatar--dark { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-avatar--32 { width: 32px; height: 32px; font-size: 13px; }
.alfa-avatar--40 { width: 40px; height: 40px; font-size: 15px; }
.alfa-avatar--48 { width: 48px; height: 48px; font-size: 17px; }
.alfa-avatar--56 { width: 56px; height: 56px; font-size: 20px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Avatar({
  size = 48,
  src,
  initials,
  tone = 'neutral',
  className = ''
}) {
  useStyles();
  const toneClass = tone === 'neutral' ? '' : `alfa-avatar--${tone}`;
  const classes = ['alfa-avatar', `alfa-avatar--${size}`, toneClass, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials || ''
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/* Alfa-Bank Badge — notification counter or status dot. */

const STYLE_ID = 'alfa-badge-styles';
const CSS = `
.alfa-badge {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-system); font-weight: 500;
    box-sizing: border-box;
}
.alfa-badge--count {
    min-width: 20px; height: 20px; padding: 0 6px;
    border-radius: 99px;
    background: var(--accent-primary);
    color: #fff;
    font-size: 12px; line-height: 20px;
}
.alfa-badge--dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent-primary); }
.alfa-badge--neutral.alfa-badge--count, .alfa-badge--neutral.alfa-badge--dot { background: var(--surface-quaternary); color: var(--text-primary); }
.alfa-badge--positive.alfa-badge--count, .alfa-badge--positive.alfa-badge--dot { background: var(--status-positive); color:#fff; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Badge({
  view = 'count',
  tone = 'accent',
  content,
  className = ''
}) {
  useStyles();
  const classes = ['alfa-badge', `alfa-badge--${view}`, `alfa-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, view === 'count' ? content : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Banner.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Banner — promotional card with a title, supporting text, a CTA and
   an optional graphic slot + closer. Mirrors the marketing banner patterns
   ([D] BannerLong / BannerFinal):
   - theme: 'light' | 'dark' | 'red'
   - onAction(event) for the CTA, onClose(event) for the closer
   - graphic slot (image / illustration) on the right */

const STYLE_ID = 'alfa-banner-styles';
const CSS = `
.alfa-banner {
    position: relative; display: flex; align-items: center; gap: 20px; box-sizing: border-box;
    padding: 24px; border-radius: 20px; overflow: hidden; font-family: var(--font-system);
    background: var(--surface-primary); color: var(--text-primary);
}
.alfa-banner--light { background: var(--surface-secondary); }
.alfa-banner--dark { background: var(--accent-secondary); color: var(--text-inverted-primary, #fff); }
.alfa-banner--red { background: var(--accent-primary); color: #fff; }
.alfa-banner__content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; align-items: flex-start; }
.alfa-banner__title { font-size: 20px; line-height: 26px; font-weight: 500; margin: 0; }
.alfa-banner__text { font-size: 15px; line-height: 21px; margin: 0; opacity: .8; }
.alfa-banner__cta {
    margin-top: 12px; border: none; cursor: pointer; font-family: inherit;
    font-size: 15px; font-weight: 500; line-height: 20px; padding: 11px 20px; border-radius: 12px;
    transition: background-color .12s ease, transform .1s ease;
}
.alfa-banner__cta:active { transform: scale(.98); }
.alfa-banner--light .alfa-banner__cta, .alfa-banner__cta { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-banner--dark .alfa-banner__cta { background: #fff; color: var(--accent-secondary); }
.alfa-banner--red .alfa-banner__cta { background: #fff; color: var(--accent-primary); }
.alfa-banner__graphic { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; }
.alfa-banner__closer {
    position: absolute; top: 14px; right: 14px; width: 28px; height: 28px;
    border: none; border-radius: 50%; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
    background: var(--color-neutral-translucent-100); color: inherit; opacity: .7; transition: opacity .12s ease;
}
.alfa-banner--dark .alfa-banner__closer, .alfa-banner--red .alfa-banner__closer { background: rgba(255,255,255,.16); }
.alfa-banner__closer:hover { opacity: 1; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Banner({
  title,
  text,
  buttonText,
  theme = 'light',
  graphic,
  hasCloser = false,
  onAction,
  onClose,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const handleAction = event => {
    if (onAction) onAction(event);
  };
  const handleClose = event => {
    if (onClose) onClose(event);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-banner alfa-banner--${theme} ${className}`
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-banner__content"
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "alfa-banner__title"
  }, title) : null, text ? /*#__PURE__*/React.createElement("p", {
    className: "alfa-banner__text"
  }, text) : null, children, buttonText ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-banner__cta",
    onClick: handleAction
  }, buttonText) : null), graphic ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-banner__graphic"
  }, graphic) : null, hasCloser ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-banner__closer",
    onClick: handleClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5859 12.0001L6 16.5L7.5 18L12.0001 13.4143L16.5 18L18 16.5L13.4143 12.0001L18 7.5L16.5 6L12.0001 10.5859L7.5 6L6 7.5L10.5859 12.0001Z",
    fill: "currentColor"
  }))) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Banner.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Card — the base surface container: white, soft radius, optional shadow. */

const STYLE_ID = 'alfa-card-styles';
const CSS = `
.alfa-card {
    background: var(--surface-primary);
    border-radius: 20px;
    box-sizing: border-box;
}
.alfa-card--padded { padding: 20px; }
.alfa-card--flat { box-shadow: none; border: 1px solid var(--border-secondary); }
.alfa-card--raised { box-shadow: var(--shadow-s); }
.alfa-card--floating { box-shadow: var(--shadow-m); }
.alfa-card--secondary { background: var(--surface-secondary); }
.alfa-card--interactive { cursor: pointer; transition: box-shadow .15s ease, transform .08s ease; }
.alfa-card--interactive:hover { box-shadow: var(--shadow-m); }
.alfa-card--interactive:active { transform: scale(0.995); }
@media (prefers-reduced-motion: reduce) { .alfa-card--interactive { transition: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Card({
  elevation = 'flat',
  surface = 'primary',
  padded = true,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const classes = ['alfa-card', `alfa-card--${elevation}`, surface === 'secondary' ? 'alfa-card--secondary' : '', padded ? 'alfa-card--padded' : '', interactive ? 'alfa-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/CircularTimer.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank CircularTimer — an SLA ring + remaining-time label. The arc fills
   clockwise to `value` (0–1); tone colours the arc (positive/attention/negative)
   and can be derived automatically from the value via tone='auto'. */

const STYLE_ID = 'alfa-timer-styles';
const CSS = `
.alfa-timer { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-system); }
.alfa-timer__ring { flex: 0 0 auto; display: block; }
.alfa-timer__text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.alfa-timer__main { font-size: 15px; line-height: 20px; color: var(--text-primary); white-space: nowrap; }
.alfa-timer__sub { font-size: 13px; line-height: 16px; color: var(--text-tertiary); white-space: nowrap; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const TONE_COLORS = {
  positive: 'var(--status-positive)',
  attention: 'var(--status-attention)',
  negative: 'var(--status-negative)',
  info: 'var(--status-info)',
  neutral: 'var(--color-neutral-500)'
};
function CircularTimer({
  value = 0,
  tone = 'auto',
  size = 22,
  thickness = 3,
  label,
  sublabel,
  children,
  className = '',
  ...rest
}) {
  useStyles();
  const v = Math.max(0, Math.min(1, value));
  let resolvedTone = tone;
  if (tone === 'auto') {
    resolvedTone = v >= 0.5 ? 'positive' : v >= 0.2 ? 'attention' : 'negative';
  }
  const color = TONE_COLORS[resolvedTone] || TONE_COLORS.neutral;
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * v;
  const ring = /*#__PURE__*/React.createElement("svg", {
    className: "alfa-timer__ring",
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: "var(--color-neutral-300)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${circ - dash}`,
    transform: `rotate(-90 ${c} ${c})`
  }));
  if (label == null && sublabel == null && children == null) return ring;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `alfa-timer ${className}`
  }, rest), ring, children != null ? children : /*#__PURE__*/React.createElement("span", {
    className: "alfa-timer__text"
  }, label != null ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-timer__main"
  }, label) : null, sublabel != null ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-timer__sub"
  }, sublabel) : null));
}
Object.assign(__ds_scope, { CircularTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CircularTimer.jsx", error: String((e && e.message) || e) }); }

// components/display/Collapse.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Collapse — expandable section (accordion item). Mirrors
   @alfalab/core-components-collapse conventions:
   - controlled `expanded` + onExpandedChange(event, { expanded }), or
     uncontrolled via `defaultExpanded`
   - chevron rotates; body animates open via grid-template-rows */

const STYLE_ID = 'alfa-collapse-styles';
const CSS = `
.alfa-collapse { font-family: var(--font-system); border-bottom: 1px solid var(--border-secondary); }
.alfa-collapse--card { border: none; background: var(--surface-primary); border-radius: 16px; padding: 4px 16px; }
.alfa-collapse__head {
    width: 100%; display: flex; align-items: center; gap: 12px; padding: 16px 0; cursor: pointer;
    border: none; background: none; text-align: left; font-family: inherit; color: var(--text-primary);
}
.alfa-collapse__title { flex: 1; font-size: 16px; line-height: 22px; font-weight: 500; }
.alfa-collapse__chevron { flex: 0 0 auto; color: var(--text-secondary); transition: transform .2s ease; }
.alfa-collapse--open .alfa-collapse__chevron { transform: rotate(180deg); }
.alfa-collapse__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .22s ease; }
.alfa-collapse--open .alfa-collapse__panel { grid-template-rows: 1fr; }
.alfa-collapse__inner { overflow: hidden; }
.alfa-collapse__body { padding: 0 0 16px; font-size: 15px; line-height: 22px; color: var(--text-secondary); }
@media (prefers-reduced-motion: reduce) { .alfa-collapse__panel { transition: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Collapse({
  title,
  expanded: expandedProp,
  defaultExpanded = false,
  view = 'line',
  onExpandedChange,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const isControlled = expandedProp != null;
  const [expandedState, setExpandedState] = React.useState(defaultExpanded);
  const expanded = isControlled ? expandedProp : expandedState;
  const handleToggle = event => {
    const next = !expanded;
    if (!isControlled) setExpandedState(next);
    if (onExpandedChange) onExpandedChange(event, {
      expanded: next
    });
  };
  const classes = ['alfa-collapse', `alfa-collapse--${view}`, expanded ? 'alfa-collapse--open' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, restProps), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-collapse__head",
    onClick: handleToggle,
    "aria-expanded": expanded
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-collapse__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "alfa-collapse__chevron"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 8l5 5 5-5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "alfa-collapse__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alfa-collapse__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alfa-collapse__body"
  }, children))));
}
Object.assign(__ds_scope, { Collapse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Collapse.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Divider — a hairline separator. Mirrors @alfalab/core-components-divider:
   - orientation 'horizontal' (default) | 'vertical'
   - dashed, and inset (left padding to align under list-row content) */

const STYLE_ID = 'alfa-divider-styles';
const CSS = `
.alfa-divider { border: none; margin: 0; background: var(--border-secondary); flex: 0 0 auto; }
.alfa-divider--horizontal { width: 100%; height: 1px; }
.alfa-divider--vertical { width: 1px; align-self: stretch; min-height: 16px; }
.alfa-divider--dashed { background: none; }
.alfa-divider--dashed.alfa-divider--horizontal { border-top: 1px dashed var(--border-secondary); height: 0; }
.alfa-divider--dashed.alfa-divider--vertical { border-left: 1px dashed var(--border-secondary); width: 0; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Divider({
  orientation = 'horizontal',
  dashed = false,
  inset = 0,
  className = '',
  style,
  ...restProps
}) {
  useStyles();
  const classes = ['alfa-divider', `alfa-divider--${orientation}`, dashed ? 'alfa-divider--dashed' : '', className].filter(Boolean).join(' ');
  const insetStyle = inset && orientation === 'horizontal' ? {
    marginLeft: inset,
    width: `calc(100% - ${inset}px)`
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: classes,
    style: {
      ...insetStyle,
      ...style
    }
  }, restProps));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/EntityCard.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank EntityCard — a record card for management/registry lists (admin
   rules, routes, SLA entries). Header carries a status + meta pill + id, then a
   title, description, a stack of labelled condition rows, a meta line, and a
   footer of actions (with one optional destructive action pushed to the right). */

const STYLE_ID = 'alfa-entitycard-styles';
const CSS = `
.alfa-entitycard { background: var(--surface-primary); border-radius: 20px; padding: 24px; box-sizing: border-box;
    font-family: var(--font-system); color: var(--text-primary); display: flex; flex-direction: column; }
.alfa-entitycard__head { display: flex; align-items: center; gap: 10px; }
.alfa-entitycard__pill { display: inline-flex; align-items: center; font-size: 12px; line-height: 16px; font-weight: 500;
    color: var(--text-secondary); background: var(--surface-secondary); border-radius: 99px; padding: 4px 10px; white-space: nowrap; }
.alfa-entitycard__id { margin-left: auto; font-size: 14px; line-height: 18px; color: var(--text-tertiary); white-space: nowrap; }
.alfa-entitycard__id b { color: var(--text-secondary); font-weight: 500; }
.alfa-entitycard__title { font-size: 20px; line-height: 26px; font-weight: 700; margin: 16px 0 0; }
.alfa-entitycard__desc { font-size: 15px; line-height: 20px; color: var(--text-tertiary); margin: 8px 0 0; }
.alfa-entitycard__rows { margin: 12px 0 0; display: flex; flex-direction: column; gap: 6px; }
.alfa-entitycard__row { font-size: 15px; line-height: 22px; color: var(--text-primary); }
.alfa-entitycard__row-label { color: var(--text-secondary); }
.alfa-entitycard__meta { font-size: 14px; line-height: 18px; color: var(--text-tertiary); margin: 14px 0 0;
    display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; }
.alfa-entitycard__meta b { color: var(--text-secondary); font-weight: 500; }
.alfa-entitycard__meta-sep { color: var(--text-quaternary); }
.alfa-entitycard__footer { display: flex; align-items: center; gap: 12px; margin-top: 20px; }
.alfa-entitycard__footer-right { margin-left: auto; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function EntityCard({
  status,
  pill,
  id,
  title,
  description,
  rows = [],
  meta,
  actions,
  destructiveAction,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-entitycard ${className}`
  }, rest), status || pill || id != null ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-entitycard__head"
  }, status || null, pill ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-entitycard__pill"
  }, pill) : null, id != null ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-entitycard__id"
  }, /*#__PURE__*/React.createElement("b", null, "ID"), "\xA0\xA0", id) : null) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "alfa-entitycard__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "alfa-entitycard__desc"
  }, description) : null, rows.length ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-entitycard__rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "alfa-entitycard__row",
    key: i
  }, r.label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-entitycard__row-label"
  }, r.label, ": ") : null, r.value))) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-entitycard__meta"
  }, Array.isArray(meta) ? meta.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-entitycard__meta-sep"
  }, "\xB7") : null, /*#__PURE__*/React.createElement("span", null, m.label ? /*#__PURE__*/React.createElement("span", null, m.label, "\xA0") : null, /*#__PURE__*/React.createElement("b", null, m.value)))) : meta) : null, children, actions || destructiveAction ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-entitycard__footer"
  }, actions, destructiveAction ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-entitycard__footer-right"
  }, destructiveAction) : null) : null);
}
Object.assign(__ds_scope, { EntityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/EntityCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Link.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Link — inline text link with optional addons. Mirrors
   @alfalab/core-components-link conventions:
   - view: 'default' (info blue) | 'primary' (ink) | 'secondary' (muted)
   - pseudo (dashed underline), leftAddons / rightAddons
   - renders <a>, or a <button> when no href is given */

const STYLE_ID = 'alfa-link-styles';
const CSS = `
.alfa-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-system); font-size: inherit; line-height: inherit; font-weight: 500;
    text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
    transition: color .12s ease, opacity .12s ease;
}
.alfa-link--default { color: var(--text-info); }
.alfa-link--default:hover { color: var(--status-info-hover, #2a77ef); }
.alfa-link--primary { color: var(--text-primary); }
.alfa-link--primary:hover { opacity: .7; }
.alfa-link--secondary { color: var(--text-secondary); }
.alfa-link--secondary:hover { color: var(--text-primary); }
.alfa-link__text { text-underline-offset: 2px; }
.alfa-link--underline .alfa-link__text { text-decoration: underline; }
.alfa-link--pseudo .alfa-link__text { text-decoration: underline; text-decoration-style: dashed; text-decoration-color: currentColor; opacity: .6; }
.alfa-link--pseudo:hover .alfa-link__text { opacity: 1; }
.alfa-link__addon { display: inline-flex; flex: 0 0 auto; }
.alfa-link__addon svg, .alfa-link__addon img { display: block; width: 20px; height: 20px; }
.alfa-link:focus-visible { outline: 2px solid var(--focus-color); outline-offset: 2px; border-radius: 2px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Link({
  href,
  view = 'default',
  underline = false,
  pseudo = false,
  leftAddons,
  rightAddons,
  onClick,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const classes = ['alfa-link', `alfa-link--${view}`, underline ? 'alfa-link--underline' : '', pseudo ? 'alfa-link--pseudo' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, leftAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-link__addon"
  }, leftAddons) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-link__text"
  }, children), rightAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-link__addon"
  }, rightAddons) : null);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: href,
      onClick: onClick
    }, restProps), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    onClick: onClick
  }, restProps), content);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Link.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank StatCard — a single dashboard metric cell: optional icon tile,
   label, large value, an optional status dot and a trailing chevron when the
   metric links somewhere. Compose several inside a Card for a summary panel. */

const STYLE_ID = 'alfa-statcard-styles';
const CSS = `
.alfa-statcard { display: flex; align-items: flex-start; gap: 16px; font-family: var(--font-system);
    background: none; border: none; padding: 0; text-align: left; width: 100%; box-sizing: border-box; color: inherit; }
.alfa-statcard--link { cursor: pointer; }
.alfa-statcard__ico { width: 48px; height: 48px; border-radius: 14px; flex: 0 0 auto;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center; }
.alfa-statcard__ico img, .alfa-statcard__ico svg { width: 24px; height: 24px; display: block; }
.alfa-statcard__body { flex: 1; min-width: 0; }
.alfa-statcard__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.alfa-statcard__label { font-size: 15px; line-height: 20px; color: var(--text-secondary); }
.alfa-statcard__chev { color: var(--text-tertiary); display: inline-flex; flex: 0 0 auto; transition: color .12s ease, transform .12s ease; }
.alfa-statcard--link:hover .alfa-statcard__chev { color: var(--text-secondary); transform: translateX(2px); }
.alfa-statcard__value { display: flex; align-items: center; gap: 8px; margin-top: 6px;
    font-size: 26px; line-height: 32px; font-weight: 700; color: var(--text-primary); }
.alfa-statcard__value--lg { font-size: 30px; line-height: 36px; }
.alfa-statcard__dot { width: 9px; height: 9px; border-radius: 50%; flex: 0 0 auto; }
.alfa-statcard__dot--positive { background: var(--status-positive); }
.alfa-statcard__dot--negative { background: var(--status-negative); }
.alfa-statcard__dot--attention { background: var(--status-attention); }
.alfa-statcard__dot--info { background: var(--status-info); }
.alfa-statcard__dot--neutral { background: var(--color-neutral-500); }
.alfa-statcard--hairline { border-bottom: 1px solid var(--border-secondary); padding-bottom: 18px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function StatCard({
  icon,
  label,
  value,
  dot,
  size = 'm',
  href,
  onClick,
  className = '',
  ...rest
}) {
  useStyles();
  const linkable = Boolean(href || onClick);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  const showChevron = linkable;
  const props = href ? {
    href
  } : onClick ? {
    type: 'button',
    onClick
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `alfa-statcard ${linkable ? 'alfa-statcard--link' : ''} ${className}`
  }, props, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-statcard__ico"
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-statcard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-statcard__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-statcard__label"
  }, label), showChevron ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-statcard__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))) : null), /*#__PURE__*/React.createElement("span", {
    className: `alfa-statcard__value ${size === 'l' ? 'alfa-statcard__value--lg' : ''}`
  }, /*#__PURE__*/React.createElement("span", null, value), dot ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-statcard__dot alfa-statcard__dot--${dot}`
  }) : null)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/StatStrip.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank StatStrip — a horizontal band of compact metrics used atop list
   views (the «В очереди / В работе / Назначено …» summary bar). Each item is a
   small label over a bold value with an optional colour dot. Items can be
   highlighted (dark pill + icon) or visually grouped into a soft surface block. */

const STYLE_ID = 'alfa-statstrip-styles';
const CSS = `
.alfa-statstrip { display: flex; align-items: stretch; gap: 4px; font-family: var(--font-system);
    background: var(--surface-primary); border-radius: 20px; padding: 8px; box-sizing: border-box; flex-wrap: wrap; }
.alfa-statstrip__group { display: flex; align-items: stretch; gap: 4px; background: var(--surface-secondary);
    border-radius: 16px; padding: 4px; }
.alfa-statstrip__item { display: flex; flex-direction: column; gap: 6px; justify-content: center;
    padding: 14px 22px; border-radius: 14px; background: none; border: none; text-align: left;
    font-family: inherit; color: inherit; min-width: 0; transition: background-color .12s ease; }
.alfa-statstrip__item--link { cursor: pointer; }
.alfa-statstrip__item--link:hover { background: var(--color-neutral-translucent-100); }
.alfa-statstrip__item--highlight { background: var(--color-neutral-100); flex-direction: row; align-items: center; gap: 14px; }
.alfa-statstrip__item--highlight:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-statstrip__ico { width: 44px; height: 44px; border-radius: 12px; flex: 0 0 auto;
    background: var(--surface-primary); color: var(--text-secondary); display: inline-flex; align-items: center; justify-content: center; }
.alfa-statstrip__ico img, .alfa-statstrip__ico svg { width: 22px; height: 22px; display: block; }
.alfa-statstrip__label { font-size: 13px; line-height: 16px; color: var(--text-secondary); white-space: nowrap; }
.alfa-statstrip__val { display: flex; align-items: center; gap: 8px; font-size: 22px; line-height: 26px;
    font-weight: 700; color: var(--text-primary); white-space: nowrap; }
.alfa-statstrip__item--highlight .alfa-statstrip__val { font-size: 18px; line-height: 22px; }
.alfa-statstrip__dot { width: 9px; height: 9px; border-radius: 50%; flex: 0 0 auto; }
.alfa-statstrip__dot--positive { background: var(--status-positive); }
.alfa-statstrip__dot--negative { background: var(--status-negative); }
.alfa-statstrip__dot--attention { background: var(--status-attention); }
.alfa-statstrip__dot--info { background: #5b7cff; }
.alfa-statstrip__dot--neutral { background: var(--color-neutral-500); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Item({
  item,
  onItemClick
}) {
  const linkable = Boolean(item.onClick || onItemClick);
  const Tag = linkable ? 'button' : 'div';
  const cls = ['alfa-statstrip__item', item.highlight ? 'alfa-statstrip__item--highlight' : '', linkable ? 'alfa-statstrip__item--link' : ''].filter(Boolean).join(' ');
  const handle = linkable ? e => {
    if (item.onClick) item.onClick(e, {
      item
    });
    if (onItemClick) onItemClick(e, {
      item
    });
  } : undefined;
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    type: linkable ? 'button' : undefined,
    onClick: handle
  }, item.highlight && item.icon ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-statstrip__ico"
  }, item.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-statstrip__label"
  }, item.label), /*#__PURE__*/React.createElement("span", {
    className: "alfa-statstrip__val"
  }, /*#__PURE__*/React.createElement("span", null, item.value), item.dot ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-statstrip__dot alfa-statstrip__dot--${item.dot}`
  }) : null)));
}
function StatStrip({
  items = [],
  onItemClick,
  className = '',
  ...rest
}) {
  useStyles();
  // group consecutive items sharing a non-null `group` into a soft block
  const blocks = [];
  items.forEach((item, i) => {
    const last = blocks[blocks.length - 1];
    if (item.group != null && last && last.group === item.group) {
      last.items.push({
        item,
        i
      });
    } else if (item.group != null) {
      blocks.push({
        group: item.group,
        items: [{
          item,
          i
        }]
      });
    } else {
      blocks.push({
        group: null,
        items: [{
          item,
          i
        }]
      });
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-statstrip ${className}`
  }, rest), blocks.map((b, bi) => b.group != null ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-statstrip__group",
    key: `g${bi}`
  }, b.items.map(({
    item,
    i
  }) => /*#__PURE__*/React.createElement(Item, {
    key: item.id ?? i,
    item: item,
    onItemClick: onItemClick
  }))) : b.items.map(({
    item,
    i
  }) => /*#__PURE__*/React.createElement(Item, {
    key: item.id ?? i,
    item: item,
    onItemClick: onItemClick
  }))));
}
Object.assign(__ds_scope, { StatStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatStrip.jsx", error: String((e && e.message) || e) }); }

// components/display/Status.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Status — compact state label (a payment status, an order state).
   Mirrors @alfalab/core-components-status conventions:
   - color: green | red | orange | blue | grey | purple | teal
   - view: 'contrast' (solid) | 'soft' (muted fill) | 'default' (text + dot)
   - uppercase, tracked, with an optional leading dot */

const STYLE_ID = 'alfa-status-styles';
const CSS = `
.alfa-status {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-system); font-weight: 700;
    font-size: 11px; line-height: 14px; letter-spacing: 0.4px; text-transform: uppercase;
    padding: 5px 8px; border-radius: 8px; white-space: nowrap;
}
.alfa-status--default { padding-left: 0; background: transparent; }
.alfa-status__dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 auto; background: currentColor; }

/* color map → text / soft fill / contrast fill */
.alfa-status--green   { --_solid: var(--status-positive);  --_text: var(--text-positive);  --_soft: var(--status-muted-positive); }
.alfa-status--red     { --_solid: var(--status-negative);  --_text: var(--text-negative);  --_soft: var(--status-muted-negative); }
.alfa-status--orange  { --_solid: var(--status-attention); --_text: var(--text-attention); --_soft: var(--status-muted-attention); }
.alfa-status--blue    { --_solid: var(--status-info);      --_text: var(--text-info);      --_soft: var(--status-muted-info); }
.alfa-status--grey    { --_solid: var(--color-neutral-700); --_text: var(--text-secondary); --_soft: var(--color-neutral-100); }
.alfa-status--purple  { --_solid: #6a4dff; --_text: #5a3ee6; --_soft: #ece8ff; }
.alfa-status--teal    { --_solid: #0bb3b3; --_text: #079393; --_soft: #d6f5f5; }

.alfa-status--default  { color: var(--_text); }
.alfa-status--soft     { color: var(--_text); background: var(--_soft); }
.alfa-status--contrast { color: #fff; background: var(--_solid); }
.alfa-status--contrast.alfa-status--grey { color: #fff; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Status({
  color = 'grey',
  view = 'soft',
  dot = false,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const classes = ['alfa-status', `alfa-status--${color}`, `alfa-status--${view}`, className].filter(Boolean).join(' ');
  const showDot = dot || view === 'default';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, restProps), showDot ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-status__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Status });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Status.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Tag — filled / outlined chip used as a filter, choice or static
   label. Mirrors the Figma [D]/[M] Tag family axes:
   - view:  'filled' (neutral fill, default) | 'outlined' (hairline)
   - size:  'xs' 24 | 's' 32 | 'm' 40 | 'l' 48  (px height)
   - shape: 'rounded' (full pill, default) | 'rectangular' (12px radius)
   - selected / disabled states
   - indicator: leading status dot — 'none' | 'positive' | 'negative' |
                'attention' | 'info' | a CSS color
   - tone: status-tinted fills ('neutral' default | positive | negative | info)
   - inverted: render on a dark surface
   Renders a <button> by default; pass `as="span"` / `static` for a label. */

const STYLE_ID = 'alfa-tag-styles';
const CSS = `
.alfa-tag {
    display: inline-flex; align-items: center; gap: 6px; box-sizing: border-box;
    font-family: var(--font-system); font-weight: 500; white-space: nowrap;
    border: 1px solid transparent; border-radius: 99px;
    background: var(--color-neutral-100); color: var(--text-primary);
    cursor: pointer; transition: background-color .12s ease, color .12s ease, border-color .12s ease;
    -webkit-tap-highlight-color: transparent;
}
/* sizes */
.alfa-tag--xs { height: 24px; padding: 0 10px; font-size: 13px; line-height: 16px; gap: 4px; }
.alfa-tag--s  { height: 32px; padding: 0 12px; font-size: 14px; line-height: 18px; }
.alfa-tag--m  { height: 40px; padding: 0 16px; font-size: 15px; line-height: 20px; }
.alfa-tag--l  { height: 48px; padding: 0 20px; font-size: 16px; line-height: 22px; }
/* shape */
.alfa-tag--rectangular { border-radius: 12px; }
.alfa-tag--xs.alfa-tag--rectangular { border-radius: 8px; }

.alfa-tag:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-tag:active { background: var(--neutral-100-press, var(--color-neutral-300)); }

/* outlined view */
.alfa-tag--outlined { background: transparent; border-color: var(--border-primary); }
.alfa-tag--outlined:hover { background: var(--color-neutral-translucent-100); }

/* selected */
.alfa-tag--selected { background: var(--accent-secondary); color: var(--text-inverted-primary); border-color: transparent; }
.alfa-tag--selected:hover { background: var(--accent-secondary-hover); }
.alfa-tag--selected:active { background: var(--accent-secondary-press); }

/* status tones */
.alfa-tag--positive { background: var(--status-muted-positive); color: var(--text-positive); }
.alfa-tag--negative { background: var(--status-muted-negative); color: var(--text-negative); }
.alfa-tag--info     { background: var(--status-muted-info);     color: var(--text-info); }
.alfa-tag--attention{ background: var(--status-muted-attention);color: var(--text-attention); }

/* disabled */
.alfa-tag--disabled { background: var(--color-neutral-100); color: var(--text-tertiary); cursor: not-allowed; border-color: transparent; }
.alfa-tag--disabled:hover, .alfa-tag--disabled:active { background: var(--color-neutral-100); }

/* static (non-interactive label) */
.alfa-tag--static { cursor: default; }
.alfa-tag--static:hover { background: var(--color-neutral-100); }

/* indicator dot + icons */
.alfa-tag__dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 auto; }
.alfa-tag__dot--positive { background: var(--status-positive); }
.alfa-tag__dot--negative { background: var(--status-negative); }
.alfa-tag__dot--attention { background: var(--status-attention); }
.alfa-tag__dot--info { background: var(--status-info); }
.alfa-tag img, .alfa-tag svg { width: 16px; height: 16px; display: block; }
.alfa-tag--l img, .alfa-tag--l svg { width: 20px; height: 20px; }

/* ---- inverted (dark surface) ---- */
.alfa-tag--inverted { background: var(--color-neutral-translucent-inverted-100); color: var(--text-inverted-primary); }
.alfa-tag--inverted:hover { background: var(--color-neutral-translucent-inverted-200); }
.alfa-tag--inverted.alfa-tag--outlined { background: transparent; border-color: var(--color-neutral-inverted-400); }
.alfa-tag--inverted.alfa-tag--selected { background: #fff; color: var(--accent-secondary); }
.alfa-tag--inverted.alfa-tag--disabled { color: var(--text-inverted-tertiary); background: var(--color-neutral-translucent-inverted-100); }
.alfa-tag--inverted.alfa-tag--positive { background: var(--status-muted-inverted-positive); color: var(--status-inverted-positive); }
.alfa-tag--inverted.alfa-tag--negative { background: var(--status-muted-inverted-negative); color: var(--status-inverted-negative); }
.alfa-tag--inverted.alfa-tag--info     { background: var(--status-muted-inverted-info);     color: var(--status-inverted-info); }
.alfa-tag--inverted.alfa-tag--attention{ background: var(--status-muted-inverted-attention);color: var(--status-inverted-attention); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const STATUS_DOTS = {
  positive: true,
  negative: true,
  attention: true,
  info: true
};
function Tag({
  view = 'filled',
  size = 's',
  shape = 'rounded',
  tone = 'neutral',
  selected = false,
  disabled = false,
  indicator = 'none',
  leftAddons,
  rightAddons,
  static: isStatic = false,
  inverted = false,
  value,
  as,
  className = '',
  onClick,
  children,
  ...rest
}) {
  useStyles();
  const Comp = as || (isStatic ? 'span' : 'button');
  const toneClass = !selected && tone !== 'neutral' ? `alfa-tag--${tone}` : '';
  const classes = ['alfa-tag', `alfa-tag--${size}`, view === 'outlined' ? 'alfa-tag--outlined' : '', shape === 'rectangular' ? 'alfa-tag--rectangular' : '', toneClass, selected ? 'alfa-tag--selected' : '', disabled ? 'alfa-tag--disabled' : '', isStatic ? 'alfa-tag--static' : '', inverted ? 'alfa-tag--inverted' : '', className].filter(Boolean).join(' ');
  const dotClass = indicator && indicator !== 'none' ? STATUS_DOTS[indicator] ? `alfa-tag__dot alfa-tag__dot--${indicator}` : 'alfa-tag__dot' : '';
  const dotStyle = indicator && indicator !== 'none' && !STATUS_DOTS[indicator] ? {
    background: indicator
  } : undefined;
  const extra = Comp === 'button' ? {
    type: 'button',
    disabled
  } : {};
  const handleClick = e => {
    if (disabled) return;
    if (onClick) onClick(e, {
      value
    });
  };
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: classes,
    onClick: handleClick
  }, extra, rest), indicator && indicator !== 'none' ? /*#__PURE__*/React.createElement("span", {
    className: dotClass,
    style: dotStyle
  }) : null, leftAddons ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leftAddons) : null, children, rightAddons ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, rightAddons) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
__defLazy("Notification", () => { try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Notification — toast / plate / system message: a status glyph,
   title, optional text and a closer. Mirrors
   @alfalab/core-components-notification + toast conventions:
   - badge: 'positive' | 'negative' | 'attention' | 'info' | null
   - view: 'toast' (floating white card, default) | 'plate' (full-width,
           status-tinted, flush) | 'system' (compact inline bar)
   - inverted: render on a dark surface
   - onClose(event) — closer / auto-dismiss
   - autoCloseDelay (ms) to self-dismiss; actionButton slot */

const STYLE_ID = 'alfa-notification-styles';
const CSS = `
.alfa-notification {
    display: flex; align-items: flex-start; gap: 12px; box-sizing: border-box;
    width: 100%; max-width: 380px; padding: 16px; border-radius: 16px;
    background: var(--surface-primary); box-shadow: var(--shadow-m);
    font-family: var(--font-system);
}
.alfa-notification__icon { flex: 0 0 auto; width: 24px; height: 24px; display: inline-flex; }
.alfa-notification__icon--positive { color: var(--status-positive); }
.alfa-notification__icon--negative { color: var(--status-negative); }
.alfa-notification__icon--attention { color: var(--status-attention); }
.alfa-notification__icon--info { color: var(--status-info); }
.alfa-notification__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.alfa-notification__title { font-size: 15px; line-height: 20px; font-weight: 500; color: var(--text-primary); }
.alfa-notification__text { font-size: 14px; line-height: 20px; color: var(--text-secondary); }
.alfa-notification__action { margin-top: 8px; display: inline-flex; }
.alfa-notification__action button, .alfa-notification__action a {
    border: none; background: transparent; padding: 0; cursor: pointer;
    font-family: inherit; font-size: 14px; line-height: 20px; font-weight: 500; color: var(--text-info);
}
.alfa-notification__closer {
    flex: 0 0 auto; width: 24px; height: 24px; border: none; border-radius: 50%; cursor: pointer;
    background: transparent; color: var(--text-tertiary);
    display: inline-flex; align-items: center; justify-content: center; transition: background-color .12s ease, color .12s ease;
}
.alfa-notification__closer:hover { background: var(--color-neutral-100); color: var(--text-secondary); }

/* ---- view: plate (full-width, status-tinted, flush) ---- */
.alfa-notification--plate { max-width: none; border-radius: 12px; box-shadow: none; }
.alfa-notification--plate.alfa-notification--positive { background: var(--status-muted-positive); }
.alfa-notification--plate.alfa-notification--negative { background: var(--status-muted-negative); }
.alfa-notification--plate.alfa-notification--attention { background: var(--status-muted-attention); }
.alfa-notification--plate.alfa-notification--info { background: var(--status-muted-info); }
.alfa-notification--plate .alfa-notification__closer:hover { background: var(--color-neutral-translucent-100); }

/* ---- view: system (compact inline bar) ---- */
.alfa-notification--system { max-width: none; padding: 10px 12px; border-radius: 10px; gap: 10px; box-shadow: none; align-items: center; background: var(--color-neutral-100); }
.alfa-notification--system .alfa-notification__title { font-size: 14px; line-height: 18px; }

/* ---- inverted (dark surface) ---- */
.alfa-notification--inverted { background: var(--bg-modal-inverted-secondary); }
.alfa-notification--inverted .alfa-notification__title { color: var(--text-inverted-primary); }
.alfa-notification--inverted .alfa-notification__text { color: var(--text-inverted-secondary); }
.alfa-notification--inverted .alfa-notification__action button, .alfa-notification--inverted .alfa-notification__action a { color: var(--text-inverted-info); }
.alfa-notification--inverted .alfa-notification__closer { color: var(--text-inverted-tertiary); }
.alfa-notification--inverted .alfa-notification__closer:hover { background: var(--color-neutral-translucent-inverted-100); color: var(--text-inverted-secondary); }
.alfa-notification--inverted .alfa-notification__icon--positive { color: var(--status-inverted-positive); }
.alfa-notification--inverted .alfa-notification__icon--negative { color: var(--status-inverted-negative); }
.alfa-notification--inverted .alfa-notification__icon--attention { color: var(--status-inverted-attention); }
.alfa-notification--inverted .alfa-notification__icon--info { color: var(--status-inverted-info); }
.alfa-notification--inverted.alfa-notification--system { background: var(--color-neutral-inverted-300); }
.alfa-notification--inverted.alfa-notification--plate.alfa-notification--positive { background: var(--status-muted-inverted-positive); }
.alfa-notification--inverted.alfa-notification--plate.alfa-notification--negative { background: var(--status-muted-inverted-negative); }
.alfa-notification--inverted.alfa-notification--plate.alfa-notification--attention { background: var(--status-muted-inverted-attention); }
.alfa-notification--inverted.alfa-notification--plate.alfa-notification--info { background: var(--status-muted-inverted-info); }

@keyframes alfa-notification-in { from { opacity: 0; transform: translateY(-8px); } }
/* Entrance fade is opt-in: add the class on a freshly-mounted toast in a live
   browser. It is intentionally NOT in the base rule, so the notification is
   always visible in static capture / PDF / non-animating contexts. */
.alfa-notification--animate-in { animation: alfa-notification-in .2s ease; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const GLYPHS = {
  positive: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm-1.2 12.6L7 11.8l1.3-1.3 2.5 2.5 4.6-4.6L16.7 9.7l-5.9 5.9z",
    fill: "currentColor"
  }),
  negative: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm3 11.6L13.6 16 12 14.4 10.4 16 9 14.6 10.6 13 9 11.4 10.4 10 12 11.6 13.6 10 15 11.4 13.4 13 15 14.6z",
    fill: "currentColor"
  }),
  attention: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-3.5h-2V7h2v5.5z",
    fill: "currentColor"
  }),
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm1 13.5h-2V11h2v5.5zM12 9.4A1.2 1.2 0 1112 7a1.2 1.2 0 010 2.4z",
    fill: "currentColor"
  })
};
function Notification({
  badge = 'info',
  view = 'toast',
  inverted = false,
  title,
  text,
  actionButton,
  visible = true,
  hasCloser = true,
  autoCloseDelay,
  onClose,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const handleClose = React.useCallback(event => {
    if (onClose) onClose(event);
  }, [onClose]);
  React.useEffect(() => {
    if (!visible || !autoCloseDelay) return undefined;
    const id = setTimeout(() => handleClose({
      type: 'autoclose'
    }), autoCloseDelay);
    return () => clearTimeout(id);
  }, [visible, autoCloseDelay, handleClose]);
  if (!visible) return null;
  const classes = ['alfa-notification', view !== 'toast' ? `alfa-notification--${view}` : '', badge ? `alfa-notification--${badge}` : '', inverted ? 'alfa-notification--inverted' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    role: "status"
  }, restProps), badge ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-notification__icon alfa-notification__icon--${badge}`
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, GLYPHS[badge])) : null, /*#__PURE__*/React.createElement("div", {
    className: "alfa-notification__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-notification__title"
  }, title) : null, text || children ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-notification__text"
  }, text || children) : null, actionButton ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-notification__action"
  }, actionButton) : null), hasCloser ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-notification__closer",
    onClick: handleClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5859 12.0001L6 16.5L7.5 18L12.0001 13.4143L16.5 18L18 16.5L13.4143 12.0001L18 7.5L16.5 6L12.0001 10.5859L7.5 6L6 7.5L10.5859 12.0001Z",
    fill: "currentColor"
  }))) : null);
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); } });

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank ProgressBar — thin linear progress track. Mirrors
   @alfalab/core-components-progress-bar: `value` 0–100, a semantic `view`
   color, and an optional indeterminate mode for unknown-length work. */

const STYLE_ID = 'alfa-progress-styles';
const CSS = `
.alfa-progress { display: block; width: 100%; height: 6px; border-radius: 99px; background: var(--color-neutral-300); overflow: hidden; }
.alfa-progress__fill { height: 100%; border-radius: 99px; background: var(--accent-secondary); transition: width .3s ease; }
.alfa-progress__fill--accent { background: var(--accent-primary); }
.alfa-progress__fill--positive { background: var(--status-positive); }
.alfa-progress__fill--negative { background: var(--status-negative); }
.alfa-progress__fill--attention { background: var(--status-attention); }
.alfa-progress--indeterminate .alfa-progress__fill {
    width: 40% !important; border-radius: 99px;
    animation: alfa-progress-slide 1.2s ease-in-out infinite;
}
@keyframes alfa-progress-slide {
    0% { transform: translateX(-110%); }
    100% { transform: translateX(280%); }
}
@media (prefers-reduced-motion: reduce) {
    .alfa-progress--indeterminate .alfa-progress__fill { animation-duration: 2.4s; }
}
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function ProgressBar({
  value = 0,
  view = 'primary',
  indeterminate = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const clamped = Math.max(0, Math.min(100, value));
  const rootClasses = ['alfa-progress', indeterminate ? 'alfa-progress--indeterminate' : '', className].filter(Boolean).join(' ');
  const fillClasses = ['alfa-progress__fill', view !== 'primary' ? `alfa-progress__fill--${view}` : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses,
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : clamped,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: fillClasses,
    style: indeterminate ? undefined : {
      width: `${clamped}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Skeleton — shimmer placeholder shown while content loads. Mirrors
   @alfalab/core-components-skeleton: `visible` toggles between the shimmer and
   the real children; width/height/radius shape the block. */

const STYLE_ID = 'alfa-skeleton-styles';
const CSS = `
.alfa-skeleton {
    display: block; position: relative; overflow: hidden;
    background: var(--color-neutral-200);
    border-radius: var(--radius-8);
}
.alfa-skeleton::after {
    content: ''; position: absolute; inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
    animation: alfa-shimmer 1.4s ease-in-out infinite;
}
.alfa-skeleton--circle { border-radius: 50%; }
@keyframes alfa-shimmer { 100% { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce) {
    .alfa-skeleton::after { animation: alfa-skeleton-pulse 1.6s ease-in-out infinite; transform: none; background: rgba(255,255,255,0.4); }
}
@keyframes alfa-skeleton-pulse { 0%,100% { opacity: 0; } 50% { opacity: 1; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Skeleton({
  visible = true,
  width = '100%',
  height = 16,
  radius,
  circle = false,
  className = '',
  style,
  children,
  ...restProps
}) {
  useStyles();
  if (!visible) {
    return children != null ? children : null;
  }
  const classes = ['alfa-skeleton', circle ? 'alfa-skeleton--circle' : '', className].filter(Boolean).join(' ');
  const resolved = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...(radius != null ? {
      borderRadius: typeof radius === 'number' ? `${radius}px` : radius
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    style: resolved,
    "aria-hidden": "true"
  }, restProps));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Spinner — circular indeterminate loader. Mirrors
   @alfalab/core-components-spinner: a single size prop, inherits color via
   currentColor so it can sit on buttons, fields or surfaces. */

const STYLE_ID = 'alfa-spinner-styles';
const CSS = `
.alfa-spinner { display: inline-flex; flex: 0 0 auto; color: var(--accent-secondary); }
.alfa-spinner svg { display: block; animation: alfa-spin 0.7s linear infinite; }
@keyframes alfa-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .alfa-spinner svg { animation-duration: 1.6s; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Spinner({
  size = 24,
  className = '',
  style,
  ...restProps
}) {
  useStyles();
  const stroke = size <= 20 ? 2 : size <= 32 ? 2.4 : 3;
  const r = (size - stroke) / 2;
  const c = size / 2;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `alfa-spinner ${className}`,
    role: "status",
    "aria-label": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
    style: style
  }, restProps), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    stroke: "currentColor",
    strokeOpacity: "0.18",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${c} ${stroke / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${c}`,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round"
  })));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/AmountInput.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank AmountInput — money field with a large value, thin-space thousands
   and a trailing currency symbol. Mirrors @alfalab/core-components-amount-input:
   - onChange(event, { value, valueString }) — value is in MAJOR units (number|null)
   - thin-space (U+2009) grouping, comma decimal, ₽ suffix
   - internal handlers named handleX */

const STYLE_ID = 'alfa-amount-input-styles';
const CSS = `
.alfa-amount-input { display: inline-flex; flex-direction: column; gap: 4px; width: 100%; font-family: var(--font-system); }
.alfa-amount-input__label { font-size: 13px; line-height: 16px; color: var(--text-secondary); padding: 0 2px; }
.alfa-amount-input__shell {
    display: flex; align-items: baseline; gap: 4px;
    background: var(--surface-secondary);
    border: 1px solid transparent; border-radius: 16px;
    padding: 14px 16px; min-height: 56px; box-sizing: border-box;
    transition: background-color .12s ease, border-color .12s ease;
}
.alfa-amount-input__shell:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-amount-input__shell--focused { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-amount-input__shell--error { border-color: var(--status-negative); background: var(--surface-primary); }
.alfa-amount-input__shell--disabled { opacity: .5; pointer-events: none; }
.alfa-amount-input__field {
    flex: 1; min-width: 0; border: none; background: transparent; outline: none;
    font-family: inherit; font-weight: 500; font-size: 28px; line-height: 32px;
    color: var(--text-primary); padding: 0;
}
.alfa-amount-input__field::placeholder { color: var(--text-tertiary); }
.alfa-amount-input__currency { flex: 0 0 auto; font-weight: 500; font-size: 28px; line-height: 32px; color: var(--text-tertiary); }
.alfa-amount-input__shell--filled .alfa-amount-input__currency { color: var(--text-primary); }
.alfa-amount-input__hint { font-size: 12px; line-height: 16px; color: var(--text-secondary); padding: 0 16px; }
.alfa-amount-input__hint--error { color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const THIN = '\u2009';
function group(digits) {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, THIN);
}

/* Format a raw input string into "1 234,56" and recover its numeric value. */
function formatAmount(raw) {
  let cleaned = raw.replace(/[^\d.,]/g, '').replace(/\./g, ',');
  const firstComma = cleaned.indexOf(',');
  if (firstComma !== -1) {
    cleaned = cleaned.slice(0, firstComma + 1) + cleaned.slice(firstComma + 1).replace(/,/g, '');
  }
  let [intPart = '', decPart] = cleaned.split(',');
  intPart = intPart.replace(/^0+(?=\d)/, '');
  let display = group(intPart);
  if (cleaned.includes(',')) display += ',' + (decPart || '').slice(0, 2);
  const numeric = cleaned === '' || cleaned === ',' ? null : parseFloat(`${intPart || '0'}.${(decPart || '').slice(0, 2)}`);
  return {
    display,
    numeric
  };
}
function AmountInput({
  label,
  value,
  currency = '\u20bd',
  placeholder = '0',
  hint,
  error,
  disabled = false,
  onChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const [focused, setFocused] = React.useState(false);
  const display = value == null || value === '' ? '' : typeof value === 'number' ? formatAmount(String(value).replace('.', ',')).display : String(value);
  const handleChange = event => {
    const {
      display: nextDisplay,
      numeric
    } = formatAmount(event.target.value);
    if (onChange) onChange(event, {
      value: numeric,
      valueString: nextDisplay
    });
  };
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const shellClasses = ['alfa-amount-input__shell', focused ? 'alfa-amount-input__shell--focused' : '', display ? 'alfa-amount-input__shell--filled' : '', error ? 'alfa-amount-input__shell--error' : '', disabled ? 'alfa-amount-input__shell--disabled' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: `alfa-amount-input ${className}`
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-amount-input__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: shellClasses
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "alfa-amount-input__field",
    type: "text",
    inputMode: "decimal",
    value: display,
    placeholder: placeholder,
    disabled: disabled,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, restProps)), currency ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-amount-input__currency"
  }, currency) : null), hint || errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-amount-input__hint ${errorMessage ? 'alfa-amount-input__hint--error' : ''}`,
    role: errorMessage ? 'alert' : undefined
  }, errorMessage || hint) : null);
}
Object.assign(__ds_scope, { AmountInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AmountInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Calendar.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Calendar — single-month day grid, Monday-first, Russian locale.
   Mirrors @alfalab/core-components-calendar conventions:
   - onChange(event, { date, value }) — value is the timestamp
   - month navigation, today marker, min/max bounds, out-of-month days hidden */

const STYLE_ID = 'alfa-calendar-styles';
const CSS = `
.alfa-calendar {
    width: 280px; box-sizing: border-box; padding: 16px;
    background: var(--surface-primary); border-radius: 20px;
    font-family: var(--font-system); color: var(--text-primary);
}
.alfa-calendar__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.alfa-calendar__title { font-size: 16px; line-height: 20px; font-weight: 500; text-transform: capitalize; }
.alfa-calendar__nav { display: flex; gap: 4px; }
.alfa-calendar__navbtn {
    width: 32px; height: 32px; border: none; border-radius: 50%; cursor: pointer;
    background: var(--color-neutral-100); color: var(--text-primary);
    display: inline-flex; align-items: center; justify-content: center;
    transition: background-color .12s ease;
}
.alfa-calendar__navbtn:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-calendar__navbtn:disabled { opacity: .4; cursor: not-allowed; }
.alfa-calendar__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.alfa-calendar__weekday { text-align: center; font-size: 12px; line-height: 16px; color: var(--text-tertiary); padding: 4px 0; }
.alfa-calendar__weekday--we { color: var(--text-negative); }
.alfa-calendar__day {
    aspect-ratio: 1; border: none; background: transparent; cursor: pointer;
    border-radius: 50%; font-family: inherit; font-size: 14px; line-height: 18px;
    color: var(--text-primary); position: relative;
    display: inline-flex; align-items: center; justify-content: center;
    transition: background-color .12s ease;
}
.alfa-calendar__day:hover { background: var(--color-neutral-100); }
.alfa-calendar__day--we { color: var(--text-negative); }
.alfa-calendar__day--today { font-weight: 700; }
.alfa-calendar__day--today::after { content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: var(--accent-primary); }
.alfa-calendar__day--selected, .alfa-calendar__day--selected:hover { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-calendar__day--selected.alfa-calendar__day--today::after { background: var(--text-inverted-primary); }
.alfa-calendar__day:disabled { color: var(--text-quaternary); cursor: not-allowed; background: transparent; }
.alfa-calendar__day--empty { visibility: hidden; }
`;
const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
function Calendar({
  value,
  defaultMonth,
  minDate,
  maxDate,
  onChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const selected = value != null ? new Date(value) : null;
  const initial = selected || (defaultMonth ? new Date(defaultMonth) : new Date());
  const [view, setView] = React.useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const year = view.getFullYear();
  const month = view.getMonth();
  const today = startOfDay(new Date());
  const selTime = selected ? startOfDay(selected) : null;
  const minTime = minDate != null ? startOfDay(new Date(minDate)) : null;
  const maxTime = maxDate != null ? startOfDay(new Date(maxDate)) : null;
  const firstDay = new Date(year, month, 1);
  const offset = (firstDay.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < offset; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
  const changeMonth = delta => setView(new Date(year, month + delta, 1));
  const handleSelect = (event, day) => {
    const date = new Date(year, month, day);
    if (onChange) onChange(event, {
      date,
      value: date.getTime()
    });
  };
  const prevDisabled = minTime != null && startOfDay(new Date(year, month, 1)) <= minTime;
  const nextDisabled = maxTime != null && new Date(year, month + 1, 1).getTime() > maxTime && startOfDay(new Date(year, month + 1, 1)) > maxTime;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-calendar ${className}`
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-calendar__head"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-calendar__navbtn",
    onClick: () => changeMonth(-1),
    disabled: prevDisabled,
    "aria-label": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5l-5 5 5 5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "alfa-calendar__title"
  }, MONTHS[month], " ", year), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-calendar__navbtn",
    onClick: () => changeMonth(1),
    disabled: nextDisabled,
    "aria-label": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5l5 5-5 5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "alfa-calendar__grid"
  }, WEEKDAYS.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: `alfa-calendar__weekday ${i >= 5 ? 'alfa-calendar__weekday--we' : ''}`
  }, w)), cells.map((day, index) => {
    if (day == null) return /*#__PURE__*/React.createElement("span", {
      key: `e${index}`,
      className: "alfa-calendar__day alfa-calendar__day--empty"
    });
    const time = new Date(year, month, day).getTime();
    const weekend = (offset + day - 1) % 7 >= 5;
    const disabled = minTime != null && time < minTime || maxTime != null && time > maxTime;
    const classes = ['alfa-calendar__day', weekend ? 'alfa-calendar__day--we' : '', time === today ? 'alfa-calendar__day--today' : '', selTime === time ? 'alfa-calendar__day--selected' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("button", {
      key: day,
      type: "button",
      className: classes,
      disabled: disabled,
      "aria-pressed": selTime === time,
      onClick: event => handleSelect(event, day)
    }, day);
  })));
}
Object.assign(__ds_scope, { Calendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Calendar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Checkbox — square selection control. Mirrors
   @alfalab/core-components-checkbox conventions:
   - onChange(event, { checked, name })
   - internal handler handleChange
   - size 20 | 24, position 'before' | 'after', indeterminate, error */

const STYLE_ID = 'alfa-checkbox-styles';
const CSS = `
.alfa-check { display: inline-flex; align-items: flex-start; gap: 12px; font-family: var(--font-system); cursor: pointer; color: var(--text-primary); }
.alfa-check--center { align-items: center; }
.alfa-check--block { display: flex; width: 100%; }
.alfa-check--after { flex-direction: row-reverse; justify-content: space-between; }
.alfa-check--disabled { opacity: .5; pointer-events: none; }
.alfa-check__box {
    flex: 0 0 auto;
    border-radius: 7px;
    border: 2px solid var(--color-neutral-400);
    background: var(--surface-primary);
    display: inline-flex; align-items: center; justify-content: center;
    transition: background-color .12s ease, border-color .12s ease;
    margin-top: 1px;
}
.alfa-check__box--20 { width: 20px; height: 20px; border-radius: 6px; }
.alfa-check__box--24 { width: 24px; height: 24px; border-radius: 7px; }
.alfa-check:hover .alfa-check__box { border-color: var(--text-tertiary); }
.alfa-check__box--checked, .alfa-check__box--indeterminate { background: var(--accent-secondary); border-color: var(--accent-secondary); }
.alfa-check__box--error { border-color: var(--status-negative); }
.alfa-check__box svg { display: block; opacity: 0; transition: opacity .1s ease; }
.alfa-check__box--checked svg { opacity: 1; }
.alfa-check__indeterminate { width: 10px; height: 2px; border-radius: 1px; background: var(--text-inverted-primary); }
.alfa-check__label { font-size: 16px; line-height: 24px; }
.alfa-check__sub { display: block; font-size: 14px; line-height: 20px; color: var(--text-secondary); }
.alfa-check__error { display: block; font-size: 14px; line-height: 20px; color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Checkbox({
  checked = false,
  onChange,
  label,
  hint,
  error,
  name,
  size = 20,
  position = 'before',
  align = 'start',
  block = false,
  indeterminate = false,
  disabled = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const handleChange = event => {
    if (onChange) {
      onChange(event, {
        checked: event.target.checked,
        name
      });
    }
  };
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const rootClasses = ['alfa-check', align === 'center' ? 'alfa-check--center' : '', block ? 'alfa-check--block' : '', position === 'after' ? 'alfa-check--after' : '', disabled ? 'alfa-check--disabled' : '', className].filter(Boolean).join(' ');
  const boxClasses = ['alfa-check__box', `alfa-check__box--${size}`, checked ? 'alfa-check__box--checked' : '', indeterminate && !checked ? 'alfa-check__box--indeterminate' : '', errorMessage ? 'alfa-check__box--error' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: rootClasses
  }, /*#__PURE__*/React.createElement("span", {
    className: boxClasses
  }, indeterminate && !checked ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-check__indeterminate"
  }) : /*#__PURE__*/React.createElement("svg", {
    width: size === 24 ? 14 : 12,
    height: size === 24 ? 14 : 12,
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 7.5L5.5 11L12 3.5",
    stroke: "var(--text-inverted-primary)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    name: name,
    onChange: handleChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, restProps)), label || hint || errorMessage ? /*#__PURE__*/React.createElement("span", null, label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-check__label"
  }, label) : null, hint && !errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-check__sub"
  }, hint) : null, errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-check__error",
    role: "alert"
  }, errorMessage) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/CodeInput.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank CodeInput — segmented one-time-code (OTP / PIN) field. Mirrors
   @alfalab/core-components-code-input conventions:
   - onChange(event, { value })
   - onComplete(event, { value }) when every cell is filled
   - internal handlers named handleX */

const STYLE_ID = 'alfa-code-input-styles';
const CSS = `
.alfa-code { display: inline-flex; flex-direction: column; gap: 8px; font-family: var(--font-system); }
.alfa-code__cells { display: flex; gap: 8px; }
.alfa-code__cell {
    width: 48px; height: 56px; box-sizing: border-box;
    border: 1px solid transparent; border-radius: 16px;
    background: var(--color-neutral-translucent-300);
    text-align: center;
    font-size: 24px; line-height: 28px; font-weight: 500; font-family: inherit;
    color: var(--text-primary);
    outline: none; padding: 0;
    transition: background-color .12s ease, border-color .12s ease;
    -moz-appearance: textfield;
}
.alfa-code__cell::-webkit-outer-spin-button, .alfa-code__cell::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.alfa-code__cell:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-code__cell:focus { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-code--error .alfa-code__cell { border-color: var(--status-negative); background: var(--surface-primary); }
.alfa-code--disabled { opacity: .5; pointer-events: none; }
.alfa-code__hint { font-size: 12px; line-height: 16px; color: var(--text-secondary); padding: 0 4px; }
.alfa-code__hint--error { color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function CodeInput({
  length = 4,
  value = '',
  error,
  disabled = false,
  onChange,
  onComplete,
  className = '',
  ...restProps
}) {
  useStyles();
  const refs = React.useRef([]);
  const setCharAt = (str, index, char) => {
    const arr = str.padEnd(length, ' ').split('');
    arr[index] = char || ' ';
    return arr.join('').replace(/ +$/, '');
  };
  const emit = (event, next) => {
    const clean = next.replace(/\s/g, '');
    if (onChange) onChange(event, {
      value: clean
    });
    if (clean.length === length && onComplete) onComplete(event, {
      value: clean
    });
  };
  const handleChange = (event, index) => {
    const digit = event.target.value.replace(/\D/g, '').slice(-1);
    const next = setCharAt(value, index, digit);
    emit(event, next);
    if (digit && index < length - 1) refs.current[index + 1]?.focus();
  };
  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };
  const handlePaste = (event, index) => {
    event.preventDefault();
    const pasted = (event.clipboardData.getData('text') || '').replace(/\D/g, '');
    if (!pasted) return;
    let next = value;
    for (let i = 0; i < pasted.length && index + i < length; i += 1) {
      next = setCharAt(next, index + i, pasted[i]);
    }
    emit(event, next);
    const last = Math.min(index + pasted.length, length - 1);
    refs.current[last]?.focus();
  };
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const rootClasses = ['alfa-code', error ? 'alfa-code--error' : '', disabled ? 'alfa-code--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-code__cells"
  }, Array.from({
    length
  }).map((_, index) => /*#__PURE__*/React.createElement("input", {
    key: index,
    ref: node => {
      refs.current[index] = node;
    },
    className: "alfa-code__cell",
    type: "text",
    inputMode: "numeric",
    autoComplete: "one-time-code",
    maxLength: 1,
    value: value[index] || '',
    disabled: disabled,
    "aria-label": `Цифра ${index + 1}`,
    onChange: event => handleChange(event, index),
    onKeyDown: event => handleKeyDown(event, index),
    onPaste: event => handlePaste(event, index)
  }))), errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-code__hint alfa-code__hint--error",
    role: "alert"
  }, errorMessage) : null);
}
Object.assign(__ds_scope, { CodeInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CodeInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Counter.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Counter — stepper for a small integer quantity (minus / value / plus).
   Mirrors @alfalab/core-components-counter conventions:
   - onChange(event, { value })
   - internal handlers named handleX
   - clamps to [min, max] */

const STYLE_ID = 'alfa-counter-styles';
const CSS = `
.alfa-counter { display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-system); }
.alfa-counter__btn {
    flex: 0 0 auto; border: none; cursor: pointer; padding: 0;
    border-radius: 50%; background: var(--color-neutral-100); color: var(--text-primary);
    display: inline-flex; align-items: center; justify-content: center;
    transition: background-color .12s ease, transform .1s ease;
}
.alfa-counter__btn:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-counter__btn:active { transform: scale(.94); }
.alfa-counter__btn:disabled { opacity: .4; cursor: not-allowed; }
.alfa-counter__btn svg { display: block; }
.alfa-counter__value {
    text-align: center; font-weight: 500; color: var(--text-primary);
    font-variant-numeric: tabular-nums; user-select: none;
}
.alfa-counter--s .alfa-counter__btn { width: 32px; height: 32px; }
.alfa-counter--s .alfa-counter__value { min-width: 28px; font-size: 16px; line-height: 20px; }
.alfa-counter--m .alfa-counter__btn { width: 40px; height: 40px; }
.alfa-counter--m .alfa-counter__value { min-width: 36px; font-size: 18px; line-height: 24px; }
.alfa-counter--l .alfa-counter__btn { width: 48px; height: 48px; }
.alfa-counter--l .alfa-counter__value { min-width: 44px; font-size: 20px; line-height: 24px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const ICON = {
  s: 16,
  m: 20,
  l: 24
};
function Counter({
  value = 0,
  min = 0,
  max = Infinity,
  step = 1,
  size = 'm',
  disabled = false,
  onChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const clamp = n => Math.min(max, Math.max(min, n));
  const handleStep = (event, delta) => {
    const next = clamp(value + delta * step);
    if (next !== value && onChange) onChange(event, {
      value: next
    });
  };
  const iconSize = ICON[size] || ICON.m;
  const half = iconSize / 2;
  const rootClasses = ['alfa-counter', `alfa-counter--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses
  }, restProps), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-counter__btn",
    onClick: event => handleStep(event, -1),
    disabled: disabled || value <= min,
    "aria-label": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: `0 0 ${iconSize} ${iconSize}`,
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${iconSize * 0.27} ${half}h${iconSize * 0.46}`,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "alfa-counter__value",
    role: "status",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-counter__btn",
    onClick: event => handleStep(event, 1),
    disabled: disabled || value >= max,
    "aria-label": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: `0 0 ${iconSize} ${iconSize}`,
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${iconSize * 0.27} ${half}h${iconSize * 0.46}M${half} ${iconSize * 0.27}v${iconSize * 0.46}`,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Counter.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank FileUpload — drag-and-drop attach zone plus a list of uploaded
   files with progress/status. Mirrors @alfalab/core-components-file-upload-item:
   - onUpload(event, { files }) — FileList from picker or drop
   - onRemove(event, { id }) per row
   - view: 'tile' (large dropzone) | 'inline' (compact button) */

const STYLE_ID = 'alfa-file-upload-styles';
const CSS = `
.alfa-upload { display: flex; flex-direction: column; gap: 12px; width: 100%; font-family: var(--font-system); }
.alfa-upload__zone {
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    text-align: center; cursor: pointer; box-sizing: border-box;
    border: 1.5px dashed var(--color-neutral-400); border-radius: 16px;
    background: var(--surface-secondary); padding: 24px 20px;
    color: var(--text-secondary); transition: border-color .12s ease, background-color .12s ease;
}
.alfa-upload__zone:hover, .alfa-upload__zone--drag { border-color: var(--border-key); background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-upload__zone--drag { border-style: solid; }
.alfa-upload__icon { color: var(--graphic-primary, var(--text-primary)); }
.alfa-upload__title { font-size: 15px; line-height: 20px; color: var(--text-primary); }
.alfa-upload__title b { color: var(--text-info); font-weight: 500; }
.alfa-upload__sub { font-size: 12px; line-height: 16px; color: var(--text-tertiary); }
.alfa-upload--inline .alfa-upload__zone { flex-direction: row; padding: 0; border: none; background: transparent; width: auto; align-self: flex-start; }
.alfa-upload--inline .alfa-upload__pill {
    display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px;
    border-radius: 12px; background: var(--color-neutral-100); color: var(--text-primary);
    font-size: 15px; font-weight: 500; transition: background-color .12s ease;
}
.alfa-upload--inline .alfa-upload__zone:hover .alfa-upload__pill { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-upload__list { display: flex; flex-direction: column; gap: 8px; }
.alfa-upload__row {
    display: flex; align-items: center; gap: 12px; padding: 12px 14px;
    background: var(--surface-primary); border: 1px solid var(--border-secondary); border-radius: 14px;
}
.alfa-upload__thumb {
    flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center;
}
.alfa-upload__meta { flex: 1; min-width: 0; }
.alfa-upload__name { font-size: 14px; line-height: 18px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alfa-upload__size { font-size: 12px; line-height: 16px; color: var(--text-secondary); }
.alfa-upload__track { height: 4px; border-radius: 99px; background: var(--color-neutral-200); margin-top: 6px; overflow: hidden; }
.alfa-upload__bar { height: 100%; border-radius: 99px; background: var(--accent-secondary); transition: width .2s ease; }
.alfa-upload__status { flex: 0 0 auto; display: inline-flex; }
.alfa-upload__status--done { color: var(--status-positive); }
.alfa-upload__status--error { color: var(--status-negative); }
.alfa-upload__remove {
    flex: 0 0 auto; width: 28px; height: 28px; border: none; border-radius: 50%; cursor: pointer;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center; transition: background-color .12s ease;
}
.alfa-upload__remove:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function formatSize(bytes) {
  if (bytes == null) return '';
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} КБ`;
  return `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
}
const ClipIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16.5 6.5l-7 7a2.5 2.5 0 003.5 3.5l7-7a4.5 4.5 0 00-6.4-6.4l-7 7a6.5 6.5 0 009.2 9.2l6-6",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function FileUpload({
  view = 'tile',
  title = 'Перетащите файл или нажмите, чтобы выбрать',
  subtitle = 'PDF, JPG или PNG до 10 МБ',
  buttonText = 'Прикрепить файл',
  accept,
  multiple = false,
  uploads = [],
  disabled = false,
  onUpload,
  onRemove,
  className = '',
  ...restProps
}) {
  useStyles();
  const inputRef = React.useRef(null);
  const [drag, setDrag] = React.useState(false);
  const openPicker = () => {
    if (!disabled) inputRef.current?.click();
  };
  const handlePick = event => {
    if (event.target.files?.length && onUpload) onUpload(event, {
      files: event.target.files
    });
  };
  const handleDrop = event => {
    event.preventDefault();
    setDrag(false);
    if (disabled) return;
    if (event.dataTransfer.files?.length && onUpload) onUpload(event, {
      files: event.dataTransfer.files
    });
  };
  const handleRemove = (event, id) => {
    event.stopPropagation();
    if (onRemove) onRemove(event, {
      id
    });
  };
  const rootClasses = ['alfa-upload', `alfa-upload--${view}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: `alfa-upload__zone ${drag ? 'alfa-upload__zone--drag' : ''}`,
    role: "button",
    tabIndex: 0,
    onClick: openPicker,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPicker();
      }
    },
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: handleDrop
  }, view === 'inline' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__pill"
  }, /*#__PURE__*/React.createElement(ClipIcon, null), buttonText) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__icon"
  }, /*#__PURE__*/React.createElement(ClipIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__sub"
  }, subtitle) : null), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: accept,
    multiple: multiple,
    disabled: disabled,
    onChange: handlePick,
    style: {
      display: 'none'
    }
  })), uploads.length ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-upload__list"
  }, uploads.map(file => /*#__PURE__*/React.createElement("div", {
    className: "alfa-upload__row",
    key: file.id ?? file.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__thumb"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h8l4 4v14H6z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v4h4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__name"
  }, file.name), file.status === 'uploading' && file.progress != null ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__bar",
    style: {
      width: `${file.progress}%`
    }
  })) : /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__size"
  }, file.error || formatSize(file.size))), file.status === 'done' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-upload__status alfa-upload__status--done"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5l4 4 8-9",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-upload__remove",
    onClick: e => handleRemove(e, file.id ?? file.name),
    "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })))))) : null);
}
Object.assign(__ds_scope, { FileUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterDropdown.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank FilterDropdown — a compact pill trigger that opens a menu of
   options, used as a table/list filter (the «Тип ▾ / Срок ▾ / Статус ▾» row).
   Selecting an option fills the pill dark to signal an active filter.
   Controlled: selected + onChange(event, { selected }). Supports multi-select. */

const STYLE_ID = 'alfa-filterdd-styles';
const CSS = `
.alfa-filterdd { position: relative; display: inline-flex; font-family: var(--font-system); }
.alfa-filterdd__trigger { display: inline-flex; align-items: center; gap: 6px; cursor: pointer;
    border: none; font-family: inherit; font-size: 15px; line-height: 20px; font-weight: 500;
    padding: 9px 12px 9px 16px; border-radius: 99px; white-space: nowrap;
    background: var(--color-neutral-100); color: var(--text-primary);
    transition: background-color .12s ease, color .12s ease; }
.alfa-filterdd__trigger:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-filterdd__trigger--active { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-filterdd__trigger--active:hover { background: var(--accent-secondary-hover); }
.alfa-filterdd__trigger--open { background: var(--neutral-100-press, var(--color-neutral-300)); }
.alfa-filterdd__trigger--active.alfa-filterdd__trigger--open { background: var(--accent-secondary-press); }
.alfa-filterdd__count { display: inline-flex; align-items: center; justify-content: center; min-width: 18px; height: 18px;
    padding: 0 5px; border-radius: 99px; background: var(--color-neutral-translucent-inverted-300); font-size: 12px; font-weight: 500; }
.alfa-filterdd__chev { display: inline-flex; transition: transform .15s ease; }
.alfa-filterdd__trigger--open .alfa-filterdd__chev { transform: rotate(180deg); }
.alfa-filterdd__menu { position: absolute; top: calc(100% + 8px); left: 0; z-index: 30; min-width: 220px;
    background: var(--surface-primary); border-radius: 16px; box-shadow: var(--shadow-m-hard);
    padding: 8px; margin: 0; list-style: none; max-height: 320px; overflow-y: auto; }
.alfa-filterdd__menu--right { left: auto; right: 0; }
.alfa-filterdd__opt { display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 11px 14px; border-radius: 12px; cursor: pointer; font-size: 15px; line-height: 20px;
    color: var(--text-primary); transition: background-color .1s ease; }
.alfa-filterdd__opt:hover { background: var(--color-neutral-100); }
.alfa-filterdd__opt--selected { font-weight: 500; }
.alfa-filterdd__opt--disabled { opacity: .4; pointer-events: none; }
.alfa-filterdd__check { flex: 0 0 auto; color: var(--accent-secondary); display: inline-flex; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function FilterDropdown({
  label,
  options = [],
  selected,
  multiple = false,
  name,
  align = 'left',
  onChange,
  className = '',
  ...rest
}) {
  useStyles();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const selArray = multiple ? Array.isArray(selected) ? selected : [] : selected != null ? [selected] : [];
  const active = selArray.length > 0;
  const selectedOptions = options.filter(o => selArray.includes(o.key));
  let triggerLabel = label;
  if (!multiple && selectedOptions.length === 1) triggerLabel = selectedOptions[0].content;
  const handleSelect = (event, opt) => {
    if (opt.disabled) return;
    if (multiple) {
      const next = selArray.includes(opt.key) ? selArray.filter(k => k !== opt.key) : [...selArray, opt.key];
      if (onChange) onChange(event, {
        selected: next,
        name
      });
    } else {
      const next = selArray.includes(opt.key) ? null : opt.key;
      setOpen(false);
      if (onChange) onChange(event, {
        selected: next,
        name
      });
    }
  };
  const triggerCls = ['alfa-filterdd__trigger', active ? 'alfa-filterdd__trigger--active' : '', open ? 'alfa-filterdd__trigger--open' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-filterdd ${className}`,
    ref: ref
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: triggerCls,
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, triggerLabel), multiple && active ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-filterdd__count"
  }, selArray.length) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-filterdd__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 14L6.5 8.5 5 10l7 7 7-7-1.5-1.5L12 14z",
    fill: "currentColor"
  })))), open ? /*#__PURE__*/React.createElement("ul", {
    className: `alfa-filterdd__menu ${align === 'right' ? 'alfa-filterdd__menu--right' : ''}`,
    role: "listbox"
  }, options.map(opt => {
    const isSel = selArray.includes(opt.key);
    return /*#__PURE__*/React.createElement("li", {
      key: opt.key,
      role: "option",
      "aria-selected": isSel,
      className: `alfa-filterdd__opt ${isSel ? 'alfa-filterdd__opt--selected' : ''} ${opt.disabled ? 'alfa-filterdd__opt--disabled' : ''}`,
      onClick: e => handleSelect(e, opt)
    }, /*#__PURE__*/React.createElement("span", null, opt.content), isSel ? /*#__PURE__*/React.createElement("span", {
      className: "alfa-filterdd__check"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 7.51871L9.90293 17L5 12.3274L6.44838 10.8244L9.91876 14.1317L18.5683 6L20 7.51871Z",
      fill: "currentColor"
    }))) : null);
  })) : null);
}
Object.assign(__ds_scope, { FilterDropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterDropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Input — filled text field with a label, hint/error, addons and a
   clear button. Mirrors @alfalab/core-components-input conventions:
   - onChange(event, { value })
   - internal handlers named handleX
   - labelView: 'inner' (floating, default) | 'outer' */

const STYLE_ID = 'alfa-input-styles';
const CSS = `
.alfa-field { display: inline-flex; flex-direction: column; gap: 4px; width: 100%; font-family: var(--font-system); }
.alfa-field__outer-label { font-size: 13px; line-height: 16px; color: var(--text-secondary); padding: 0 2px 2px; }
.alfa-field__shell {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--surface-secondary);
    border: 1px solid transparent;
    border-radius: 16px;
    padding: 0 16px;
    min-height: 56px;
    transition: background-color .12s ease, border-color .12s ease;
}
.alfa-field__shell:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-field__shell--focused { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-field__shell--focused:hover { background: var(--surface-primary); }
.alfa-field__shell--error { border-color: var(--status-negative); background: var(--surface-primary); }
.alfa-field__shell--success { border-color: var(--status-positive); }
.alfa-field__shell--disabled { opacity: .5; pointer-events: none; }
.alfa-field__main { display: flex; flex-direction: column; flex: 1; min-width: 0; padding: 8px 0; }
.alfa-field__label {
    font-size: 13px;
    line-height: 16px;
    color: var(--text-secondary);
    transition: color .12s ease;
    pointer-events: none;
}
.alfa-field__shell--focused .alfa-field__label { color: var(--text-info); }
.alfa-field__shell--error .alfa-field__label { color: var(--status-negative); }
.alfa-field__input {
    border: none;
    background: transparent;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-primary);
    width: 100%;
    padding: 0;
}
.alfa-field__input--bold { font-weight: 700; }
.alfa-field__input--medium { font-weight: 500; }
.alfa-field__input::placeholder { color: var(--text-tertiary); }
.alfa-field__addon { display: inline-flex; flex: 0 0 auto; color: var(--text-secondary); }
.alfa-field__addon img, .alfa-field__addon svg { width: 24px; height: 24px; display: block; }
.alfa-field__clear {
    flex: 0 0 auto; border: none; cursor: pointer; padding: 0;
    width: 24px; height: 24px; border-radius: 50%;
    background: var(--color-neutral-300); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center;
}
.alfa-field__success { flex: 0 0 auto; color: var(--status-positive); display: inline-flex; }
.alfa-field__hint { font-size: 12px; line-height: 16px; color: var(--text-secondary); padding: 0 16px; }
.alfa-field__hint--error { color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Input({
  label,
  labelView = 'inner',
  value,
  placeholder,
  hint,
  error,
  success = false,
  clear = false,
  type = 'text',
  fontWeight = 'regular',
  disabled = false,
  leftAddons,
  rightAddons,
  onChange,
  onClear,
  className = '',
  ...restProps
}) {
  useStyles();
  const [focused, setFocused] = React.useState(false);
  const handleChange = event => {
    if (onChange) {
      onChange(event, {
        value: event.target.value
      });
    }
  };
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleClear = event => {
    if (onClear) {
      onClear(event);
    }
  };
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const showClear = clear && !disabled && Boolean(value);
  const shellClasses = ['alfa-field__shell', focused ? 'alfa-field__shell--focused' : '', error ? 'alfa-field__shell--error' : '', success && !error ? 'alfa-field__shell--success' : '', disabled ? 'alfa-field__shell--disabled' : ''].filter(Boolean).join(' ');
  const inputClasses = ['alfa-field__input', fontWeight === 'bold' ? 'alfa-field__input--bold' : '', fontWeight === 'medium' ? 'alfa-field__input--medium' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: `alfa-field ${className}`
  }, label && labelView === 'outer' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__outer-label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: shellClasses
  }, leftAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__addon"
  }, leftAddons) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__main"
  }, label && labelView === 'inner' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: inputClasses,
    type: type === 'money' ? 'text' : type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, restProps))), showClear ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-field__clear",
    onClick: handleClear,
    "aria-label": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))) : null, success && !error && !showClear ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__success"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5l4 4 8-9",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))) : null, rightAddons ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-field__addon"
  }, rightAddons) : null), hint || errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-field__hint ${errorMessage ? 'alfa-field__hint--error' : ''}`,
    role: errorMessage ? 'alert' : undefined
  }, errorMessage || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Radio — round single-choice control. Mirrors
   @alfalab/core-components-radio conventions:
   - onChange(event, { checked, name, value })
   - internal handler handleChange
   - size 20 | 24, label, hint, error, block, align */

const STYLE_ID = 'alfa-radio-styles';
const CSS = `
.alfa-radio { display: inline-flex; align-items: flex-start; gap: 12px; font-family: var(--font-system); cursor: pointer; color: var(--text-primary); }
.alfa-radio--center { align-items: center; }
.alfa-radio--block { display: flex; width: 100%; }
.alfa-radio--after { flex-direction: row-reverse; justify-content: space-between; }
.alfa-radio--disabled { opacity: .5; pointer-events: none; }
.alfa-radio__circle {
    flex: 0 0 auto;
    border-radius: 50%;
    border: 2px solid var(--color-neutral-400);
    background: var(--surface-primary);
    display: inline-flex; align-items: center; justify-content: center;
    transition: border-color .12s ease;
    margin-top: 1px;
    box-sizing: border-box;
}
.alfa-radio__circle--20 { width: 20px; height: 20px; }
.alfa-radio__circle--24 { width: 24px; height: 24px; }
.alfa-radio:hover .alfa-radio__circle { border-color: var(--text-tertiary); }
.alfa-radio__circle--checked { border-color: var(--accent-secondary); border-width: 6px; }
.alfa-radio__circle--checked.alfa-radio__circle--20 { border-width: 6px; }
.alfa-radio__circle--checked.alfa-radio__circle--24 { border-width: 7px; }
.alfa-radio:hover .alfa-radio__circle--checked { border-color: var(--accent-secondary); }
.alfa-radio__circle--error { border-color: var(--status-negative); }
.alfa-radio__label { font-size: 16px; line-height: 24px; }
.alfa-radio__sub { display: block; font-size: 14px; line-height: 20px; color: var(--text-secondary); }
.alfa-radio__error { display: block; font-size: 14px; line-height: 20px; color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Radio({
  checked = false,
  onChange,
  label,
  hint,
  error,
  name,
  value,
  size = 20,
  position = 'before',
  align = 'start',
  block = false,
  disabled = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const handleChange = event => {
    if (onChange) {
      onChange(event, {
        checked: event.target.checked,
        name,
        value
      });
    }
  };
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const rootClasses = ['alfa-radio', align === 'center' ? 'alfa-radio--center' : '', block ? 'alfa-radio--block' : '', position === 'after' ? 'alfa-radio--after' : '', disabled ? 'alfa-radio--disabled' : '', className].filter(Boolean).join(' ');
  const circleClasses = ['alfa-radio__circle', `alfa-radio__circle--${size}`, checked ? 'alfa-radio__circle--checked' : '', errorMessage ? 'alfa-radio__circle--error' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: rootClasses
  }, /*#__PURE__*/React.createElement("span", {
    className: circleClasses
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    disabled: disabled,
    name: name,
    value: value,
    onChange: handleChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, restProps)), label || hint || errorMessage ? /*#__PURE__*/React.createElement("span", null, label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-radio__label"
  }, label) : null, hint && !errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-radio__sub"
  }, hint) : null, errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-radio__error",
    role: "alert"
  }, errorMessage) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank RadioGroup — controls a set of Radio children. Mirrors
   @alfalab/core-components-radio-group conventions:
   - onChange(event, { value, name })
   - direction 'horizontal' | 'vertical'
   - clones Radio/RadioButton children, injecting checked + onChange */

const STYLE_ID = 'alfa-radio-group-styles';
const CSS = `
.alfa-radio-group { display: flex; flex-direction: column; gap: 8px; font-family: var(--font-system); border: 0; padding: 0; margin: 0; min-inline-size: auto; }
.alfa-radio-group__label { font-size: 13px; line-height: 16px; color: var(--text-secondary); padding: 0 0 4px; }
.alfa-radio-group__items { display: flex; gap: 16px; }
.alfa-radio-group__items--vertical { flex-direction: column; gap: 16px; }
.alfa-radio-group__error { font-size: 14px; line-height: 20px; color: var(--status-negative); padding-top: 4px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function RadioGroup({
  label,
  value,
  onChange,
  name,
  direction = 'vertical',
  error,
  disabled = false,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const handleChange = (event, payload) => {
    if (onChange) {
      onChange(event, {
        value: payload.value,
        name
      });
    }
  };
  const items = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    const childValue = child.props.value;
    return React.cloneElement(child, {
      checked: childValue === value,
      onChange: handleChange,
      name,
      disabled: disabled || child.props.disabled
    });
  });
  const itemsClasses = ['alfa-radio-group__items', direction === 'vertical' ? 'alfa-radio-group__items--vertical' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: `alfa-radio-group ${className}`
  }, restProps), label ? /*#__PURE__*/React.createElement("legend", {
    className: "alfa-radio-group__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: itemsClasses
  }, items), errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-radio-group__error",
    role: "alert"
  }, errorMessage) : null);
}
RadioGroup.Radio = __ds_scope.Radio;
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank SearchInput — a filled search field with a leading magnifier and a
   clear button. onChange(event, { value }); onClear / onSubmit (Enter). */

const STYLE_ID = 'alfa-search-styles';
const CSS = `
.alfa-search { display: inline-flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box;
    background: var(--surface-secondary); border: 1px solid transparent; border-radius: 12px;
    padding: 0 14px; font-family: var(--font-system); transition: background-color .12s ease, border-color .12s ease; }
.alfa-search--s { min-height: 44px; }
.alfa-search--m { min-height: 52px; border-radius: 14px; }
.alfa-search--focused { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-search--rounded { border-radius: 99px; }
.alfa-search__ico { flex: 0 0 auto; color: var(--text-tertiary); display: inline-flex; }
.alfa-search__ico svg { display: block; }
.alfa-search--focused .alfa-search__ico { color: var(--text-secondary); }
.alfa-search__input { flex: 1; min-width: 0; border: none; background: none; outline: none; font-family: inherit;
    font-size: 15px; line-height: 20px; color: var(--text-primary); padding: 0; }
.alfa-search__input::placeholder { color: var(--text-tertiary); }
.alfa-search__clear { flex: 0 0 auto; border: none; cursor: pointer; padding: 0; width: 22px; height: 22px;
    border-radius: 50%; background: var(--color-neutral-300); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center; }
.alfa-search__clear:hover { background: var(--color-neutral-400); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function SearchInput({
  value,
  placeholder = 'Поиск',
  size = 's',
  rounded = false,
  onChange,
  onClear,
  onSubmit,
  disabled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const [focused, setFocused] = React.useState(false);
  const handleChange = event => {
    if (onChange) onChange(event, {
      value: event.target.value
    });
  };
  const handleKey = event => {
    if (event.key === 'Enter' && onSubmit) onSubmit(event, {
      value: event.target.value
    });
  };
  const handleClear = event => {
    if (onClear) onClear(event);
  };
  const cls = ['alfa-search', `alfa-search--${size}`, rounded ? 'alfa-search--rounded' : '', focused ? 'alfa-search--focused' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-search__ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.2-3.2",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    className: "alfa-search__input",
    type: "text",
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: handleChange,
    onKeyDown: handleKey,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), value && !disabled ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-search__clear",
    onClick: handleClear,
    "aria-label": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Select — filled field that opens a menu of options. Mirrors
   @alfalab/core-components-select conventions:
   - options: { key, content, disabled }[]
   - onChange(event, { selected, selectedMultiple, name })
   - internal handlers handleX
   - labelView 'inner' (floating) | 'outer', filled shell matching Input */

const STYLE_ID = 'alfa-select-styles';
const CSS = `
.alfa-select { position: relative; display: inline-flex; flex-direction: column; gap: 4px; width: 100%; font-family: var(--font-system); }
.alfa-select__outer-label { font-size: 13px; line-height: 16px; color: var(--text-secondary); padding: 0 2px 2px; }
.alfa-select__field {
    position: relative; display: flex; align-items: center; gap: 10px;
    background: var(--surface-secondary);
    border: 1px solid transparent; border-radius: 16px;
    padding: 0 16px; min-height: 56px; cursor: pointer;
    transition: background-color .12s ease, border-color .12s ease;
    text-align: left; width: 100%; box-sizing: border-box; font-family: inherit; color: var(--text-primary);
}
.alfa-select__field:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-select__field--open { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-select__field--open:hover { background: var(--surface-primary); }
.alfa-select__field--error { border-color: var(--status-negative); background: var(--surface-primary); }
.alfa-select__field--disabled { opacity: .5; pointer-events: none; }
.alfa-select__main { display: flex; flex-direction: column; flex: 1; min-width: 0; padding: 8px 0; }
.alfa-select__label { font-size: 13px; line-height: 16px; color: var(--text-secondary); pointer-events: none; }
.alfa-select__field--open .alfa-select__label { color: var(--text-info); }
.alfa-select__field--error .alfa-select__label { color: var(--status-negative); }
.alfa-select__value { font-size: 16px; line-height: 24px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alfa-select__value--placeholder { color: var(--text-tertiary); }
.alfa-select__chevron { flex: 0 0 auto; color: var(--text-secondary); transition: transform .15s ease; display: inline-flex; }
.alfa-select__field--open .alfa-select__chevron { transform: rotate(180deg); }
.alfa-select__menu {
    position: absolute; top: calc(100% + 8px); left: 0; right: 0; z-index: 20;
    background: var(--surface-primary); border-radius: 16px;
    box-shadow: var(--shadow-m-hard); padding: 8px; margin: 0;
    list-style: none; max-height: 280px; overflow-y: auto;
}
.alfa-select__option {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    padding: 12px 14px; border-radius: 12px; cursor: pointer;
    font-size: 16px; line-height: 24px; color: var(--text-primary);
    transition: background-color .1s ease;
}
.alfa-select__option:hover { background: var(--color-neutral-100); }
.alfa-select__option--selected { font-weight: 500; }
.alfa-select__option--disabled { opacity: .4; pointer-events: none; }
.alfa-select__check { flex: 0 0 auto; color: var(--accent-primary); display: inline-flex; }
.alfa-select__hint { font-size: 12px; line-height: 16px; color: var(--text-secondary); padding: 0 16px; }
.alfa-select__hint--error { color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Select({
  label,
  labelView = 'inner',
  placeholder = 'Выберите',
  options = [],
  selected,
  hint,
  error,
  name,
  disabled = false,
  open: openProp,
  onChange,
  onOpen,
  className = '',
  ...restProps
}) {
  useStyles();
  const [openState, setOpenState] = React.useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const handleDocClick = event => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpenState(false);
        if (onOpen) onOpen(event, {
          open: false
        });
      }
    };
    document.addEventListener('mousedown', handleDocClick);
    return () => document.removeEventListener('mousedown', handleDocClick);
  }, [open, onOpen]);
  const selectedOption = options.find(opt => opt.key === selected);
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const handleToggle = event => {
    if (disabled) return;
    const next = !open;
    setOpenState(next);
    if (onOpen) onOpen(event, {
      open: next
    });
  };
  const handleSelect = (event, option) => {
    if (option.disabled) return;
    setOpenState(false);
    if (onChange) {
      onChange(event, {
        selected: option,
        name
      });
    }
  };
  const fieldClasses = ['alfa-select__field', open ? 'alfa-select__field--open' : '', errorMessage ? 'alfa-select__field--error' : '', disabled ? 'alfa-select__field--disabled' : ''].filter(Boolean).join(' ');
  const showFloatLabel = label && labelView === 'inner';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-select ${className}`,
    ref: rootRef
  }, restProps), label && labelView === 'outer' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-select__outer-label"
  }, label) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: fieldClasses,
    onClick: handleToggle,
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-select__main"
  }, showFloatLabel ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-select__label"
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: `alfa-select__value ${selectedOption ? '' : 'alfa-select__value--placeholder'}`
  }, selectedOption ? selectedOption.content : placeholder)), /*#__PURE__*/React.createElement("span", {
    className: "alfa-select__chevron"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 13.9999L6.5 8.5L5 10L12 16.9999L19 10L17.5 8.5L12 13.9999Z",
    fill: "currentColor"
  })))), open ? /*#__PURE__*/React.createElement("ul", {
    className: "alfa-select__menu",
    role: "listbox"
  }, options.map(option => {
    const isSelected = option.key === selected;
    const optionClasses = ['alfa-select__option', isSelected ? 'alfa-select__option--selected' : '', option.disabled ? 'alfa-select__option--disabled' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("li", {
      key: option.key,
      className: optionClasses,
      role: "option",
      "aria-selected": isSelected,
      onClick: event => handleSelect(event, option)
    }, /*#__PURE__*/React.createElement("span", null, option.content), isSelected ? /*#__PURE__*/React.createElement("span", {
      className: "alfa-select__check"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 7.51871L9.90293 17L5 12.3274L6.44838 10.8244L9.91876 14.1317L18.5683 6L20 7.51871Z",
      fill: "currentColor"
    }))) : null);
  })) : null, hint || errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-select__hint ${errorMessage ? 'alfa-select__hint--error' : ''}`,
    role: errorMessage ? 'alert' : undefined
  }, errorMessage || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Slider — single-thumb range control with a dark filled track.
   Mirrors @alfalab/core-components-slider conventions:
   - onChange(event, { value })
   - internal handlers named handleX
   Pure CSS-styled native <input type=range> so keyboard + a11y come free. */

const STYLE_ID = 'alfa-slider-styles';
const CSS = `
.alfa-slider { display: flex; flex-direction: column; gap: 10px; width: 100%; font-family: var(--font-system); }
.alfa-slider__head { display: flex; justify-content: space-between; align-items: baseline; }
.alfa-slider__label { font-size: 14px; line-height: 18px; color: var(--text-secondary); }
.alfa-slider__value { font-size: 16px; line-height: 20px; font-weight: 500; color: var(--text-primary); }
.alfa-slider__input {
    -webkit-appearance: none; appearance: none;
    width: 100%; height: 4px; margin: 8px 0; padding: 0;
    border-radius: 99px; outline: none; cursor: pointer;
    background: var(--accent-secondary);
    background-image: linear-gradient(var(--accent-secondary), var(--accent-secondary));
    background-repeat: no-repeat;
}
.alfa-slider__input::-webkit-slider-runnable-track { height: 4px; border-radius: 99px; background: transparent; }
.alfa-slider__input::-moz-range-track { height: 4px; border-radius: 99px; background: var(--color-neutral-300); }
.alfa-slider__input::-moz-range-progress { height: 4px; border-radius: 99px; background: var(--accent-secondary); }
.alfa-slider__input::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: 24px; height: 24px; margin-top: -10px; border-radius: 50%;
    background: #fff; border: none; box-shadow: var(--shadow-s);
    transition: transform .1s ease;
}
.alfa-slider__input::-moz-range-thumb {
    width: 24px; height: 24px; border-radius: 50%; border: none;
    background: #fff; box-shadow: var(--shadow-s);
}
.alfa-slider__input:active::-webkit-slider-thumb { transform: scale(1.08); }
.alfa-slider__input:focus-visible::-webkit-slider-thumb { box-shadow: var(--shadow-s), 0 0 0 4px rgba(42,119,239,.3); }
.alfa-slider--disabled { opacity: .5; pointer-events: none; }
.alfa-slider__scale { display: flex; justify-content: space-between; font-size: 12px; line-height: 16px; color: var(--text-tertiary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Slider({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  label,
  showValue = true,
  formatValue,
  showScale = false,
  disabled = false,
  onChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const pct = max === min ? 0 : (value - min) / (max - min) * 100;
  const display = formatValue ? formatValue(value) : value;
  const handleChange = event => {
    if (onChange) onChange(event, {
      value: Number(event.target.value)
    });
  };
  const rootClasses = ['alfa-slider', disabled ? 'alfa-slider--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: rootClasses
  }, label || showValue ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-slider__head"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-slider__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-slider__value"
  }, display) : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "alfa-slider__input",
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: handleChange,
    style: {
      backgroundSize: `${pct}% 100%`
    }
  }, restProps)), showScale ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-slider__scale"
  }, /*#__PURE__*/React.createElement("span", null, formatValue ? formatValue(min) : min), /*#__PURE__*/React.createElement("span", null, formatValue ? formatValue(max) : max)) : null);
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Switch — pill toggle for instant settings. Mirrors
   @alfalab/core-components-switch conventions:
   - onChange(event, { checked, name })
   - internal handler handleChange
   - reversed (switch rendered after the content), hint, error */

const STYLE_ID = 'alfa-switch-styles';
const CSS = `
.alfa-switch { display: inline-flex; align-items: flex-start; gap: 12px; font-family: var(--font-system); cursor: pointer; color: var(--text-primary); }
.alfa-switch--center { align-items: center; }
.alfa-switch--block { display: flex; width: 100%; }
.alfa-switch--reversed { flex-direction: row-reverse; justify-content: space-between; }
.alfa-switch--disabled { opacity: .5; pointer-events: none; }
.alfa-switch__track { display: inline-block; box-sizing: border-box;
    flex: 0 0 auto;
    width: 44px; height: 26px;
    border-radius: 99px;
    background: var(--color-neutral-400);
    padding: 3px;
    margin-top: 1px;
    transition: background-color .15s ease;
}
.alfa-switch__track--on { background: var(--accent-secondary); }
.alfa-switch__knob { display: block;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--bg-primary);
    box-shadow: var(--shadow-xs);
    transform: translateX(0);
    transition: transform .15s ease;
}
.alfa-switch__track--on .alfa-switch__knob { display: block; transform: translateX(18px); }
.alfa-switch__label { font-size: 16px; line-height: 24px; }
.alfa-switch__sub { display: block; font-size: 14px; line-height: 20px; color: var(--text-secondary); }
.alfa-switch__error { display: block; font-size: 14px; line-height: 20px; color: var(--status-negative); }
@media (prefers-reduced-motion: reduce) {
    .alfa-switch__track, .alfa-switch__knob { display: block; transition: none; }
}
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Switch({
  checked = false,
  onChange,
  label,
  hint,
  error,
  name,
  reversed = false,
  align = 'start',
  block = false,
  disabled = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const handleChange = event => {
    if (onChange) {
      onChange(event, {
        checked: event.target.checked,
        name
      });
    }
  };
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const rootClasses = ['alfa-switch', align === 'center' ? 'alfa-switch--center' : '', block ? 'alfa-switch--block' : '', reversed ? 'alfa-switch--reversed' : '', disabled ? 'alfa-switch--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: rootClasses
  }, /*#__PURE__*/React.createElement("span", {
    className: `alfa-switch__track ${checked ? 'alfa-switch__track--on' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-switch__knob"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    name: name,
    onChange: handleChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, restProps)), label || hint || errorMessage ? /*#__PURE__*/React.createElement("span", null, label ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-switch__label"
  }, label) : null, hint && !errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-switch__sub"
  }, hint) : null, errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-switch__error",
    role: "alert"
  }, errorMessage) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Textarea — filled multiline field. Mirrors
   @alfalab/core-components-textarea conventions:
   - onChange(event, { value })
   - internal handler handleChange
   - autosize (grows with content), maxLength + counter, labelView */

const STYLE_ID = 'alfa-textarea-styles';
const CSS = `
.alfa-textarea { display: inline-flex; flex-direction: column; gap: 4px; width: 100%; font-family: var(--font-system); }
.alfa-textarea__outer-label { font-size: 13px; line-height: 16px; color: var(--text-secondary); padding: 0 2px 2px; }
.alfa-textarea__shell {
    position: relative; display: flex; flex-direction: column;
    background: var(--surface-secondary);
    border: 1px solid transparent; border-radius: 16px;
    padding: 10px 16px 12px;
    transition: background-color .12s ease, border-color .12s ease;
}
.alfa-textarea__shell:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-textarea__shell--focused { background: var(--surface-primary); border-color: var(--border-key); }
.alfa-textarea__shell--focused:hover { background: var(--surface-primary); }
.alfa-textarea__shell--error { border-color: var(--status-negative); background: var(--surface-primary); }
.alfa-textarea__shell--disabled { opacity: .5; pointer-events: none; }
.alfa-textarea__label { font-size: 13px; line-height: 16px; color: var(--text-secondary); pointer-events: none; }
.alfa-textarea__shell--focused .alfa-textarea__label { color: var(--text-info); }
.alfa-textarea__shell--error .alfa-textarea__label { color: var(--status-negative); }
.alfa-textarea__input {
    border: none; background: transparent; outline: none; resize: vertical;
    font-family: inherit; font-size: 16px; line-height: 24px; color: var(--text-primary);
    width: 100%; padding: 2px 0 0; margin: 0; min-height: 48px; box-sizing: border-box;
}
.alfa-textarea__input--autosize { resize: none; overflow: hidden; }
.alfa-textarea__input::placeholder { color: var(--text-tertiary); }
.alfa-textarea__footer { display: flex; justify-content: space-between; gap: 12px; padding: 0 16px; }
.alfa-textarea__hint { font-size: 12px; line-height: 16px; color: var(--text-secondary); }
.alfa-textarea__hint--error { color: var(--status-negative); }
.alfa-textarea__counter { font-size: 12px; line-height: 16px; color: var(--text-tertiary); flex: 0 0 auto; margin-left: auto; }
.alfa-textarea__counter--over { color: var(--status-negative); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Textarea({
  label,
  labelView = 'inner',
  value = '',
  placeholder,
  hint,
  error,
  name,
  maxLength,
  showCounter = false,
  autosize = false,
  minRows = 2,
  maxRows,
  disabled = false,
  onChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef(null);
  const resize = React.useCallback(() => {
    const el = inputRef.current;
    if (!el || !autosize) return;
    el.style.height = 'auto';
    let next = el.scrollHeight;
    if (maxRows) {
      const max = maxRows * 24 + 4;
      next = Math.min(next, max);
    }
    el.style.height = `${next}px`;
  }, [autosize, maxRows]);
  React.useEffect(() => {
    resize();
  }, [value, resize]);
  const handleChange = event => {
    if (onChange) {
      onChange(event, {
        value: event.target.value
      });
    }
    resize();
  };
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const errorMessage = typeof error === 'boolean' ? '' : error;
  const length = typeof value === 'string' ? value.length : 0;
  const over = maxLength != null && length > maxLength;
  const shellClasses = ['alfa-textarea__shell', focused ? 'alfa-textarea__shell--focused' : '', errorMessage ? 'alfa-textarea__shell--error' : '', disabled ? 'alfa-textarea__shell--disabled' : ''].filter(Boolean).join(' ');
  const inputClasses = ['alfa-textarea__input', autosize ? 'alfa-textarea__input--autosize' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: `alfa-textarea ${className}`
  }, label && labelView === 'outer' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-textarea__outer-label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: shellClasses
  }, label && labelView === 'inner' ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-textarea__label"
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    ref: inputRef,
    className: inputClasses,
    value: value,
    placeholder: placeholder,
    name: name,
    rows: minRows,
    disabled: disabled,
    maxLength: maxLength,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, restProps))), hint || errorMessage || showCounter && maxLength != null ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-textarea__footer"
  }, hint || errorMessage ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-textarea__hint ${errorMessage ? 'alfa-textarea__hint--error' : ''}`,
    role: errorMessage ? 'alert' : undefined
  }, errorMessage || hint) : null, showCounter && maxLength != null ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-textarea__counter ${over ? 'alfa-textarea__counter--over' : ''}`
  }, length, " / ", maxLength) : null) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank SegmentedControl — a single-choice toggle in a soft track; the
   active option lifts to a white pill (the «Мои / Общие / Архив» switcher).
   Controlled: value + onChange(event, { value }). */

const STYLE_ID = 'alfa-segmented-styles';
const CSS = `
.alfa-segmented { display: inline-flex; align-items: center; gap: 2px; padding: 4px;
    background: var(--surface-secondary); border-radius: 14px; font-family: var(--font-system); box-sizing: border-box; }
.alfa-segmented--block { display: flex; }
.alfa-segmented__opt { appearance: none; border: none; background: none; cursor: pointer;
    font-family: inherit; font-size: 15px; line-height: 20px; font-weight: 500; color: var(--text-secondary);
    padding: 8px 18px; border-radius: 10px; white-space: nowrap; display: inline-flex; align-items: center; gap: 8px;
    transition: background-color .14s ease, color .14s ease, box-shadow .14s ease; flex: 1; justify-content: center; }
.alfa-segmented__opt:hover { color: var(--text-primary); }
.alfa-segmented__opt--active { background: var(--surface-primary); color: var(--text-primary); box-shadow: var(--shadow-xs-hard); }
.alfa-segmented__opt--active:hover { color: var(--text-primary); }
.alfa-segmented__opt[disabled] { opacity: .4; cursor: not-allowed; }
.alfa-segmented__count { font-size: 13px; color: var(--text-tertiary); font-weight: 500; }
.alfa-segmented__opt--active .alfa-segmented__count { color: var(--text-secondary); }
@media (prefers-reduced-motion: reduce) { .alfa-segmented__opt { transition: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  block = false,
  className = '',
  ...rest
}) {
  useStyles();
  const handleClick = (event, opt) => {
    if (opt.disabled || opt.id === value) return;
    if (onChange) onChange(event, {
      value: opt.id
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-segmented ${block ? 'alfa-segmented--block' : ''} ${className}`,
    role: "tablist"
  }, rest), options.map(opt => {
    const active = opt.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.id,
      type: "button",
      role: "tab",
      "aria-selected": active,
      disabled: opt.disabled,
      className: `alfa-segmented__opt ${active ? 'alfa-segmented__opt--active' : ''}`,
      onClick: e => handleClick(e, opt)
    }, opt.icon || null, /*#__PURE__*/React.createElement("span", null, opt.label), opt.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "alfa-segmented__count"
    }, opt.count) : null);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Tabs — horizontal tab switcher. Mirrors
   @alfalab/core-components-tabs conventions:
   - controlled: selectedId + onChange(event, { selectedId })
   - view 'primary' (underline) | 'secondary' (pill row)
   - tabs: { id, title, rightAddons, disabled }[] */

const STYLE_ID = 'alfa-tabs-styles';
const CSS = `
.alfa-tabs { font-family: var(--font-system); }
.alfa-tabs__list { display: flex; gap: 4px; position: relative; }
.alfa-tabs--scrollable .alfa-tabs__list { overflow-x: auto; scrollbar-width: none; }
.alfa-tabs--scrollable .alfa-tabs__list::-webkit-scrollbar { display: none; }

/* primary — underline */
.alfa-tabs--primary .alfa-tabs__list { gap: 24px; box-shadow: inset 0 -1px 0 var(--color-neutral-300); }
.alfa-tabs--primary .alfa-tabs__tab {
    border: none; background: transparent; cursor: pointer; padding: 12px 0 14px;
    font-family: inherit; font-size: 16px; line-height: 20px; font-weight: 500;
    color: var(--text-secondary); position: relative; white-space: nowrap;
    display: inline-flex; align-items: center; gap: 8px;
    transition: color .12s ease;
}
.alfa-tabs--primary .alfa-tabs__tab:hover { color: var(--text-primary); }
.alfa-tabs--primary .alfa-tabs__tab--active { color: var(--text-primary); }
.alfa-tabs--primary .alfa-tabs__tab--active::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
    background: var(--accent-primary); border-radius: 2px 2px 0 0;
}

/* secondary — pill row */
.alfa-tabs--secondary .alfa-tabs__list { gap: 8px; }
.alfa-tabs--secondary .alfa-tabs__tab {
    border: none; cursor: pointer; padding: 9px 16px; border-radius: 99px;
    font-family: inherit; font-size: 15px; line-height: 20px; font-weight: 500;
    color: var(--text-primary); background: var(--color-neutral-100); white-space: nowrap;
    display: inline-flex; align-items: center; gap: 8px;
    transition: background-color .12s ease, color .12s ease;
}
.alfa-tabs--secondary .alfa-tabs__tab:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-tabs--secondary .alfa-tabs__tab--active { background: var(--accent-secondary); color: var(--text-inverted-primary); }

.alfa-tabs__tab[disabled] { opacity: .4; pointer-events: none; }
.alfa-tabs__count { font-size: 13px; color: var(--text-tertiary); font-weight: 500; }
.alfa-tabs--secondary .alfa-tabs__tab--active .alfa-tabs__count { color: var(--text-inverted-secondary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Tabs({
  tabs = [],
  selectedId,
  onChange,
  view = 'primary',
  scrollable = false,
  className = '',
  ...restProps
}) {
  useStyles();
  const handleClick = (event, tab) => {
    if (tab.disabled) return;
    if (onChange) {
      onChange(event, {
        selectedId: tab.id
      });
    }
  };
  const rootClasses = ['alfa-tabs', `alfa-tabs--${view}`, scrollable ? 'alfa-tabs--scrollable' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-tabs__list",
    role: "tablist"
  }, tabs.map(tab => {
    const active = tab.id === selectedId;
    const tabClasses = ['alfa-tabs__tab', active ? 'alfa-tabs__tab--active' : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      type: "button",
      className: tabClasses,
      role: "tab",
      "aria-selected": active,
      disabled: tab.disabled,
      onClick: event => handleClick(event, tab)
    }, /*#__PURE__*/React.createElement("span", null, tab.title), tab.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "alfa-tabs__count"
    }, tab.count) : null, tab.rightAddons || null);
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/BottomSheet.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank BottomSheet — modal sheet that slides up from the bottom edge, the
   canonical mobile container for actions, confirmations and pickers. Mirrors
   @alfalab/core-components-bottom-sheet conventions:
   - open + onClose
   - title, hasCloser, a grabber handle, optional sticky actionButton/footer
   - backdrop scrim, rounded top corners, upward shadow */

const STYLE_ID = 'alfa-bottom-sheet-styles';
const CSS = `
.alfa-sheet { position: absolute; inset: 0; z-index: 100; display: flex; flex-direction: column; justify-content: flex-end; font-family: var(--font-system); }
.alfa-sheet--fixed { position: fixed; }
.alfa-sheet__backdrop { position: absolute; inset: 0; background: var(--overlay-default); animation: alfa-sheet-fade .15s ease; }
.alfa-sheet__panel {
    position: relative; background: var(--bg-modal-primary, #fff);
    border-radius: 32px 32px 0 0; box-shadow: var(--shadow-l-up);
    max-height: 92%; display: flex; flex-direction: column;
    animation: alfa-sheet-rise .25s cubic-bezier(.2,.8,.2,1);
}
.alfa-sheet__grabber { width: 32px; height: 4px; border-radius: 99px; background: var(--color-neutral-400); margin: 8px auto 0; flex: 0 0 auto; }
.alfa-sheet__header { display: flex; align-items: center; gap: 12px; padding: 16px 20px 8px; }
.alfa-sheet__title { flex: 1; font-size: 20px; line-height: 24px; font-weight: 500; color: var(--text-primary); margin: 0; }
.alfa-sheet__closer {
    flex: 0 0 auto; width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center;
    transition: background-color .12s ease;
}
.alfa-sheet__closer:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-sheet__body { padding: 8px 20px 20px; overflow-y: auto; color: var(--text-primary); font-size: 16px; line-height: 24px; }
.alfa-sheet__footer { padding: 12px 20px calc(20px + env(safe-area-inset-bottom)); border-top: 1px solid var(--color-neutral-200); display: flex; gap: 12px; }
@keyframes alfa-sheet-fade { from { opacity: 0; } }
@keyframes alfa-sheet-rise { from { transform: translateY(100%); } }
@media (prefers-reduced-motion: reduce) {
    .alfa-sheet__panel, .alfa-sheet__backdrop { animation: none; }
}
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function BottomSheet({
  open = false,
  onClose,
  title,
  hasCloser = true,
  hasGrabber = true,
  fixed = true,
  footer,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  React.useEffect(() => {
    if (!open) return undefined;
    const handleKey = event => {
      if (event.key === 'Escape' && onClose) onClose(event);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);
  if (!open) return null;
  const handleBackdrop = event => {
    if (onClose) onClose(event);
  };
  const rootClasses = ['alfa-sheet', fixed ? 'alfa-sheet--fixed' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses,
    role: "dialog",
    "aria-modal": "true"
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-sheet__backdrop",
    onClick: handleBackdrop
  }), /*#__PURE__*/React.createElement("div", {
    className: "alfa-sheet__panel"
  }, hasGrabber ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-sheet__grabber"
  }) : null, title || hasCloser ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-sheet__header"
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "alfa-sheet__title"
  }, title) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), hasCloser ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-sheet__closer",
    onClick: handleBackdrop,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5859 12.0001L6 16.5L7.5 18L12.0001 13.4143L16.5 18L18 16.5L13.4143 12.0001L18 7.5L16.5 6L12.0001 10.5859L7.5 6L6 7.5L10.5859 12.0001Z",
    fill: "currentColor"
  }))) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "alfa-sheet__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-sheet__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Confirmation.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Confirmation — SMS / push code confirmation screen. Mirrors
   @alfalab/core-components-confirmation conventions:
   - onComplete(event, { code }) when the code is fully entered
   - onResend(event) — resend action, gated behind a countdown
   - title, text, codeLength, countdownDuration (seconds), error */

const STYLE_ID = 'alfa-confirmation-styles';
const CSS = `
.alfa-confirm { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; max-width: 320px; font-family: var(--font-system); }
.alfa-confirm__title { margin: 0; font-size: 22px; line-height: 28px; font-weight: 500; color: var(--text-primary); }
.alfa-confirm__text { margin: 0 0 8px; font-size: 15px; line-height: 22px; color: var(--text-secondary); }
.alfa-confirm__text b { color: var(--text-primary); font-weight: 500; white-space: nowrap; }
.alfa-confirm__resend {
    border: none; background: transparent; cursor: pointer; padding: 8px 4px; margin-top: 4px;
    font-family: inherit; font-size: 15px; line-height: 20px; color: var(--text-info); font-weight: 500;
}
.alfa-confirm__resend:disabled { color: var(--text-tertiary); cursor: default; }
.alfa-confirm__timer { margin-top: 8px; font-size: 15px; line-height: 20px; color: var(--text-tertiary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Confirmation({
  title = 'Введите код из СМС',
  text,
  codeLength = 4,
  countdownDuration = 60,
  code = '',
  error,
  onChange,
  onComplete,
  onResend,
  className = '',
  ...restProps
}) {
  useStyles();
  const [left, setLeft] = React.useState(countdownDuration);
  React.useEffect(() => {
    if (left <= 0) return undefined;
    const id = setTimeout(() => setLeft(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [left]);
  const handleChange = (event, payload) => {
    if (onChange) onChange(event, payload);
  };
  const handleComplete = (event, payload) => {
    if (onComplete) onComplete(event, {
      code: payload.value
    });
  };
  const handleResend = event => {
    if (left > 0) return;
    setLeft(countdownDuration);
    if (onResend) onResend(event);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-confirm ${className}`
  }, restProps), /*#__PURE__*/React.createElement("h2", {
    className: "alfa-confirm__title"
  }, title), text ? /*#__PURE__*/React.createElement("p", {
    className: "alfa-confirm__text"
  }, text) : null, /*#__PURE__*/React.createElement(__ds_scope.CodeInput, {
    length: codeLength,
    value: code,
    error: error,
    onChange: handleChange,
    onComplete: handleComplete
  }), left > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-confirm__timer"
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u0435\u0437 ", left, " \u0441") : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-confirm__resend",
    onClick: handleResend
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E"));
}
Object.assign(__ds_scope, { Confirmation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Confirmation.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Hint.jsx
__defLazy("Hint", () => { try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Hint — a small "?" (or "i") trigger that reveals a help popover
   anchored to it. The everyday companion to form fields and section titles.
   Mirrors @alfalab/core-components-hint conventions:
   - view: 'dark' (navy ink bubble, default) | 'light' (white card)
   - trigger: 'hover' (default) | 'click'
   - position: 'top' | 'bottom' | 'left' | 'right'
   - icon: 'question' (default) | 'info'
   - controlled `open` + onOpenChange(event, { open }), or self-managed */

const STYLE_ID = 'alfa-hint-styles';
const CSS = `
.alfa-hint { position: relative; display: inline-flex; vertical-align: middle; }
.alfa-hint__btn {
    width: 20px; height: 20px; flex: 0 0 auto; padding: 0; border: none; border-radius: 50%; cursor: pointer;
    display: inline-flex; align-items: center; justify-content: center;
    background: var(--color-neutral-translucent-100); color: var(--text-secondary);
    transition: background-color .12s ease, color .12s ease;
}
.alfa-hint__btn:hover { background: var(--color-neutral-translucent-200); color: var(--text-primary); }
.alfa-hint__btn--open { background: var(--accent-secondary); color: var(--text-inverted-primary); }
.alfa-hint__btn svg { width: 14px; height: 14px; display: block; }

.alfa-hint__pop {
    position: absolute; z-index: 130; width: max-content; max-width: 240px; box-sizing: border-box;
    padding: 12px 14px; border-radius: 12px;
    background: var(--accent-secondary); color: var(--text-inverted-primary, #fff);
    font-family: var(--font-system); font-size: 13px; line-height: 18px;
    box-shadow: var(--shadow-m-hard, var(--shadow-m));
}
.alfa-hint__pop--light { background: var(--surface-primary); color: var(--text-primary); }
.alfa-hint__arrow { position: absolute; width: 8px; height: 8px; background: inherit; transform: rotate(45deg); }
.alfa-hint__pop--top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.alfa-hint__pop--top .alfa-hint__arrow { bottom: -4px; left: 50%; margin-left: -4px; }
.alfa-hint__pop--bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
.alfa-hint__pop--bottom .alfa-hint__arrow { top: -4px; left: 50%; margin-left: -4px; }
.alfa-hint__pop--left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
.alfa-hint__pop--left .alfa-hint__arrow { right: -4px; top: 50%; margin-top: -4px; }
.alfa-hint__pop--right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
.alfa-hint__pop--right .alfa-hint__arrow { left: -4px; top: 50%; margin-top: -4px; }

/* inverted = the trigger sits on a dark surface; flip the resting chip */
.alfa-hint--inverted .alfa-hint__btn { background: var(--color-neutral-translucent-inverted-100); color: var(--text-inverted-secondary); }
.alfa-hint--inverted .alfa-hint__btn:hover { background: var(--color-neutral-translucent-inverted-200); color: var(--text-inverted-primary); }
.alfa-hint--inverted .alfa-hint__btn--open { background: #fff; color: var(--accent-secondary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const ICONS = {
  question: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm.1 13.8a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zm1.9-6.1c0 1.2-.6 1.8-1.4 2.4-.6.5-.8.7-.8 1.4v.2h-1.7v-.3c0-1.2.5-1.8 1.3-2.4.7-.5.9-.8.9-1.3 0-.6-.5-1-1.2-1-.8 0-1.3.5-1.4 1.3l-1.7-.2C6.5 9 7.7 8 9.5 8c1.8 0 2.9 1 2.9 2.6z",
    fill: "currentColor"
  }),
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zm1 13.5h-2V11h2v5.5zM12 9.4A1.2 1.2 0 1112 7a1.2 1.2 0 010 2.4z",
    fill: "currentColor"
  })
};
function Hint({
  content,
  view = 'dark',
  trigger = 'hover',
  position = 'top',
  icon = 'question',
  inverted = false,
  open: openProp,
  onOpenChange,
  className = '',
  ...restProps
}) {
  useStyles();
  const isControlled = openProp != null;
  const [openState, setOpenState] = React.useState(false);
  const open = isControlled ? openProp : openState;
  const ref = React.useRef(null);
  const setOpen = (next, event) => {
    if (!isControlled) setOpenState(next);
    if (onOpenChange) onOpenChange(event, {
      open: next
    });
  };
  React.useEffect(() => {
    if (trigger !== 'click' || !open) return undefined;
    const handleOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false, event);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  });
  const triggerProps = trigger === 'hover' ? {
    onMouseEnter: e => setOpen(true, e),
    onMouseLeave: e => setOpen(false, e),
    onFocus: e => setOpen(true, e),
    onBlur: e => setOpen(false, e)
  } : {
    onClick: e => setOpen(!open, e)
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `alfa-hint ${inverted ? 'alfa-hint--inverted' : ''} ${className}`,
    ref: ref
  }, restProps), /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `alfa-hint__btn ${open ? 'alfa-hint__btn--open' : ''}`,
    "aria-label": "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430",
    "aria-expanded": open
  }, triggerProps), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none"
  }, ICONS[icon] || ICONS.question)), open ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-hint__pop alfa-hint__pop--${position} ${view === 'light' ? 'alfa-hint__pop--light' : ''}`,
    role: "tooltip"
  }, content, /*#__PURE__*/React.createElement("span", {
    className: "alfa-hint__arrow"
  })) : null);
}
Object.assign(__ds_scope, { Hint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Hint.jsx", error: String((e && e.message) || e) }); } });

// components/overlay/Modal.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Modal — centered dialog with a backdrop scrim. Mirrors
   @alfalab/core-components-modal conventions:
   - open + onClose (backdrop / closer / Escape)
   - title, hasCloser, size 's'|'m'|'l', sticky footer
   - scale-in panel, navy-tinted modal shadow */

const STYLE_ID = 'alfa-modal-styles';
const CSS = `
.alfa-modal { position: absolute; inset: 0; z-index: 120; display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box; font-family: var(--font-system); }
.alfa-modal--fixed { position: fixed; }
.alfa-modal__backdrop { position: absolute; inset: 0; background: var(--overlay-default); animation: alfa-modal-fade .15s ease; }
.alfa-modal__panel {
    position: relative; display: flex; flex-direction: column; width: 100%;
    max-height: 100%; box-sizing: border-box;
    background: var(--bg-modal-primary, #fff); border-radius: 24px;
    box-shadow: var(--shadow-l); animation: alfa-modal-pop .2s cubic-bezier(.2,.8,.2,1);
}
.alfa-modal__panel--s { max-width: 360px; }
.alfa-modal__panel--m { max-width: 480px; }
.alfa-modal__panel--l { max-width: 640px; }
.alfa-modal__header { display: flex; align-items: flex-start; gap: 12px; padding: 24px 24px 8px; }
.alfa-modal__title { flex: 1; margin: 0; font-size: 22px; line-height: 28px; font-weight: 500; color: var(--text-primary); }
.alfa-modal__closer {
    flex: 0 0 auto; width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center; transition: background-color .12s ease;
}
.alfa-modal__closer:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-modal__body { padding: 8px 24px 24px; overflow-y: auto; color: var(--text-primary); font-size: 16px; line-height: 24px; }
.alfa-modal__body--no-header { padding-top: 24px; }
.alfa-modal__footer { padding: 16px 24px 24px; display: flex; gap: 12px; }
@keyframes alfa-modal-fade { from { opacity: 0; } }
@keyframes alfa-modal-pop { from { opacity: 0; transform: scale(.96); } }
@media (prefers-reduced-motion: reduce) { .alfa-modal__panel, .alfa-modal__backdrop { animation: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Modal({
  open = false,
  onClose,
  title,
  hasCloser = true,
  size = 'm',
  fixed = true,
  footer,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  React.useEffect(() => {
    if (!open) return undefined;
    const handleKey = event => {
      if (event.key === 'Escape' && onClose) onClose(event);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);
  if (!open) return null;
  const handleClose = event => {
    if (onClose) onClose(event);
  };
  const hasHeader = title || hasCloser;
  const rootClasses = ['alfa-modal', fixed ? 'alfa-modal--fixed' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rootClasses,
    role: "dialog",
    "aria-modal": "true"
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-modal__backdrop",
    onClick: handleClose
  }), /*#__PURE__*/React.createElement("div", {
    className: `alfa-modal__panel alfa-modal__panel--${size}`
  }, hasHeader ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-modal__header"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "alfa-modal__title"
  }, title) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), hasCloser ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-modal__closer",
    onClick: handleClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5859 12.0001L6 16.5L7.5 18L12.0001 13.4143L16.5 18L18 16.5L13.4143 12.0001L18 7.5L16.5 6L12.0001 10.5859L7.5 6L6 7.5L10.5859 12.0001Z",
    fill: "currentColor"
  }))) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: `alfa-modal__body ${hasHeader ? '' : 'alfa-modal__body--no-header'}`
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-modal__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/OptionList.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank OptionList — the dropdown / menu surface used inside Select,
   Autocomplete, Picker and stand-alone menus. Mirrors the Figma anatomy:
   - OptionList    — rounded (16px) white popover with layered elevation,
                     optional sticky Header / Footer, scrollable body.
   - OptionListCell — a 48px option row: leftControl / rightControl slots,
                     title + optional caption, selected / disabled / hover.
   - OptionListGroupTitle — tracked 12px section label between groups.
   - OptionListEmptyState — centred "nothing found" message.
   Every part has a light (default) and an inverted (dark) surface via the
   `inverted` prop. Callbacks follow the house rule: onClick(event, { value }). */

const STYLE_ID = 'alfa-optionlist-styles';
const CSS = `
.alfa-ol {
    box-sizing: border-box; width: 100%; max-width: 360px; overflow: hidden;
    border-radius: 16px; background: var(--surface-primary);
    box-shadow: inset 0 0 0 1px var(--border-secondary), var(--shadow-l);
    font-family: var(--font-system); color: var(--text-primary);
    display: flex; flex-direction: column;
}
.alfa-ol__scroll { overflow-y: auto; overscroll-behavior: contain; }
.alfa-ol__scroll::-webkit-scrollbar { width: 8px; }
.alfa-ol__scroll::-webkit-scrollbar-thumb { background: var(--color-neutral-translucent-300); border-radius: 99px; border: 2px solid transparent; background-clip: padding-box; }
.alfa-ol__header, .alfa-ol__footer { padding: 12px; flex: 0 0 auto; background: var(--surface-primary); }
.alfa-ol__header { box-shadow: inset 0 -1px 0 var(--border-secondary); }
.alfa-ol__footer { box-shadow: inset 0 1px 0 var(--border-secondary); }

/* group title */
.alfa-ol-group { padding: 12px 12px 4px; font-size: 12px; line-height: 16px; font-weight: 400;
    letter-spacing: 1.25px; color: var(--text-secondary); }

/* empty state */
.alfa-ol-empty { padding: 14px 12px; text-align: center; font-size: 14px; line-height: 20px; color: var(--text-secondary); }

/* cell */
.alfa-ol-cell {
    display: flex; align-items: center; gap: 12px; box-sizing: border-box;
    width: 100%; min-height: 48px; padding: 12px; border: none; background: transparent;
    font-family: inherit; text-align: left; cursor: pointer; color: var(--text-primary);
    transition: background-color .12s ease;
}
.alfa-ol-cell:hover { background: var(--color-neutral-translucent-100); }
.alfa-ol-cell:active { background: var(--color-neutral-translucent-200); }
.alfa-ol-cell--selected { background: var(--color-neutral-translucent-100); }
.alfa-ol-cell--disabled { cursor: not-allowed; color: var(--text-tertiary); }
.alfa-ol-cell--disabled:hover { background: transparent; }
.alfa-ol-cell__ctrl { flex: 0 0 auto; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; color: var(--text-secondary); }
.alfa-ol-cell__body { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.alfa-ol-cell__title { font-size: 16px; line-height: 24px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alfa-ol-cell__caption { font-size: 14px; line-height: 18px; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.alfa-ol-cell--disabled .alfa-ol-cell__caption { color: var(--text-quaternary); }
.alfa-ol-cell__check { color: var(--accent-primary); }

/* ---- inverted (dark) ---- */
.alfa-ol--inverted { background: var(--bg-modal-inverted-secondary); color: var(--text-inverted-primary);
    box-shadow: inset 0 0 0 1px var(--color-neutral-inverted-400), var(--shadow-l); }
.alfa-ol--inverted .alfa-ol__header, .alfa-ol--inverted .alfa-ol__footer { background: transparent; }
.alfa-ol--inverted .alfa-ol__header { box-shadow: inset 0 -1px 0 var(--color-neutral-inverted-400); }
.alfa-ol--inverted .alfa-ol__footer { box-shadow: inset 0 1px 0 var(--color-neutral-inverted-400); }
.alfa-ol--inverted .alfa-ol-group, .alfa-ol--inverted .alfa-ol-empty { color: var(--text-inverted-secondary); }
.alfa-ol-cell--inverted { color: var(--text-inverted-primary); }
.alfa-ol-cell--inverted .alfa-ol-cell__ctrl { color: var(--text-inverted-secondary); }
.alfa-ol-cell--inverted .alfa-ol-cell__caption { color: var(--text-inverted-secondary); }
.alfa-ol-cell--inverted:hover { background: var(--color-neutral-translucent-inverted-100); }
.alfa-ol-cell--inverted:active { background: var(--color-neutral-translucent-inverted-200); }
.alfa-ol-cell--inverted.alfa-ol-cell--selected { background: var(--color-neutral-translucent-inverted-100); }
.alfa-ol-cell--inverted.alfa-ol-cell--disabled { color: var(--text-inverted-tertiary); }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Check() {
  return /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__ctrl alfa-ol-cell__check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4L19 7",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
function OptionListCell({
  value,
  selected = false,
  disabled = false,
  leftControl,
  rightControl,
  caption,
  inverted = false,
  showCheck = false,
  onClick,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const classes = ['alfa-ol-cell', selected ? 'alfa-ol-cell--selected' : '', disabled ? 'alfa-ol-cell--disabled' : '', inverted ? 'alfa-ol-cell--inverted' : '', className].filter(Boolean).join(' ');
  const handleClick = event => {
    if (disabled) return;
    if (onClick) onClick(event, {
      value
    });
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    disabled: disabled,
    "aria-selected": selected,
    onClick: handleClick
  }, rest), leftControl ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__ctrl"
  }, leftControl) : null, /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__title"
  }, children), caption ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__caption"
  }, caption) : null), rightControl ? /*#__PURE__*/React.createElement("span", {
    className: "alfa-ol-cell__ctrl"
  }, rightControl) : null, showCheck && selected ? /*#__PURE__*/React.createElement(Check, null) : null);
}
function OptionListGroupTitle({
  inverted,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-ol-group ${className}`
  }, rest), children);
}
function OptionListEmptyState({
  className = '',
  children = 'Ничего не нашлось',
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-ol-empty ${className}`
  }, rest), children);
}
function OptionList({
  header,
  footer,
  fixedHeight = false,
  maxHeight = 320,
  inverted = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const classes = ['alfa-ol', inverted ? 'alfa-ol--inverted' : '', className].filter(Boolean).join(' ');
  const bodyStyle = fixedHeight ? {
    height: maxHeight
  } : {
    maxHeight
  };

  // propagate `inverted` to cell children that didn't set it explicitly
  const decorated = React.Children.map(children, child => {
    if (React.isValidElement(child) && (child.type === OptionListCell || child.type === OptionListGroupTitle) && child.props.inverted === undefined) {
      return React.cloneElement(child, {
        inverted
      });
    }
    return child;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes,
    role: "listbox"
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-ol__header"
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    className: "alfa-ol__scroll",
    style: bodyStyle
  }, decorated), footer ? /*#__PURE__*/React.createElement("div", {
    className: "alfa-ol__footer"
  }, footer) : null);
}
Object.assign(__ds_scope, { OptionListCell, OptionListGroupTitle, OptionListEmptyState, OptionList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/OptionList.jsx", error: String((e && e.message) || e) }); }

// components/overlay/SidePanel.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank SidePanel — a wide overlay drawer that slides in from the right
   edge, used for filter/settings panels that need more room than a popover.
   Mirrors the desktop `SidePanel` pattern: floating rounded card inset from
   the viewport edges, sticky header/content/footer regions.
   open + onClose (backdrop / closer / Escape), size = panel width in px. */

const STYLE_ID = 'alfa-sidepanel-styles';
const CSS = `
.alfa-sidepanel { position: fixed; inset: 0; z-index: 130; font-family: var(--font-system); }
.alfa-sidepanel__backdrop { position: absolute; inset: 0; background: var(--overlay-default); animation: alfa-sp-fade .15s ease; }
.alfa-sidepanel__panel {
    position: absolute; top: 16px; right: 12px; bottom: 16px;
    width: 100%; max-height: calc(100% - 32px); box-sizing: border-box;
    display: flex; flex-direction: column; overflow: hidden;
    background: var(--bg-modal-primary, #fff); border-radius: 24px;
    box-shadow: var(--shadow-l); animation: alfa-sp-slide .22s cubic-bezier(.2,.8,.2,1);
}
.alfa-sidepanel__header { flex: 0 0 auto; display: flex; align-items: flex-start; gap: 12px; padding: 20px 28px 0; }
.alfa-sidepanel__header--sticky { position: sticky; top: 0; background: inherit; z-index: 1; }
.alfa-sidepanel__title { flex: 1; margin: 0; font-size: 30px; line-height: 36px; font-weight: 500; color: var(--text-primary); }
.alfa-sidepanel__closer {
    flex: 0 0 auto; width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
    background: var(--color-neutral-100); color: var(--text-secondary);
    display: inline-flex; align-items: center; justify-content: center; transition: background-color .12s ease;
}
.alfa-sidepanel__closer:hover { background: var(--neutral-100-hover, var(--color-neutral-200)); }
.alfa-sidepanel__content { flex: 1 1 auto; min-height: 0; overflow-y: auto; box-sizing: border-box; padding: 0 32px; color: var(--text-primary); }
.alfa-sidepanel__content:last-child { padding-bottom: 32px; }
.alfa-sidepanel__footer { flex: 0 0 auto; padding: 24px 32px 32px; display: flex; gap: 16px; flex-wrap: wrap; }
.alfa-sidepanel__footer--sticky { position: sticky; bottom: 0; background: inherit; border-top: 1px solid var(--color-neutral-200); }
@keyframes alfa-sp-fade { from { opacity: 0; } }
@keyframes alfa-sp-slide { from { opacity: 0; transform: translateX(24px); } }
@media (prefers-reduced-motion: reduce) { .alfa-sidepanel__panel, .alfa-sidepanel__backdrop { animation: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function SidePanel({
  open = false,
  onClose,
  size = 480,
  className = '',
  children,
  ...restProps
}) {
  useStyles();
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose(e);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const handleClose = event => {
    if (onClose) onClose(event);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-sidepanel ${className}`,
    role: "dialog",
    "aria-modal": "true"
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: "alfa-sidepanel__backdrop",
    onClick: handleClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "alfa-sidepanel__panel",
    style: {
      maxWidth: size
    }
  }, children));
}
SidePanel.Header = function SidePanelHeader({
  title,
  hasCloser = true,
  sticky = false,
  onClose,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `alfa-sidepanel__header ${sticky ? 'alfa-sidepanel__header--sticky' : ''} ${className}`
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "alfa-sidepanel__title"
  }, title) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), hasCloser ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alfa-sidepanel__closer",
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5859 12.0001L6 16.5L7.5 18L12.0001 13.4143L16.5 18L18 16.5L13.4143 12.0001L18 7.5L16.5 6L12.0001 10.5859L7.5 6L6 7.5L10.5859 12.0001Z",
    fill: "currentColor"
  }))) : null);
};
SidePanel.Content = function SidePanelContent({
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `alfa-sidepanel__content ${className}`
  }, children);
};
SidePanel.Footer = function SidePanelFooter({
  sticky = false,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `alfa-sidepanel__footer ${sticky ? 'alfa-sidepanel__footer--sticky' : ''} ${className}`
  }, children);
};
Object.assign(__ds_scope, { SidePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/SidePanel.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterGroup.jsx
__defLazy("FilterGroup", () => { try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank FilterGroup — the full list-toolbar filter pattern: a leading
   settings tag that opens a wide SidePanel of filter sections (draft state,
   committed on "Применить" / cleared on "Сбросить"), quick instant-apply
   toggle tags, and instant-apply dropdown pills — all shown together as
   removable tags in the bar. Used above tables/lists (task queues, statements,
   transaction lists). Controlled: value + onChange(event, { value }). */

const STYLE_ID = 'alfa-filtergroup-styles';
const CSS = `
.alfa-fgroup { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-family: var(--font-system); }
.alfa-fgroup__icon svg { display: block; }
.alfa-fgroup__panel-section + .alfa-fgroup__panel-section { margin-top: 24px; }
.alfa-fgroup__panel-title { margin: 0 0 16px; font-size: 22px; line-height: 28px; font-weight: 500; color: var(--text-primary); }
.alfa-fgroup__panel-row { display: flex; flex-wrap: wrap; gap: 8px; }
.alfa-fgroup__panel-check + .alfa-fgroup__panel-check { margin-top: 12px; }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const EMPTY_VALUE = {
  toggles: [],
  dropdowns: {},
  sections: {}
};
function countActive(value) {
  let n = value.toggles.length;
  Object.values(value.dropdowns || {}).forEach(v => {
    if (Array.isArray(v)) n += v.length;else if (v) n += 1;
  });
  Object.values(value.sections || {}).forEach(arr => {
    n += (arr || []).length;
  });
  return n;
}
const SlidersIcon = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 7h9M17 7h3M4 17h3M9 17h11",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "7",
  r: "2.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "17",
  r: "2.4",
  fill: "currentColor"
}));
function FilterGroup({
  toggles = [],
  dropdowns = [],
  sections = [],
  value,
  defaultValue,
  onChange,
  indicatorMode = 'dot',
  panelTitle = 'Фильтры',
  applyLabel = 'Применить',
  resetLabel = 'Сбросить',
  size = 40,
  className = '',
  ...restProps
}) {
  useStyles();
  const isControlled = value != null;
  const [innerValue, setInnerValue] = React.useState(() => ({
    ...EMPTY_VALUE,
    ...defaultValue
  }));
  const current = isControlled ? value : innerValue;
  const commit = (event, next) => {
    if (!isControlled) setInnerValue(next);
    if (onChange) onChange(event, {
      value: next
    });
  };
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [draft, setDraft] = React.useState(current.sections || {});
  const openPanel = () => {
    setDraft({
      ...current.sections
    });
    setPanelOpen(true);
  };
  const closePanel = () => setPanelOpen(false);
  const handleToggle = (event, key) => {
    const has = current.toggles.includes(key);
    const nextToggles = has ? current.toggles.filter(k => k !== key) : [...current.toggles, key];
    commit(event, {
      ...current,
      toggles: nextToggles
    });
  };
  const handleDropdownChange = (event, key, selected) => {
    commit(event, {
      ...current,
      dropdowns: {
        ...current.dropdowns,
        [key]: selected
      }
    });
  };
  const toggleDraftOption = (sectionKey, optKey) => {
    setDraft(prev => {
      const arr = prev[sectionKey] || [];
      const next = arr.includes(optKey) ? arr.filter(k => k !== optKey) : [...arr, optKey];
      return {
        ...prev,
        [sectionKey]: next
      };
    });
  };
  const clearSectionOption = (event, sectionKey, optKey) => {
    const arr = (current.sections[sectionKey] || []).filter(k => k !== optKey);
    commit(event, {
      ...current,
      sections: {
        ...current.sections,
        [sectionKey]: arr
      }
    });
  };
  const applyDraft = event => {
    commit(event, {
      ...current,
      sections: draft
    });
    setPanelOpen(false);
  };
  const resetDraft = () => setDraft({});
  const activeCount = countActive(current);
  const appliedSectionTags = [];
  sections.forEach(section => {
    (current.sections[section.key] || []).forEach(optKey => {
      const opt = section.options.find(o => o.key === optKey);
      if (opt) appliedSectionTags.push({
        sectionKey: section.key,
        optKey,
        content: opt.content
      });
    });
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `alfa-fgroup ${className}`
  }, restProps), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    view: "filled",
    shape: "rectangular",
    size: size,
    className: "alfa-fgroup__icon",
    onClick: openPanel,
    indicator: "none",
    "aria-label": panelTitle
  }, SlidersIcon, activeCount > 0 ? indicatorMode === 'count' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 99,
      background: 'var(--accent-primary)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700
    }
  }, activeCount) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  }) : null), toggles.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t.key,
    view: "filled",
    shape: "rectangular",
    size: size,
    selected: current.toggles.includes(t.key),
    rightAddons: current.toggles.includes(t.key) ? /*#__PURE__*/React.createElement("span", {
      role: "button",
      "aria-label": "\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440",
      onClick: e => {
        e.stopPropagation();
        handleToggle(e, t.key);
      },
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3l8 8M11 3l-8 8",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round"
    }))) : null,
    onClick: e => handleToggle(e, t.key)
  }, t.content)), appliedSectionTags.map(({
    sectionKey,
    optKey,
    content
  }) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: `${sectionKey}:${optKey}`,
    view: "filled",
    shape: "rectangular",
    size: size,
    selected: true,
    rightAddons: /*#__PURE__*/React.createElement("span", {
      role: "button",
      "aria-label": "\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440",
      onClick: e => {
        e.stopPropagation();
        clearSectionOption(e, sectionKey, optKey);
      },
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3l8 8M11 3l-8 8",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })))
  }, content)), dropdowns.map(d => /*#__PURE__*/React.createElement(__ds_scope.FilterDropdown, {
    key: d.key,
    label: d.label,
    options: d.options,
    multiple: d.multiple,
    selected: current.dropdowns[d.key] ?? (d.multiple ? [] : null),
    onChange: (event, {
      selected
    }) => handleDropdownChange(event, d.key, selected)
  })), /*#__PURE__*/React.createElement(__ds_scope.SidePanel, {
    open: panelOpen,
    onClose: closePanel,
    size: 480
  }, /*#__PURE__*/React.createElement(__ds_scope.SidePanel.Header, {
    title: panelTitle,
    sticky: true,
    onClose: closePanel
  }), /*#__PURE__*/React.createElement(__ds_scope.SidePanel.Content, null, sections.map(section => /*#__PURE__*/React.createElement("div", {
    key: section.key,
    className: "alfa-fgroup__panel-section"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "alfa-fgroup__panel-title"
  }, section.title), section.type === 'checkbox' ? section.options.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.key,
    className: "alfa-fgroup__panel-check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: (draft[section.key] || []).includes(opt.key),
    label: opt.content,
    onChange: () => toggleDraftOption(section.key, opt.key)
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "alfa-fgroup__panel-row"
  }, section.options.map(opt => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: opt.key,
    view: "filled",
    shape: "rectangular",
    size: 32,
    selected: (draft[section.key] || []).includes(opt.key),
    onClick: () => toggleDraftOption(section.key, opt.key)
  }, opt.content)))))), /*#__PURE__*/React.createElement(__ds_scope.SidePanel.Footer, {
    sticky: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    view: "primary",
    size: 56,
    onClick: applyDraft
  }, applyLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    view: "secondary",
    size: 56,
    onClick: resetDraft
  }, resetLabel))));
}
Object.assign(__ds_scope, { FilterGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterGroup.jsx", error: String((e && e.message) || e) }); } });

// components/overlay/Tooltip.jsx
try { (() => {
function _extends() { var n = Object.assign.apply(Object, arguments); for (var k in n) { if (/^aria[A-Z]/.test(k)) { n["aria-" + k.slice(4).toLowerCase()] = n[k]; delete n[k]; } } return n; } /* patched: camelCase aria props from x-import → real aria-* attributes */
/* Alfa-Bank Tooltip — small floating popover anchored to a trigger element.
   Mirrors @alfalab/core-components-tooltip conventions:
   - position: 'top' | 'bottom' | 'left' | 'right'
   - trigger: 'hover' (default) | 'click'
   - controlled `open` + onOpenChange, or self-managed
   - dark ink bubble with an arrow */

const STYLE_ID = 'alfa-tooltip-styles';
const CSS = `
.alfa-tooltip { position: relative; display: inline-flex; }
.alfa-tooltip__pop {
    position: absolute; z-index: 130; width: max-content; max-width: 240px; box-sizing: border-box;
    padding: 10px 12px; border-radius: 12px;
    background: var(--accent-secondary); color: var(--text-inverted-primary, #fff);
    font-family: var(--font-system); font-size: 13px; line-height: 18px;
    box-shadow: var(--shadow-m-hard, var(--shadow-m));
    animation: alfa-tooltip-in .12s ease;
}
.alfa-tooltip__pop--light { background: var(--surface-primary); color: var(--text-primary); box-shadow: var(--shadow-m-hard, var(--shadow-m)); }
.alfa-tooltip__arrow { position: absolute; width: 8px; height: 8px; background: inherit; transform: rotate(45deg); }
.alfa-tooltip__pop--top { bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%); }
.alfa-tooltip__pop--top .alfa-tooltip__arrow { bottom: -4px; left: 50%; margin-left: -4px; }
.alfa-tooltip__pop--bottom { top: calc(100% + 10px); left: 50%; transform: translateX(-50%); }
.alfa-tooltip__pop--bottom .alfa-tooltip__arrow { top: -4px; left: 50%; margin-left: -4px; }
.alfa-tooltip__pop--left { right: calc(100% + 10px); top: 50%; transform: translateY(-50%); }
.alfa-tooltip__pop--left .alfa-tooltip__arrow { right: -4px; top: 50%; margin-top: -4px; }
.alfa-tooltip__pop--right { left: calc(100% + 10px); top: 50%; transform: translateY(-50%); }
.alfa-tooltip__pop--right .alfa-tooltip__arrow { left: -4px; top: 50%; margin-top: -4px; }
@keyframes alfa-tooltip-in { from { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .alfa-tooltip__pop { animation: none; } }
`;
function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Tooltip({
  content,
  position = 'top',
  trigger = 'hover',
  view = 'dark',
  open: openProp,
  onOpenChange,
  children,
  className = '',
  ...restProps
}) {
  useStyles();
  const isControlled = openProp != null;
  const [openState, setOpenState] = React.useState(false);
  const open = isControlled ? openProp : openState;
  const ref = React.useRef(null);
  const setOpen = (next, event) => {
    if (!isControlled) setOpenState(next);
    if (onOpenChange) onOpenChange(event, {
      open: next
    });
  };
  React.useEffect(() => {
    if (trigger !== 'click' || !open) return undefined;
    const handleOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false, event);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  });
  // Единое правило ховеров: тултип появляется через 0,3 с после наведения; фокус с клавиатуры — сразу
  const hoverTimer = React.useRef(0);
  React.useEffect(() => () => clearTimeout(hoverTimer.current), []);
  const hoverProps = trigger === 'hover' ? {
    onMouseEnter: e => { clearTimeout(hoverTimer.current); hoverTimer.current = setTimeout(() => setOpen(true, e), 300); },
    onMouseLeave: e => { clearTimeout(hoverTimer.current); setOpen(false, e); },
    onFocus: e => setOpen(true, e),
    onBlur: e => setOpen(false, e)
  } : {
    onClick: e => setOpen(!open, e)
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `alfa-tooltip ${className}`,
    ref: ref
  }, hoverProps, restProps), children, open ? /*#__PURE__*/React.createElement("span", {
    className: `alfa-tooltip__pop alfa-tooltip__pop--${position} ${view === 'light' ? 'alfa-tooltip__pop--light' : ''}`,
    role: "tooltip"
  }, content, /*#__PURE__*/React.createElement("span", {
    className: "alfa-tooltip__arrow"
  })) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

/* Button: ленивый, см. __defLazy */

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Amount = __ds_scope.Amount;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CircularTimer = __ds_scope.CircularTimer;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.EntityCard = __ds_scope.EntityCard;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatStrip = __ds_scope.StatStrip;

__ds_ns.Status = __ds_scope.Status;

__ds_ns.Tag = __ds_scope.Tag;

/* Notification: ленивый, см. __defLazy */

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.AmountInput = __ds_scope.AmountInput;

__ds_ns.Calendar = __ds_scope.Calendar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CodeInput = __ds_scope.CodeInput;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.FileUpload = __ds_scope.FileUpload;

__ds_ns.FilterDropdown = __ds_scope.FilterDropdown;

/* FilterGroup: ленивый, см. __defLazy */

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Confirmation = __ds_scope.Confirmation;

/* Hint: ленивый, см. __defLazy */

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.OptionListCell = __ds_scope.OptionListCell;

__ds_ns.OptionListGroupTitle = __ds_scope.OptionListGroupTitle;

__ds_ns.OptionListEmptyState = __ds_scope.OptionListEmptyState;

__ds_ns.OptionList = __ds_scope.OptionList;

__ds_ns.SidePanel = __ds_scope.SidePanel;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();


(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/shared.jsx
  var cn = (...a) => a.filter(Boolean).join(" ");
  var Icon = {
    info: (p) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1-10v6h2v-6h-2Zm0-4v2h2V7h-2Z", fill: "currentColor" })),
    positive: (p) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1.2-5.6 5.9-5.9-1.4-1.4-4.5 4.5-2.1-2.1-1.4 1.4 3.5 3.5Z", fill: "currentColor" })),
    attention: (p) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1-14v6h2V7h-2Zm0 8v2h2v-2h-2Z", fill: "currentColor" })),
    negative: (p) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3.5-4.1 3.5-3.5 3.5 3.5 1.4-1.4-3.5-3.5 3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4Z", fill: "currentColor" })),
    cross: (p) => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M10.586 12 6 16.5 7.5 18l4.5-4.586L16.5 18l1.5-1.5L13.414 12 18 7.5 16.5 6 12 10.586 7.5 6 6 7.5 10.586 12Z", fill: "currentColor" })),
    chevronLeft: (p) => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "m10 12 5.5-5.5L14 5l-7 7 7 7 1.5-1.5L10 12Z", fill: "currentColor" })),
    chevronRight: (p) => /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 12 8.5 6.5 10 5l7 7-7 7-1.5-1.5L14 12Z", fill: "currentColor" })),
    check: (p) => /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 7.519 9.903 17 5 12.327l1.448-1.503 3.47 3.307L18.569 6 20 7.519Z", fill: "currentColor" })),
    calendar: (p) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 3h2v2h4V3h2v2h3a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h3V3Zm10 6H6v10h12V9Zm-9 2H7v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Z", fill: "currentColor" }))
  };
  var digits = (s) => String(s || "").replace(/\D/g, "");
  function maskDate(raw) {
    const d = digits(raw).slice(0, 8);
    let out = d.slice(0, 2);
    if (d.length > 2) out += "." + d.slice(2, 4);
    if (d.length > 4) out += "." + d.slice(4, 8);
    return out;
  }
  function parseDate(str) {
    const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(str || "");
    if (!m) return /* @__PURE__ */ new Date(NaN);
    const [d, mo, y] = [+m[1], +m[2], +m[3]];
    const date = new Date(y, mo - 1, d);
    return date.getFullYear() === y && date.getMonth() === mo - 1 && date.getDate() === d ? date : /* @__PURE__ */ new Date(NaN);
  }
  function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) return "";
    const p = (n) => String(n).padStart(2, "0");
    return `${p(date.getDate())}.${p(date.getMonth() + 1)}.${date.getFullYear()}`;
  }
  function maskTime(raw) {
    const d = digits(raw).slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}:${d.slice(2)}` : d;
  }
  function FieldShell({ label, hint, error, disabled, focused, block, rightAddons, children, className, onClick }) {
    const err = error && error !== true ? error : null;
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-dfield", block && "alfa-dfield--block", className) }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn(
          "alfa-dfield__shell",
          focused && "alfa-dfield__shell--focused",
          error && "alfa-dfield__shell--error",
          disabled && "alfa-dfield__shell--disabled"
        ),
        onClick
      },
      /* @__PURE__ */ React.createElement("div", { className: "alfa-dfield__main" }, label && /* @__PURE__ */ React.createElement("span", { className: "alfa-dfield__label" }, label), children),
      rightAddons && /* @__PURE__ */ React.createElement("span", { className: "alfa-dfield__addon" }, rightAddons)
    ), (err || hint) && /* @__PURE__ */ React.createElement("span", { className: cn("alfa-dfield__hint", err && "alfa-dfield__hint--error") }, err || hint));
  }

  // src/Alert.jsx
  function Alert({
    view = "common",
    title,
    titleView = "bold",
    children,
    buttons,
    hasCloser = false,
    closerAriaLabel = "\u0437\u0430\u043A\u0440\u044B\u0442\u044C",
    onClose,
    rowLimit,
    className,
    dataTestId,
    ...rest
  }) {
    const glyph2 = view === "positive" ? Icon.positive : view === "negative" ? Icon.negative : view === "attention" ? Icon.attention : Icon.info;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        role: view === "negative" ? "alert" : "status",
        className: cn("alfa-alert", `alfa-alert--${view}`, className),
        "data-test-id": dataTestId,
        ...rest
      },
      /* @__PURE__ */ React.createElement("span", { className: "alfa-alert__icon" }, glyph2({})),
      /* @__PURE__ */ React.createElement("div", { className: "alfa-alert__content" }, title && /* @__PURE__ */ React.createElement("div", { className: cn("alfa-alert__title", titleView === "light" && "alfa-alert__title--light") }, title), children && /* @__PURE__ */ React.createElement("div", { className: "alfa-alert__text", style: rowLimit ? { "--u-rows": rowLimit } : void 0, "data-row-limit": rowLimit || void 0 }, children), buttons && /* @__PURE__ */ React.createElement("div", { className: "alfa-alert__buttons" }, buttons)),
      hasCloser && /* @__PURE__ */ React.createElement("button", { type: "button", className: "alfa-alert__closer", "aria-label": closerAriaLabel, onClick: onClose }, Icon.cross({}))
    );
  }

  // src/List.jsx
  function List({ tag = "ul", marker, colorMarker, reversed, start, className, dataTestId, children }) {
    const Tag = tag;
    const items = React.Children.toArray(children).filter(Boolean);
    const isNode = React.isValidElement(marker);
    const count = items.length;
    const first = start != null ? start : reversed ? count : 1;
    const markerFor = (i) => {
      const n = reversed ? first - i : first + i;
      if (isNode) return marker;
      if (tag === "ol" || marker === "decimal") {
        if (marker === "lower-alpha") return String.fromCharCode(96 + n) + ")";
        return n + ".";
      }
      if (marker === "lower-alpha") return String.fromCharCode(96 + n) + ")";
      return marker || "\u2013";
    };
    return /* @__PURE__ */ React.createElement(Tag, { className: cn("alfa-list", `alfa-list--${tag}`, className), "data-test-id": dataTestId }, items.map((child, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "alfa-list__item" }, /* @__PURE__ */ React.createElement("span", { className: "alfa-list__marker", style: colorMarker ? { color: colorMarker } : void 0, "aria-hidden": "true" }, markerFor(i)), /* @__PURE__ */ React.createElement("span", { className: "alfa-list__content" }, child))));
  }

  // src/PureCell.jsx
  function PureCellRoot({ direction = "horizontal", verticalPadding = "default", horizontalPadding = 0, href, onClick, tag, className, dataTestId, children, ...rest }) {
    const Tag = tag || (href ? "a" : onClick ? "button" : "section");
    const interactive = !!(href || onClick);
    return /* @__PURE__ */ React.createElement(
      Tag,
      {
        href,
        onClick,
        type: Tag === "button" ? "button" : void 0,
        className: cn(
          "alfa-cell",
          `alfa-cell--${direction}`,
          `alfa-cell--pad-${typeof verticalPadding === "string" ? verticalPadding : "default"}`,
          interactive && "alfa-cell--interactive",
          className
        ),
        style: horizontalPadding ? { paddingLeft: horizontalPadding, paddingRight: horizontalPadding } : void 0,
        "data-test-id": dataTestId,
        ...rest
      },
      children
    );
  }
  function Graphics({ verticalAlign = "center", className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__graphics", `alfa-cell__graphics--${verticalAlign}`, className) }, children);
  }
  function Content({ className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__content", className) }, children);
  }
  function Main({ className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__main", className) }, children);
  }
  function Text({ titleColor = "primary", view = "primary", value, valueColor = "secondary", rowLimit, className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__text", `alfa-cell__text--${view}`, className) }, /* @__PURE__ */ React.createElement("div", { className: "alfa-cell__title", style: { color: `var(--text-${titleColor})`, ...rowLimit ? { WebkitLineClamp: rowLimit } : {} }, "data-row-limit": rowLimit || void 0 }, children), value && /* @__PURE__ */ React.createElement("div", { className: "alfa-cell__value", style: { color: `var(--text-${valueColor})` } }, value));
  }
  function AmountText({ value, currency = "\u20BD", minority = 100, color = "primary", className }) {
    const n = Number(value) / minority;
    const [int, frac] = Math.abs(n).toFixed(minority > 1 ? 2 : 0).split(".");
    const grouped = int.length > 3 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F") : int;
    return /* @__PURE__ */ React.createElement("span", { className: cn("alfa-cell__amount", className), style: { color: `var(--text-${color})` } }, n < 0 ? "\u2212" : "", grouped, frac && frac !== "00" ? `,${frac}` : "", "\u202F", currency);
  }
  function Addon({ verticalAlign = "center", className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__addon", `alfa-cell__addon--${verticalAlign}`, className) }, children);
  }
  function Footer({ className, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("alfa-cell__footer", className) }, children);
  }
  function Chevron() {
    return /* @__PURE__ */ React.createElement("span", { className: "alfa-cell__chevron" }, Icon.chevronRight({}));
  }
  var PureCell = Object.assign(PureCellRoot, { Graphics, Content, Main, Text, Amount: AmountText, Addon, Footer, Chevron });

  // src/Steps.jsx
  function Steps({
    children,
    activeStep: activeProp,
    defaultActiveStep = 1,
    isVerticalAlign = false,
    ordered = true,
    interactive = true,
    isMarkCompletedSteps = true,
    checkIsStepDisabled,
    checkIsStepError,
    checkIsStepWarning,
    checkIsStepPositive,
    onChange,
    className,
    dataTestId
  }) {
    const [inner, setInner] = React.useState(defaultActiveStep);
    const active = activeProp != null ? activeProp : inner;
    const items = React.Children.toArray(children).filter(Boolean);
    const go = (n) => {
      if (!interactive || checkIsStepDisabled && checkIsStepDisabled(n)) return;
      if (activeProp == null) setInner(n);
      if (onChange) onChange(n);
    };
    return /* @__PURE__ */ React.createElement("ol", { className: cn("alfa-steps", isVerticalAlign ? "alfa-steps--vertical" : "alfa-steps--horizontal", className), "data-test-id": dataTestId }, items.map((child, i) => {
      const n = i + 1;
      const isActive = n === active;
      const done = isMarkCompletedSteps && n < active;
      const status = checkIsStepError && checkIsStepError(n) ? "error" : checkIsStepWarning && checkIsStepWarning(n) ? "warning" : checkIsStepPositive && checkIsStepPositive(n) ? "positive" : done ? "done" : null;
      const disabled = checkIsStepDisabled && checkIsStepDisabled(n);
      const indicator = status === "error" ? "!" : status === "warning" ? "!" : status === "done" || status === "positive" ? Icon.check({}) : ordered ? n : null;
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: i,
          className: cn("alfa-step", isActive && "alfa-step--active", status && `alfa-step--${status}`, disabled && "alfa-step--disabled"),
          "aria-current": isActive ? "step" : void 0
        },
        /* @__PURE__ */ React.createElement("button", { type: "button", className: "alfa-step__button", onClick: () => go(n), disabled: !interactive || disabled, tabIndex: interactive ? 0 : -1 }, /* @__PURE__ */ React.createElement("span", { className: "alfa-step__indicator" }, indicator), /* @__PURE__ */ React.createElement("span", { className: "alfa-step__text" }, child)),
        n < items.length && /* @__PURE__ */ React.createElement("span", { className: "alfa-step__dash", "aria-hidden": "true" })
      );
    }));
  }

  // src/Pagination.jsx
  function Pagination({ currentPageIndex, pagesCount, view = "default", hideArrows = true, sidePadding = 1, activePadding = 2, onPageChange = () => null, className, dataTestId }) {
    const last = pagesCount - 1;
    const prev = !(hideArrows && currentPageIndex === 0) && /* @__PURE__ */ React.createElement("button", { type: "button", className: "alfa-pg__tag alfa-pg__arrow", "aria-label": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", disabled: currentPageIndex === 0, onClick: () => onPageChange(currentPageIndex - 1) }, Icon.chevronLeft({}));
    const next = !(hideArrows && currentPageIndex === last) && /* @__PURE__ */ React.createElement("button", { type: "button", className: "alfa-pg__tag alfa-pg__arrow", "aria-label": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", disabled: currentPageIndex === last, onClick: () => onPageChange(currentPageIndex + 1) }, Icon.chevronRight({}));
    if (view === "per-page") {
      return /* @__PURE__ */ React.createElement("nav", { className: cn("alfa-pg", className), "aria-label": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B", "data-test-id": dataTestId }, prev, /* @__PURE__ */ React.createElement("span", { className: "alfa-pg__counter" }, currentPageIndex + 1, " \u0438\u0437 ", pagesCount), next);
    }
    const maxHalf = sidePadding + activePadding + 1;
    const maxCount = maxHalf * 2 + 1;
    const fits = pagesCount <= maxCount;
    const count = fits ? pagesCount : maxCount;
    const collapsed = (i) => !fits && i >= maxHalf;
    const pageAt = (el) => {
      const rev = last - currentPageIndex;
      const revEl = count - 1 - el;
      if (el < sidePadding) return el;
      if (el === sidePadding && collapsed(currentPageIndex)) return null;
      if (revEl === sidePadding && collapsed(rev)) return null;
      if (revEl < sidePadding) return last - revEl;
      return Math.min(last - revEl, Math.max(el, currentPageIndex - maxHalf + el));
    };
    return /* @__PURE__ */ React.createElement("nav", { className: cn("alfa-pg", className), "aria-label": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B", "data-test-id": dataTestId }, prev, Array.from({ length: count }, (_, i) => {
      const p = pageAt(i);
      if (p === null) return /* @__PURE__ */ React.createElement("span", { key: i, className: "alfa-pg__dots" }, "\u2026");
      const on = p === currentPageIndex;
      return /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: cn("alfa-pg__tag", on && "alfa-pg__tag--checked"), "aria-current": on ? "page" : void 0, onClick: () => !on && onPageChange(p) }, (p + 1).toLocaleString("ru-RU"));
    }), next);
  }

  // src/Popover.jsx
  function Popover({
    open,
    anchorElement,
    position = "left",
    offset = [0, 8],
    withArrow = false,
    useAnchorWidth = false,
    preventFlip = false,
    zIndex = 50,
    className,
    popperClassName,
    dataTestId,
    children
  }) {
    const ref = React.useRef(null);
    const [style, setStyle] = React.useState({ position: "fixed", top: 0, left: 0, visibility: "hidden", zIndex });
    const [placed, setPlaced] = React.useState(position);
    const [anchor, setAnchor] = React.useState(null);
    React.useLayoutEffect(() => {
      const el = anchorElement && "current" in anchorElement ? anchorElement.current : anchorElement;
      if (el !== anchor) setAnchor(el || null);
    });
    const update = React.useCallback(() => {
      const el = ref.current;
      if (!el || !anchor) return;
      const a = anchor.getBoundingClientRect();
      const w = el.offsetWidth, h = el.offsetHeight;
      let [side, align] = position.split("-");
      const [along, away] = offset;
      const vw = window.innerWidth, vh = window.innerHeight;
      if (!preventFlip) {
        if (side === "bottom" && a.bottom + away + h > vh && a.top - away - h > 0) side = "top";
        else if (side === "top" && a.top - away - h < 0) side = "bottom";
        else if (side === "right" && a.right + away + w > vw) side = "left";
        else if (side === "left" && a.left - away - w < 0) side = "right";
      }
      let top, left;
      if (side === "bottom" || side === "top") {
        top = side === "bottom" ? a.bottom + away : a.top - away - h;
        left = align === "start" ? a.left : align === "end" ? a.right - w : a.left + a.width / 2 - w / 2;
        left += along;
      } else {
        left = side === "right" ? a.right + away : a.left - away - w;
        top = align === "start" ? a.top : align === "end" ? a.bottom - h : a.top + a.height / 2 - h / 2;
        top += along;
      }
      left = Math.max(8, Math.min(left, vw - w - 8));
      setPlaced(side);
      setStyle({ position: "fixed", top, left, zIndex, width: useAnchorWidth ? a.width : void 0 });
    }, [anchor, position, offset[0], offset[1], preventFlip, useAnchorWidth, zIndex]);
    React.useLayoutEffect(() => {
      if (!open) return void 0;
      update();
      window.addEventListener("resize", update);
      window.addEventListener("scroll", update, true);
      return () => {
        window.removeEventListener("resize", update);
        window.removeEventListener("scroll", update, true);
      };
    }, [open, update]);
    if (!open || !anchor) return null;
    return ReactDOM.createPortal(
      /* @__PURE__ */ React.createElement("div", { ref, className: cn("alfa-popover", `alfa-popover--${placed}`, popperClassName), style, "data-test-id": dataTestId }, /* @__PURE__ */ React.createElement("div", { className: cn("alfa-popover__content", className) }, children), withArrow && /* @__PURE__ */ React.createElement("span", { className: "alfa-popover__arrow", "aria-hidden": "true" })),
      document.body
    );
  }

  // src/Corp.jsx
  var Corp_exports = {};
  __export(Corp_exports, {
    BackgroundPlate: () => BackgroundPlate,
    ButtonGroup: () => ButtonGroup,
    CorporateSystemMessage: () => CorporateSystemMessage,
    CorporateTopbar: () => CorporateTopbar,
    FAQ: () => FAQ,
    FAQItem: () => FAQItem,
    FilterBar: () => FilterBar,
    HubMenu: () => HubMenu,
    HubMenuGroup: () => HubMenuGroup,
    HubMenuItem: () => HubMenuItem,
    IsleBlock: () => IsleBlock,
    NavigationCardView: () => NavigationCardView,
    OnboardingTooltip: () => OnboardingTooltip,
    OnboardingTooltipNew: () => OnboardingTooltipNew,
    PaymentMaskedNumber: () => PaymentMaskedNumber,
    Pips: () => Pips,
    PropertyPreset: () => PropertyPreset,
    ResultScreenBase: () => ResultScreenBase,
    ResultScreenModal: () => ResultScreenModal,
    StatusPreset: () => StatusPreset,
    TableBulkActions: () => TableBulkActions,
    TableView: () => TableView,
    TitleView: () => TitleView,
    WidgetPlate: () => WidgetPlate
  });
  var ns = () => window.DesignSystem_88b1f8 || {};
  var Btn = (p) => {
    const B = ns().Button;
    return B ? /* @__PURE__ */ React.createElement(B, { ...p }) : /* @__PURE__ */ React.createElement("button", { type: "button", ...p });
  };
  var chevron = (open) => /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", style: { transform: open ? "rotate(180deg)" : "none", transition: "transform .15s ease" } }, /* @__PURE__ */ React.createElement("path", { d: "M12 13.5 6.5 8 5 9.5l7 7 7-7L17.5 8 12 13.5Z" }));
  var glyph = {
    magnifier: "M10.544 3a7.544 7.544 0 104.405 13.67L20.28 22 22 20.28l-5.33-5.33A7.544 7.544 0 0010.544 3zm-5.11 7.544a5.11 5.11 0 1110.221 0 5.11 5.11 0 01-10.221 0z",
    alert: "M11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z",
    lock: "M7 10V8a5 5 0 0110 0v2h1a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1v-9a1 1 0 011-1h1zm2 0h6V8a3 3 0 00-6 0v2z",
    clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z",
    sliders: "M16.663 5.748H21v2.5h-4.332a2.499 2.499 0 01-4.336 0H3v-2.5h9.337a2.499 2.499 0 014.326 0zm4.337 10h-9.335a2.499 2.499 0 00-4.33 0H3v2.5h4.334a2.499 2.499 0 004.332 0H21v-2.5z"
  };
  var G = ({ name, size = 24 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: glyph[name] }));
  function useOutside(open, close) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!open) return void 0;
      const down = (e) => {
        if (ref.current && !ref.current.contains(e.target)) close();
      };
      const key = (e) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("mousedown", down);
      document.addEventListener("keydown", key);
      return () => {
        document.removeEventListener("mousedown", down);
        document.removeEventListener("keydown", key);
      };
    }, [open]);
    return ref;
  }
  var STATUS_HUE = { approved: "green", attention: "orange", error: "red", action: "blue", processing: "indigo", neutral: "grey" };
  function Chip({ hue, view, size, shape, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("span", { className: cn("corp-chip", `corp-chip_${hue}`, `corp-chip_${view}`, `corp-chip_${size}`, `corp-chip_${shape}`, className), ...rest }, children);
  }
  function StatusPreset({ type = "neutral", view = "contrast", size = 24, children, ...rest }) {
    return /* @__PURE__ */ React.createElement(Chip, { hue: STATUS_HUE[type] || "grey", view, size, shape: "rounded", ...rest }, children);
  }
  function PropertyPreset({ color = "grey", view = "contrast", size = 24, children, ...rest }) {
    return /* @__PURE__ */ React.createElement(Chip, { hue: color, view, size, shape: "rect", ...rest }, children);
  }
  function BackgroundPlate({ view = "primary", level = "outer", paddings, backgroundColor = "base-bg-alt", hasHover = false, showSkeleton = false, coloredViewValue, withoutBorder, withBorder, promo = false, dataTestId, className, style, children, ...rest }) {
    if (showSkeleton) return /* @__PURE__ */ React.createElement("div", { className: cn("corp-plate", `corp-plate_${level}`, "corp-skel", className), style: { minHeight: 96, ...style }, "aria-busy": "true", "data-test-id": dataTestId });
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: cn("corp-plate", `corp-plate_${level}`, `corp-plate_${view}`, `corp-plate_on-${backgroundColor}`, promo && "corp-plate_promo", hasHover && "corp-plate_hover", withBorder && "corp-plate_with-border", withoutBorder && "corp-plate_no-border", className),
        style: { ...paddings ? { padding: paddings } : null, ...view === "colored" && coloredViewValue ? { background: coloredViewValue } : null, ...style },
        "data-test-id": dataTestId,
        ...rest
      },
      children
    );
  }
  var SM_TEXT = {
    "server-error": ["\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C", "\u0423\u0436\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438\u043B\u0438 \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u043E\u0437\u0436\u0435"],
    "not-found": ["\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442", "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"],
    forbidden: ["\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0430\u0432", "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0432\u043E\u0435\u043C\u0443 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E"],
    "no-internet": ["\u041F\u043E\u0442\u0435\u0440\u044F\u043B\u0438 \u0441\u0432\u044F\u0437\u044C \u0441 \u0432\u0430\u043C\u0438", "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"],
    "nothing-found": ["\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C", "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0438 \u043F\u043E\u0438\u0441\u043A\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"]
  };
  var SM_ICON = { "server-error": "alert", "not-found": "magnifier", forbidden: "lock", "no-internet": "alert", "nothing-found": "magnifier", "nothing-found-yet": "magnifier", icon: "clock" };
  function CorporateSystemMessage({ view = "base", type, size = "large", title, subtitle, caption, topAddon, topAddonWithoutSuperEllipse = false, useBackgroundPlate = false, backgroundPlateProps, fullHeight = false, primaryButtonProps, secondaryButtonProps, buttonGrow = false, buttonsDirection = "row", bottomAddon, spinnerProps, className, dataTestId }) {
    const Spinner = ns().Spinner;
    const preset = SM_TEXT[type] || [];
    const t = title !== void 0 ? title : preset[0];
    const st = subtitle !== void 0 ? subtitle : preset[1];
    let graphic = topAddon;
    if (graphic === void 0) {
      if (type === "spinner") graphic = Spinner ? /* @__PURE__ */ React.createElement(Spinner, { size: 48, ...spinnerProps }) : null;
      else if (SM_ICON[type]) graphic = /* @__PURE__ */ React.createElement(G, { name: SM_ICON[type], size: 32 });
    }
    const wrapped = graphic && type !== "spinner" && !topAddonWithoutSuperEllipse ? /* @__PURE__ */ React.createElement("span", { className: cn("corp-iconview", view === "error" && "corp-iconview_negative") }, graphic) : graphic;
    const bsize = size === "large" ? 48 : 40;
    const btn = (b, v) => b ? /* @__PURE__ */ React.createElement(Btn, { view: v, size: bsize, block: buttonGrow || void 0, ...b.props }, b.label) : null;
    const body = /* @__PURE__ */ React.createElement("div", { className: cn("corp-sysmsg", `corp-sysmsg_${size}`, fullHeight && "corp-sysmsg_full", !useBackgroundPlate && className), role: view === "error" ? "alert" : "status", "data-test-id": dataTestId }, size === "large" && wrapped ? /* @__PURE__ */ React.createElement("div", { className: "corp-sysmsg__graphic" }, wrapped) : null, t ? /* @__PURE__ */ React.createElement("div", { className: "corp-sysmsg__title" }, t) : null, size === "large" && st ? /* @__PURE__ */ React.createElement("div", { className: "corp-sysmsg__subtitle" }, st) : null, size === "large" && caption ? /* @__PURE__ */ React.createElement("div", { className: "corp-sysmsg__caption" }, caption) : null, primaryButtonProps || secondaryButtonProps ? /* @__PURE__ */ React.createElement("div", { className: cn("corp-sysmsg__buttons", buttonsDirection === "column" && "corp-sysmsg__buttons_col", buttonGrow && "corp-sysmsg__buttons_grow") }, btn(secondaryButtonProps, "secondary"), btn(primaryButtonProps, "primary")) : null, bottomAddon ? /* @__PURE__ */ React.createElement("div", { className: "corp-sysmsg__bottom" }, bottomAddon) : null);
    return useBackgroundPlate ? /* @__PURE__ */ React.createElement(BackgroundPlate, { ...backgroundPlateProps, className: cn("corp-sysmsg-plate", fullHeight && "corp-sysmsg-plate_full", className, backgroundPlateProps && backgroundPlateProps.className) }, body) : body;
  }
  function ResultScreenBase({ mainIcon, title, subtitle, amountProps, amountSubtitleText, actionButtons, hintContent, onClose, hideHeader = false, hasCloser = true, children, className, dataTestId, ...rest }) {
    const Amount = ns().Amount;
    return /* @__PURE__ */ React.createElement("section", { className: cn("corp-result", className), "data-test-id": dataTestId, ...rest }, !hideHeader && hasCloser && onClose ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-result__close", "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon.cross, { width: 24, height: 24 })) : null, /* @__PURE__ */ React.createElement("div", { className: "corp-result__body" }, mainIcon ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__graphic" }, mainIcon) : null, amountProps ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__amount" }, Amount ? /* @__PURE__ */ React.createElement(Amount, { ...amountProps }) : amountProps.value, amountSubtitleText ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__amount-label" }, amountSubtitleText) : null) : null, title ? /* @__PURE__ */ React.createElement("h2", { className: "corp-result__title" }, title) : null, subtitle ? /* @__PURE__ */ React.createElement("p", { className: "corp-result__subtitle" }, subtitle) : null, actionButtons && actionButtons.length ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__actions" }, actionButtons.map((a, i) => /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-action", key: a.key || i, onClick: a.onClick, ...a.additionalProps }, /* @__PURE__ */ React.createElement("span", { className: "corp-action__icon" }, a.icon), /* @__PURE__ */ React.createElement("span", null, a.label)))) : null, hintContent ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__hint" }, hintContent) : null), children ? /* @__PURE__ */ React.createElement("div", { className: "corp-result__footer" }, children) : null);
  }
  var RS_VIEW = { success: ["status-positive", "M20 7.519 9.903 17 5 12.327l1.448-1.503 3.47 3.307L18.569 6 20 7.519Z"], warning: ["status-attention", "M11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z"], error: ["status-negative", "M10.586 12 6 16.5 7.5 18l4.5-4.586L16.5 18l1.5-1.5L13.414 12 18 7.5 16.5 6 12 10.586 7.5 6 6 7.5 10.586 12Z"] };
  function ResultScreenModal({ open = true, view = "success", mainIcon, inline = false, footerProps, onClose, children, ...rest }) {
    React.useEffect(() => {
      if (!open || inline) return void 0;
      const key = (e) => {
        if (e.key === "Escape" && onClose) onClose(e);
      };
      document.addEventListener("keydown", key);
      return () => document.removeEventListener("keydown", key);
    }, [open, inline, onClose]);
    if (!open) return null;
    const v = RS_VIEW[view] || RS_VIEW.success;
    const icon = mainIcon || /* @__PURE__ */ React.createElement("span", { className: "corp-iconview", style: { background: `var(--${v[0]})`, color: "#fff" } }, /* @__PURE__ */ React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: v[1] })));
    const card = /* @__PURE__ */ React.createElement(ResultScreenBase, { mainIcon: icon, onClose, role: inline ? void 0 : "dialog", "aria-modal": inline ? void 0 : true, ...rest }, footerProps && footerProps.children || children);
    return inline ? card : /* @__PURE__ */ React.createElement("div", { className: "corp-result-overlay", onMouseDown: (e) => {
      if (e.target === e.currentTarget && onClose) onClose(e);
    } }, card);
  }
  function ButtonGroup({ elements = [], size = 56, maxVisibleButtons, primaryFirst = false, pickerButtonProps, showSkeleton = false, className, dataTestId }) {
    const [open, setOpen] = React.useState(false);
    const ref = useOutside(open, () => setOpen(false));
    const max = maxVisibleButtons == null ? elements.length : maxVisibleButtons;
    const vis = elements.slice(0, max), hidden = elements.slice(max);
    if (showSkeleton) return /* @__PURE__ */ React.createElement("div", { className: cn("corp-btns", `corp-btns_${size}`, className), "aria-busy": "true" }, vis.map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "corp-skel", style: { width: 128, height: size, borderRadius: 12 } })));
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-btns", `corp-btns_${size}`, className), "data-test-id": dataTestId }, vis.map(({ children, label, ...p }, i) => /* @__PURE__ */ React.createElement(Btn, { key: i, size, view: primaryFirst && !i ? "primary" : "secondary", ...p }, children != null ? children : label)), hidden.length ? /* @__PURE__ */ React.createElement("div", { className: "corp-btns__more", ref }, /* @__PURE__ */ React.createElement(Btn, { view: "secondary", size, "aria-haspopup": "menu", "aria-expanded": open, onClick: () => setOpen(!open) }, pickerButtonProps && pickerButtonProps.label || "\u0415\u0449\u0451"), open ? /* @__PURE__ */ React.createElement("div", { className: "corp-menu", role: "menu" }, hidden.map(({ children, label, onClick, disabled }, i) => /* @__PURE__ */ React.createElement("button", { type: "button", role: "menuitem", className: "corp-menu__item", key: i, disabled, onClick: (e) => {
      setOpen(false);
      if (onClick) onClick(e);
    } }, children != null ? children : label))) : null) : null);
  }
  var TITLE_STATUS = { action: "blue", process: "indigo", warning: "orange", positive: "green", error: "red", info: "grey" };
  function TitleView({ view = "xlarge", tag, children, statusProps, titleStatusProps, subtitle, buttonsGroup = [], rightAddon, titleAddon, maxVisibleButtons, showSkeleton = false, skeletonConfig, className, titleWrapperClassName, titleComponentClassName, dataTestId, ...rest }) {
    const H = tag || { xlarge: "h1", large: "h1", medium: "h2", small: "h3" }[view] || "h2";
    const sk = (slot) => skeletonConfig && skeletonConfig[slot] !== void 0 ? skeletonConfig[slot] : showSkeleton;
    const bsize = { xlarge: 56, large: 48, medium: 40, small: 32 }[view] || 48;
    const elements = buttonsGroup.map((el) => React.isValidElement(el) ? el.props : el);
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-title", `corp-title_${view}`, className), "data-test-id": dataTestId, ...rest }, /* @__PURE__ */ React.createElement("div", { className: "corp-title__main" }, statusProps ? /* @__PURE__ */ React.createElement("div", { className: "corp-title__status" }, sk("status") ? /* @__PURE__ */ React.createElement("span", { className: "corp-skel", style: { display: "block", width: 164, height: 12 } }) : /* @__PURE__ */ React.createElement(StatusPreset, { ...statusProps })) : null, /* @__PURE__ */ React.createElement("div", { className: cn("corp-title__heading", titleWrapperClassName) }, sk("title") ? /* @__PURE__ */ React.createElement("span", { className: "corp-skel corp-title__skel" }) : /* @__PURE__ */ React.createElement(H, { className: cn("corp-title__text", titleComponentClassName) }, children), titleStatusProps && !sk("titleStatus") ? /* @__PURE__ */ React.createElement(PropertyPreset, { color: TITLE_STATUS[titleStatusProps.type] || "grey", view: "muted", size: view === "small" ? 20 : 24 }, titleStatusProps.children || titleStatusProps.label) : null, titleAddon), subtitle && !sk("subtitle") ? /* @__PURE__ */ React.createElement("div", { className: "corp-title__subtitle" }, subtitle) : null, elements.length ? /* @__PURE__ */ React.createElement("div", { className: "corp-title__buttons" }, /* @__PURE__ */ React.createElement(ButtonGroup, { elements, size: bsize, primaryFirst: true, maxVisibleButtons, showSkeleton: sk("buttonsGroup") })) : null), rightAddon ? /* @__PURE__ */ React.createElement("div", { className: "corp-title__right" }, rightAddon) : null);
  }
  function IsleBlock({ type = "static", icon, title, status, children, footer, defaultOpen = true, open: openProp, onOpenChange, systemMessageProps, errorTitle, onRetry, retryLabel = "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C", className, ...rest }) {
    const errProps = { ...errorTitle ? { title: errorTitle } : null, ...onRetry ? { secondaryButtonProps: { label: retryLabel, props: { onClick: onRetry } } } : null, ...systemMessageProps };
    const [inner, setInner] = React.useState(defaultOpen);
    const open = openProp !== void 0 ? openProp : inner;
    const foldable = type === "foldable";
    const toggle = (e) => {
      if (openProp === void 0) setInner(!open);
      if (onOpenChange) onOpenChange(e, { open: !open });
    };
    const head = /* @__PURE__ */ React.createElement(React.Fragment, null, icon ? /* @__PURE__ */ React.createElement("span", { className: "corp-isle__icon" }, icon) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-isle__headtext" }, status ? /* @__PURE__ */ React.createElement("span", { className: "corp-isle__status" }, status) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-isle__title" }, title)), foldable ? /* @__PURE__ */ React.createElement("span", { className: "corp-isle__chevron" }, chevron(open)) : null);
    return /* @__PURE__ */ React.createElement(BackgroundPlate, { className: cn("corp-isle", className), ...rest }, title || icon ? foldable ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-isle__header corp-isle__header_btn", "aria-expanded": open, onClick: toggle }, head) : /* @__PURE__ */ React.createElement("div", { className: "corp-isle__header" }, head) : null, type === "loading" ? /* @__PURE__ */ React.createElement("div", { className: "corp-isle__content", "aria-busy": "true" }, /* @__PURE__ */ React.createElement("div", { className: "corp-skel", style: { height: 20, width: "60%" } }), /* @__PURE__ */ React.createElement("div", { className: "corp-skel", style: { height: 20, width: "40%", marginTop: 12 } })) : type === "error" ? /* @__PURE__ */ React.createElement("div", { className: "corp-isle__content" }, /* @__PURE__ */ React.createElement(CorporateSystemMessage, { view: "error", type: "server-error", size: "small", ...errProps })) : !foldable || open ? /* @__PURE__ */ React.createElement(React.Fragment, null, children ? /* @__PURE__ */ React.createElement("div", { className: "corp-isle__content" }, children) : null, footer ? /* @__PURE__ */ React.createElement("div", { className: "corp-isle__footer" }, footer) : null) : null);
  }
  function WidgetPlate({ title, titleAddon, rightAddon, children, footer, compact = false, state = "default", systemMessageProps, showSkeleton = false, className, containerClassName, contentClassName, dataTestId }) {
    return /* @__PURE__ */ React.createElement(BackgroundPlate, { className: cn("corp-widget", compact && "corp-widget_compact", className), showSkeleton, dataTestId }, state === "error" ? /* @__PURE__ */ React.createElement("div", { className: "corp-widget__error" }, /* @__PURE__ */ React.createElement(CorporateSystemMessage, { view: "error", type: "server-error", size: "small", ...systemMessageProps })) : /* @__PURE__ */ React.createElement("div", { className: cn("corp-widget__container", containerClassName) }, title || rightAddon ? /* @__PURE__ */ React.createElement("div", { className: "corp-widget__header" }, /* @__PURE__ */ React.createElement("span", { className: "corp-widget__head" }, /* @__PURE__ */ React.createElement("span", { className: "corp-widget__title" }, title), titleAddon ? /* @__PURE__ */ React.createElement("span", { className: "corp-widget__title-addon" }, titleAddon) : null), rightAddon ? /* @__PURE__ */ React.createElement("span", { className: "corp-widget__addon" }, rightAddon) : null) : null, /* @__PURE__ */ React.createElement("div", { className: cn("corp-widget__body", contentClassName) }, children), footer ? /* @__PURE__ */ React.createElement("div", { className: "corp-widget__footer" }, footer) : null));
  }
  function TableView({ view = "common", direction = "horizontal", headerCells, rows = [], isFirstColumnCaption = true, hasDividerInLastRows = false, lastColumnAlign = "left", moreLabel = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451", lessLabel = "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C", className, dataTestId }) {
    const [all, setAll] = React.useState(false);
    const hasCollapsed = rows.some((r) => r.collapsed);
    const shown = all ? rows : rows.filter((r) => !r.collapsed);
    const cell = (c, i, n, head) => /* @__PURE__ */ React.createElement("div", { key: c.id, className: cn("corp-tv__cell", isFirstColumnCaption && i === 0 && "corp-tv__cell_caption", head && "corp-tv__cell_head", i === n - 1 && i > 0 && lastColumnAlign === "right" && "corp-tv__cell_right") }, c.graphicAddon ? /* @__PURE__ */ React.createElement("span", { className: "corp-tv__graphic" }, c.graphicAddon) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-tv__content" }, /* @__PURE__ */ React.createElement("span", { className: "corp-tv__title" }, c.titleContent, c.titleAddon ? /* @__PURE__ */ React.createElement("span", { className: "corp-tv__addon" }, c.titleAddon) : null), c.subtitle ? /* @__PURE__ */ React.createElement("span", { className: "corp-tv__caption" }, c.subtitle) : null));
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-tv", `corp-tv_${direction}`, view === "compact" && "corp-tv_compact", hasDividerInLastRows && "corp-tv_last-divider", className), "data-test-id": dataTestId }, headerCells ? /* @__PURE__ */ React.createElement("div", { className: "corp-tv__row corp-tv__row_head" }, headerCells.map((c, i) => cell(c, i, headerCells.length, true))) : null, shown.map((r) => {
      const Tag = r.onClick ? "button" : "div";
      return /* @__PURE__ */ React.createElement(Tag, { key: r.id, className: cn("corp-tv__row", r.onClick && "corp-tv__row_click"), ...r.onClick ? { type: "button", onClick: r.onClick } : {} }, r.cells.map((c, i) => cell(c, i, r.cells.length)));
    }), hasCollapsed ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-link", "aria-expanded": all, onClick: () => setAll(!all) }, all ? lessLabel : moreLabel) : null);
  }
  function CorporateTopbar({ count, isCountMode = true, countModeText = "\u0412\u0441\u0435\u0433\u043E", selectLabelText = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435", onSelectAll, isBulkActions = false, additionalBulkActions, additionalComponent, children, className, dataTestId }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-topbar", className), "data-test-id": dataTestId }, /* @__PURE__ */ React.createElement("div", { className: "corp-topbar__left" }, isCountMode && count != null ? /* @__PURE__ */ React.createElement("span", { className: "corp-topbar__count" }, countModeText, /* @__PURE__ */ React.createElement("b", null, count)) : null, onSelectAll ? /* @__PURE__ */ React.createElement(Btn, { view: "secondary", size: 32, onClick: onSelectAll }, selectLabelText) : null, isBulkActions ? additionalBulkActions : null), additionalComponent || children ? /* @__PURE__ */ React.createElement("div", { className: "corp-topbar__right" }, additionalComponent, children) : null);
  }
  var CUR = { RUR: "\u20BD", RUB: "\u20BD", USD: "$", EUR: "\u20AC", CNY: "\xA5" };
  var fmtMinor = (amount, currency, minorUnits = 100) => {
    const v = amount / minorUnits, neg = v < 0;
    const [int, frac] = Math.abs(v).toFixed(2).split(".");
    return (neg ? "\u2212" : "") + int.replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F") + "," + frac + "\xA0" + (CUR[currency] || currency || "");
  };
  function TableBulkActions({ checkboxProps, count = 0, amounts, actions = [], labelText = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E", amountTitle, showCheckbox = true, showLabel = true, showSelectedBlock = true, open = true, minorUnits = 100, fixed = false, className, dataTestId }) {
    const Checkbox = ns().Checkbox;
    if (!open) return null;
    const totals = {};
    (amounts || []).forEach((a) => {
      totals[a.currency] = (totals[a.currency] || 0) + a.amount;
    });
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-bulk", fixed && "corp-bulk_fixed", className), role: "region", "aria-label": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C\u0438", "data-test-id": dataTestId }, showSelectedBlock ? /* @__PURE__ */ React.createElement("div", { className: "corp-bulk__count" }, showCheckbox && Checkbox ? /* @__PURE__ */ React.createElement(Checkbox, { size: 24, ...checkboxProps }) : null, showLabel ? /* @__PURE__ */ React.createElement("span", { className: "corp-bulk__label" }, labelText) : null, /* @__PURE__ */ React.createElement("b", null, count)) : null, Object.keys(totals).length ? /* @__PURE__ */ React.createElement("div", { className: "corp-bulk__amounts" }, amountTitle ? /* @__PURE__ */ React.createElement("span", { className: "corp-bulk__label" }, amountTitle) : null, Object.keys(totals).map((c) => /* @__PURE__ */ React.createElement("span", { className: "corp-bulk__amount", key: c }, fmtMinor(totals[c], c, minorUnits)))) : null, /* @__PURE__ */ React.createElement("div", { className: "corp-bulk__actions" }, actions.map((a, i) => React.isValidElement(a) ? React.cloneElement(a, { key: a.key != null ? a.key : i }) : null)));
  }
  var optLabel = (o) => o && typeof o === "object" ? o.content != null ? o.content : o.key : o;
  function FilterCell({ cfg, value, onChange, view }) {
    const [open, setOpen] = React.useState(false);
    const ref = useOutside(open, () => setOpen(false));
    const DateRangeInput2 = ns().DateRangeInput;
    const p = cfg.props || {};
    const preset = cfg.preset;
    const isDate = preset === "date";
    const multi = !!p.multiple;
    let shown = null;
    if (preset === "tag") shown = null;
    else if (isDate) shown = value && (typeof value === "string" ? value : [value.from, value.to].filter(Boolean).join("\u202F\u2013\u202F"));
    else if (Array.isArray(value)) shown = value.length ? value.length > 1 ? `${optLabel(value[0])} +${value.length - 1}` : optLabel(value[0]) : null;
    else if (value && typeof value === "object" && ("from" in value || "to" in value)) shown = [value.from, value.to].filter((x) => x != null && x !== "").join("\u202F\u2013\u202F") || null;
    else shown = value ? optLabel(value) : null;
    const on = preset === "tag" ? !!value : !!shown;
    const empty = multi ? [] : isDate ? void 0 : null;
    const label = cfg.label || (isDate ? "\u041F\u0435\u0440\u0438\u043E\u0434" : "");
    const click = () => {
      if (preset === "tag") onChange(!value);
      else setOpen(!open);
    };
    const pick = (o) => {
      if (multi) {
        const cur = Array.isArray(value) ? value : [];
        const has = cur.some((x) => x.key === o.key);
        onChange(has ? cur.filter((x) => x.key !== o.key) : cur.concat(o));
      } else {
        onChange(o);
        setOpen(false);
      }
    };
    return /* @__PURE__ */ React.createElement("span", { className: cn("corp-fcell", `corp-fcell_${view}`, on && "corp-fcell_on"), ref }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-fcell__main", "aria-pressed": preset === "tag" ? !!value : void 0, "aria-haspopup": preset === "tag" ? void 0 : "dialog", "aria-expanded": preset === "tag" ? void 0 : open, onClick: click }, /* @__PURE__ */ React.createElement("span", null, label, on && shown ? /* @__PURE__ */ React.createElement(React.Fragment, null, label ? ": " : "", /* @__PURE__ */ React.createElement("b", null, shown)) : null), preset !== "tag" && !on ? chevron(open) : null), on && preset !== "tag" ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-fcell__clear", "aria-label": `\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C: ${label}`, onClick: () => {
      onChange(empty);
      setOpen(false);
    } }, /* @__PURE__ */ React.createElement(Icon.cross, null)) : null, open && preset !== "tag" ? /* @__PURE__ */ React.createElement("div", { className: "corp-menu corp-fcell__pop", role: "dialog", "aria-label": label }, isDate ? DateRangeInput2 ? /* @__PURE__ */ React.createElement(DateRangeInput2, { label, defaultValue: typeof value === "string" ? value : void 0, onComplete: (pl) => {
      onChange(pl.value);
      setOpen(false);
    } }) : null : (p.options || []).length ? p.options.map((o) => {
      const sel = multi ? Array.isArray(value) && value.some((x) => x.key === o.key) : value && value.key === o.key;
      return /* @__PURE__ */ React.createElement("button", { type: "button", key: o.key, className: cn("corp-menu__item", sel && "corp-menu__item_on"), "aria-pressed": !!sel, disabled: o.disabled, onClick: () => pick(o) }, optLabel(o));
    }) : /* @__PURE__ */ React.createElement("div", { className: "corp-menu__empty" }, "\u041D\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432")) : null);
  }
  function FilterBar({ filters = [], filtersState = {}, onFilterChange, search, onSearchChange, searchProps, visibleFilters, filtersOrder, onResetAll, view = "muted", showConfigure = false, onConfigureClick, showResetAll = true, loading = false, className, dataTestId }) {
    const SearchInput = ns().SearchInput;
    let list = filters.slice();
    if (filtersOrder) list.sort((a, b) => filtersOrder.indexOf(a.id) - filtersOrder.indexOf(b.id));
    if (visibleFilters) list = list.filter((f) => f.pinned || visibleFilters.indexOf(f.id) >= 0);
    const dirty = Object.keys(filtersState).some((k) => {
      const v = filtersState[k];
      return Array.isArray(v) ? v.length : !!v;
    }) || !!search;
    if (loading) return /* @__PURE__ */ React.createElement("div", { className: cn("corp-fbar", className), "aria-busy": "true" }, [300, 118, 100, 137].map((w, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "corp-skel", style: { width: w, height: 48, borderRadius: 10 } })));
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-fbar", `corp-fbar_${view}`, className), role: "search", "data-test-id": dataTestId }, onSearchChange && SearchInput ? /* @__PURE__ */ React.createElement("div", { className: "corp-fbar__search", style: searchProps && searchProps.width ? { flexBasis: searchProps.width } : void 0 }, /* @__PURE__ */ React.createElement(SearchInput, { value: search || "", placeholder: searchProps && searchProps.placeholder || "\u041F\u043E\u0438\u0441\u043A", onChange: (e, pl) => onSearchChange(pl.value), onClear: () => onSearchChange("") })) : null, list.map((f) => /* @__PURE__ */ React.createElement(FilterCell, { key: f.id, cfg: f, view, value: filtersState[f.id], onChange: (v) => onFilterChange && onFilterChange(f.id, v) })), showConfigure ? /* @__PURE__ */ React.createElement("span", { className: cn("corp-fcell", `corp-fcell_${view}`) }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-fcell__main", onClick: onConfigureClick }, /* @__PURE__ */ React.createElement("span", null, "\u0412\u0441\u0435"), /* @__PURE__ */ React.createElement(G, { name: "sliders" }))) : null, showResetAll && onResetAll && dirty ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-fbar__reset", onClick: onResetAll }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0451") : null);
  }
  function NavigationCardView({ title, subtitle, customSubtitle, onClick, rightAddon, rightAddonPosition = "bottom", buttons, statusProps, benefits, disabled = false, clickable, size = "large", customFooterContent, iconViewGroup, loading = false, className, dataTestId }) {
    const isClick = (clickable !== void 0 ? clickable : !!onClick) && !disabled && !(buttons && buttons.length);
    const Tag = isClick ? "button" : "div";
    if (loading) return /* @__PURE__ */ React.createElement("div", { className: cn("corp-navcard", `corp-navcard_${size}`, "corp-skel", className), "aria-busy": "true" });
    const addon = typeof rightAddon === "function" ? rightAddon("corp-navcard__img") : rightAddon;
    return /* @__PURE__ */ React.createElement(Tag, { className: cn("corp-navcard", `corp-navcard_${size}`, disabled && "corp-navcard_disabled", isClick && "corp-navcard_action", className), "aria-disabled": disabled || void 0, "data-test-id": dataTestId, ...isClick ? { type: "button", onClick } : {} }, /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__content" }, statusProps ? /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__property" }, /* @__PURE__ */ React.createElement(PropertyPreset, { size: 20, color: "blue", ...statusProps })) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__text" }, /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__title" }, title), customSubtitle || (subtitle ? /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__subtitle" }, subtitle) : null)), customFooterContent || buttons || benefits || iconViewGroup ? /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__bottom" }, customFooterContent, buttons && !customFooterContent ? buttons.map(({ children, label, ...p }, i) => /* @__PURE__ */ React.createElement(Btn, { key: i, size: size === "large" ? 40 : 32, view: i ? "secondary" : "primary", disabled: disabled || void 0, ...p }, children != null ? children : label)) : null, benefits && !buttons && !customFooterContent ? benefits.map((b, i) => /* @__PURE__ */ React.createElement("span", { className: "corp-navcard__benefit", key: i }, b)) : null, iconViewGroup && !buttons && !benefits && !customFooterContent ? iconViewGroup : null) : null), addon ? /* @__PURE__ */ React.createElement("span", { className: cn("corp-navcard__image", rightAddonPosition === "center" && "corp-navcard__image_center") }, addon) : null);
  }
  function FAQItem({ id, question, answer, onClick, isExpanded = false, border = true }) {
    const uid = "faq-" + id;
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-faq__item", border && "corp-faq__item_border") }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-faq__q", "aria-expanded": isExpanded, "aria-controls": uid, onClick: () => onClick && onClick(id) }, /* @__PURE__ */ React.createElement("span", null, question), chevron(isExpanded)), /* @__PURE__ */ React.createElement("div", { className: "corp-faq__a", id: uid, hidden: !isExpanded }, answer));
  }
  function FAQ({ items = [], hideBorders = false, hideBorderForItems = [], isAccordion = false, preExpanded, onItemClick, promo = false, promoBackground = "base-bg", className, dataTestId }) {
    const [open, setOpen] = React.useState(() => preExpanded == null ? [] : [].concat(preExpanded));
    const click = (id) => {
      const has = open.indexOf(id) >= 0;
      setOpen(has ? open.filter((x) => x !== id) : isAccordion ? [id] : open.concat(id));
      if (onItemClick) onItemClick(id);
    };
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-faq", promo && "corp-faq_promo", promo && `corp-faq_on-${promoBackground}`, className), "data-test-id": dataTestId }, items.map((it) => /* @__PURE__ */ React.createElement(FAQItem, { key: it.id, ...it, isExpanded: open.indexOf(it.id) >= 0, border: !promo && !hideBorders && hideBorderForItems.indexOf(it.id) < 0, onClick: click })));
  }
  function HubMenuItem({ checked = false, checkerMark = false, notificationsCount, isSubItem = false, withDivider = false, rightMenuItemAddon, leftMenuItemIcon, isSkeletonVisible = false, href, onClick, children, className, ...rest }) {
    const Tag = href ? "a" : "button";
    if (isSkeletonVisible) return /* @__PURE__ */ React.createElement("div", { className: cn("corp-hub__row", isSubItem && "corp-hub__row_sub") }, /* @__PURE__ */ React.createElement("span", { className: "corp-skel", style: { display: "block", height: isSubItem ? 20 : 32, margin: 8, flex: 1 } }));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: cn("corp-hub__row", isSubItem && "corp-hub__row_sub", className) }, checked && checkerMark ? /* @__PURE__ */ React.createElement("span", { className: "corp-hub__mark", "aria-hidden": "true" }) : null, /* @__PURE__ */ React.createElement(Tag, { className: cn(isSubItem ? "corp-hub__subitem" : "corp-hub__item", checked && "corp-hub__item_on"), "aria-current": checked ? "page" : void 0, ...href ? { href } : { type: "button" }, onClick, ...rest }, leftMenuItemIcon && !isSubItem ? /* @__PURE__ */ React.createElement("span", { className: "corp-hub__icon" }, leftMenuItemIcon) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-hub__label" }, children), notificationsCount ? /* @__PURE__ */ React.createElement("span", { className: "corp-hub__count" }, notificationsCount > 99 ? "99+" : notificationsCount) : null, rightMenuItemAddon)), withDivider ? /* @__PURE__ */ React.createElement("div", { className: "corp-hub__divider", role: "separator" }) : null);
  }
  function HubMenuGroup({ title, titleNode, onTitleClick, isExpanded, mode = "collapse", rightMenuGroupAddon, leftMenuItemIcon, checked, id, withDivider, children }) {
    const [inner, setInner] = React.useState(!!isExpanded);
    const open = mode === "static" ? true : isExpanded !== void 0 ? isExpanded : inner;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "corp-hub__row" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: cn("corp-hub__item", checked && !open && "corp-hub__item_on"), "aria-expanded": mode === "static" ? void 0 : open, onClick: (e) => {
      if (mode !== "static" && isExpanded === void 0) setInner(!open);
      if (onTitleClick) onTitleClick(e, id, !open);
    } }, leftMenuItemIcon ? /* @__PURE__ */ React.createElement("span", { className: "corp-hub__icon" }, leftMenuItemIcon) : null, /* @__PURE__ */ React.createElement("span", { className: "corp-hub__label" }, titleNode || title), rightMenuGroupAddon, mode === "static" ? null : chevron(open))), open ? /* @__PURE__ */ React.createElement("div", { className: "corp-hub__sub" }, React.Children.map(children, (c) => React.isValidElement(c) ? React.cloneElement(c, { isSubItem: true }) : c)) : null, withDivider ? /* @__PURE__ */ React.createElement("div", { className: "corp-hub__divider", role: "separator" }) : null);
  }
  function HubMenu({ header, footer, children, id, className, style }) {
    return /* @__PURE__ */ React.createElement("nav", { className: cn("corp-hub", !header && "corp-hub_no-header", className), id, style, "aria-label": "\u0420\u0430\u0437\u0434\u0435\u043B\u044B" }, header ? /* @__PURE__ */ React.createElement("div", { className: "corp-hub__header" }, header) : null, /* @__PURE__ */ React.createElement("div", { className: "corp-hub__body" }, children), footer ? /* @__PURE__ */ React.createElement("div", { className: "corp-hub__footer" }, footer) : null);
  }
  function Pips({ totalSlides = 0, currentSlide = 0, onClick, className }) {
    return /* @__PURE__ */ React.createElement("div", { className: cn("corp-onb__pips", className), role: "group", "aria-label": `\u0428\u0430\u0433 ${currentSlide + 1} \u0438\u0437 ${totalSlides}` }, Array.from({ length: totalSlides }, (_, i) => onClick ? /* @__PURE__ */ React.createElement("button", { type: "button", key: i, "aria-label": `\u0428\u0430\u0433 ${i + 1}`, "aria-current": i === currentSlide || void 0, className: i === currentSlide ? "on" : void 0, onClick: () => onClick(i) }) : /* @__PURE__ */ React.createElement("i", { key: i, className: i === currentSlide ? "on" : void 0 })));
  }
  function OnboardingTooltip({ children, visible = true, subhead, title, description, totalSlides, currentSlide = 0, nextButtonText, prevButtonText = "\u041D\u0430\u0437\u0430\u0434", onClickNext, onClickPrev, onClickPips, onClose, position = "right", primaryButtonView = "primary", onboardingItemChildren, imageSrc, alt = "", width = 460, className }) {
    const last = totalSlides ? currentSlide >= totalSlides - 1 : true;
    const tail = { right: "left", left: "right", bottom: "up", top: "down" }[position.split("-")[0]] || "left";
    const tip = visible ? /* @__PURE__ */ React.createElement("div", { className: cn("corp-onb", `corp-onb_tail-${tail}`, "corp-onb_at-start", children && `corp-onb_pos-${position.split("-")[0]}`, className), role: "dialog", "aria-label": typeof title === "string" ? title : void 0, style: { width } }, /* @__PURE__ */ React.createElement("span", { className: "corp-onb__tail", "aria-hidden": "true" }), imageSrc ? /* @__PURE__ */ React.createElement("img", { className: "corp-onb__image", src: imageSrc, alt }) : null, /* @__PURE__ */ React.createElement("div", { className: "corp-onb__top" }, /* @__PURE__ */ React.createElement("div", { className: "corp-onb__text" }, subhead ? /* @__PURE__ */ React.createElement("div", { className: "corp-onb__subhead" }, subhead) : null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "corp-onb__title" }, title), description ? /* @__PURE__ */ React.createElement("div", { className: "corp-onb__body" }, description) : null, onboardingItemChildren)), onClose ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "corp-onb__close", "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", onClick: (e) => onClose(e, "cross") }, /* @__PURE__ */ React.createElement(Icon.cross, { width: 24, height: 24 })) : null), /* @__PURE__ */ React.createElement("div", { className: "corp-onb__footer" }, totalSlides > 1 ? /* @__PURE__ */ React.createElement(Pips, { totalSlides, currentSlide, onClick: onClickPips }) : /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("div", { className: "corp-onb__btns" }, onClickPrev && currentSlide > 0 ? /* @__PURE__ */ React.createElement(Btn, { view: "secondary", size: 40, onClick: onClickPrev }, prevButtonText) : null, /* @__PURE__ */ React.createElement(Btn, { view: primaryButtonView, size: 40, onClick: (e) => {
      if (last && onClose && !onClickNext) onClose(e, "next");
      else if (onClickNext) onClickNext(e);
    } }, nextButtonText || (last ? "\u041F\u043E\u043D\u044F\u0442\u043D\u043E" : "\u0414\u0430\u043B\u0435\u0435"))))) : null;
    if (!children) return tip;
    return /* @__PURE__ */ React.createElement("span", { className: "corp-onb-anchor" }, /* @__PURE__ */ React.createElement("span", { className: cn("corp-onb-target", visible && "corp-onb-target_on") }, children), tip);
  }
  var mask = (num, m) => {
    let i = 0, out = "";
    for (const ch of m) {
      if (i >= num.length) break;
      out += ch === "x" ? num[i++] : "\xA0";
    }
    return out + num.slice(i);
  };
  function PaymentMaskedNumber({ type = "account", hideNumber = false, number, rightAddon, className, ...rest }) {
    const d = String(number || "").replace(/\D/g, "");
    const text = hideNumber ? "\xB7\xB7\u2009" + d.slice(-4) : mask(d, type === "account" ? "xxxxx xxx x xxxx xxxxxxx" : "xxxx xxxx xxxx xxxx");
    return /* @__PURE__ */ React.createElement("span", { className: cn("corp-accnum", className), "aria-label": hideNumber ? `${type === "card" ? "\u041A\u0430\u0440\u0442\u0430" : "\u0421\u0447\u0451\u0442"}, \u043E\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 ${d.slice(-4)}` : void 0, ...rest }, text, rightAddon ? /* @__PURE__ */ React.createElement("span", { className: "corp-accnum__addon" }, rightAddon) : null);
  }
  var OnboardingTooltipNew = OnboardingTooltip;

  // src/DateInputs.jsx
  function useMasked(valueProp, defaultValue, mask2) {
    const [inner, setInner] = React.useState(defaultValue || "");
    const value = valueProp != null ? valueProp : inner;
    const set = (v) => {
      if (valueProp == null) setInner(v);
    };
    return [value, (raw) => {
      const v = mask2(raw);
      set(v);
      return v;
    }, set];
  }
  function DateInput({ label = "\u0414\u0430\u0442\u0430", placeholder = "\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413", value: valueProp, defaultValue, onChange, onComplete, onFocus, onBlur, hint, error, disabled, block, rightAddons, className, inputRef, ...rest }) {
    const [focused, setFocused] = React.useState(false);
    const [value, apply] = useMasked(valueProp, defaultValue, maskDate);
    const handle = (e) => {
      const v = apply(e.target.value);
      const date = parseDate(v);
      if (onChange) onChange(e, { date, value: v });
      if (v.length === 10 && !isNaN(date) && onComplete) onComplete(e, { date, value: v });
    };
    return /* @__PURE__ */ React.createElement(FieldShell, { label, hint, error, disabled, focused, block, rightAddons: rightAddons || Icon.calendar({ className: "alfa-dfield__icon" }), className }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: inputRef,
        className: "alfa-dfield__input",
        inputMode: "numeric",
        autoComplete: "off",
        placeholder,
        value,
        maxLength: 10,
        disabled,
        "aria-invalid": !!error,
        ...rest,
        onFocus: (e) => {
          setFocused(true);
          if (onFocus) onFocus(e);
        },
        onBlur: (e) => {
          setFocused(false);
          if (onBlur) onBlur(e);
        },
        onChange: handle
      }
    ));
  }
  function DateRangeInput({ label = "\u041F\u0435\u0440\u0438\u043E\u0434", placeholder = "\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413 \u2013 \u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413", value: valueProp, defaultValue, onChange, onComplete, hint, error, disabled, block, className, ...rest }) {
    const [focused, setFocused] = React.useState(false);
    const mask2 = (raw) => {
      const d = digits(raw).slice(0, 16);
      const a = maskDate(d.slice(0, 8));
      return d.length > 8 ? `${a}\u202F\u2013\u202F${maskDate(d.slice(8))}` : a;
    };
    const [value, apply] = useMasked(valueProp, defaultValue, mask2);
    const handle = (e) => {
      const v = apply(e.target.value);
      const [a, b] = v.split("\u202F\u2013\u202F");
      const dateFrom = a && a.length === 10 && !isNaN(parseDate(a)) ? parseDate(a) : void 0;
      const dateTo = b && b.length === 10 && !isNaN(parseDate(b)) ? parseDate(b) : void 0;
      if (onChange) onChange({ dateFrom, dateTo, value: v }, e);
      if (dateFrom && dateTo && onComplete) onComplete({ dateFrom, dateTo, value: v }, e);
    };
    return /* @__PURE__ */ React.createElement(FieldShell, { label, hint, error, disabled, focused, block, rightAddons: Icon.calendar({ className: "alfa-dfield__icon" }), className }, /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "alfa-dfield__input",
        inputMode: "numeric",
        autoComplete: "off",
        placeholder,
        value,
        disabled,
        "aria-invalid": !!error,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        onChange: handle,
        ...rest
      }
    ));
  }
  function TimeInput({ label = "\u0412\u0440\u0435\u043C\u044F", placeholder = "\u0427\u0427:\u041C\u041C", value: valueProp, defaultValue, onChange, onComplete, hint, error, disabled, block, className, ...rest }) {
    const [focused, setFocused] = React.useState(false);
    const [value, apply] = useMasked(valueProp, defaultValue, maskTime);
    const handle = (e) => {
      const v = apply(e.target.value);
      const [h, m] = v.split(":");
      const hours = h ? Number(h) : NaN, mins = m && m.length === 2 ? Number(m) : NaN;
      if (onChange) onChange(e, { hours, mins, value: v });
      if (v.length === 5 && hours < 24 && mins < 60 && onComplete) onComplete(e, { hours, mins, value: v });
    };
    return /* @__PURE__ */ React.createElement(FieldShell, { label, hint, error, disabled, focused, block, className }, /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "alfa-dfield__input",
        inputMode: "numeric",
        autoComplete: "off",
        placeholder,
        value,
        maxLength: 5,
        disabled,
        "aria-invalid": !!error,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        onChange: handle,
        ...rest
      }
    ));
  }
  function CalendarInput({ value: valueProp, defaultValue, onChange, onInputChange, onCalendarChange, minDate, maxDate, calendarPosition = "popover", defaultOpen = false, label = "\u0414\u0430\u0442\u0430", ...rest }) {
    const [inner, setInner] = React.useState(defaultValue || "");
    const value = valueProp != null ? valueProp : inner;
    const [open, setOpen] = React.useState(defaultOpen);
    const wrap = React.useRef(null);
    const Calendar = (window.DesignSystem_88b1f8 || {}).Calendar;
    const date = parseDate(value);
    React.useEffect(() => {
      if (!open || calendarPosition !== "popover") return void 0;
      const close = (e) => {
        if (wrap.current && wrap.current.contains(e.target)) return;
        if (e.target.closest && e.target.closest(".alfa-calendar-popover")) return;
        setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, [open, calendarPosition]);
    const set = (v) => {
      if (valueProp == null) setInner(v);
    };
    const calendar = Calendar ? /* @__PURE__ */ React.createElement(
      Calendar,
      {
        value: isNaN(date) ? void 0 : date.getTime(),
        minDate,
        maxDate,
        onChange: (e, payload) => {
          const v = formatDate(payload.date || new Date(payload.value));
          set(v);
          if (onCalendarChange) onCalendarChange(e, payload);
          if (onChange) onChange(e, { date: parseDate(v), value: v });
          setOpen(false);
        }
      }
    ) : /* @__PURE__ */ React.createElement("div", { className: "alfa-calendar-missing" }, "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 _ds_bundle.js \u2014 Calendar \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    return /* @__PURE__ */ React.createElement("div", { ref: wrap, className: cn("alfa-calendar-input", rest.block && "alfa-calendar-input--block") }, /* @__PURE__ */ React.createElement(
      DateInput,
      {
        ...rest,
        label,
        value,
        onFocus: () => setOpen(true),
        rightAddons: /* @__PURE__ */ React.createElement("button", { type: "button", className: "alfa-dfield__iconbtn", "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C", onClick: () => setOpen((o) => !o) }, Icon.calendar({})),
        onChange: (e, payload) => {
          set(payload.value);
          if (onInputChange) onInputChange(e, payload);
          if (onChange) onChange(e, payload);
        }
      }
    ), calendarPosition === "static" ? /* @__PURE__ */ React.createElement("div", { className: "alfa-calendar-static" }, calendar) : /* @__PURE__ */ React.createElement(Popover, { open, anchorElement: wrap, position: "bottom-start", offset: [0, 8] }, /* @__PURE__ */ React.createElement("div", { className: "alfa-calendar-popover" }, calendar)));
  }

  // src/index.jsx
  var ns2 = window.DesignSystem_88b1f8 = window.DesignSystem_88b1f8 || {};
  Object.assign(ns2, { Alert, List, PureCell, Steps, Pagination, Popover, DateInput, DateRangeInput, TimeInput, CalendarInput }, Corp_exports);
})();
