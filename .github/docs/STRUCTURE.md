# customElements & beyond: a lean way to build reactive apps in vanillaJS — Talk Structure (Pixu‑style)

> Duration: **45 min (incl. Q&A)** · Audience: **Intermediate Frontend** · Format: **Standard Talk**

---

## 🧭 Flow at a Glance (Timing)
- **00:00–03:00 · Hook & Thesis**
- **03:00–08:00 · The Lean Web Mindset**
- **08:00–16:00 · Custom Elements (Customized Built‑ins)**
- **16:00–24:00 · Reactivity: Observables & Signals (no framework)**
- **24:00–31:00 · Styling at Scale: Constructable Stylesheets & CSS Architecture**
- **31:00–37:00 · Progressive Enhancements & Native APIs**
- **37:00–42:00 · Mini Demos (Live) + A11y Checks**
- **42:00–45:00 · Q&A + Takeaways**

[MEME_PLACEHOLDER: "You don’t need a framework to ship" — parody of a package‑install progress bar stuck at 99%]

---

## 🎯 Goals
- Show how **customized built‑in elements** + **tiny reactive primitives** can build real apps.
- Keep it **framework‑agnostic**, **a11y‑first**, **fast to reason about**.
- Provide **copy‑pasteable** code you can bring to your product today.

[PHOTO_PLACEHOLDER: Speaker on stage / event branding]

---

## 1) Cold Open — The Premise (00:00–03:00)
- Story: The myth — “no framework ⇒ no app”.
- Reveal thesis: **Browsers already ship the batteries.**
- Quick demo preview: buttons that count, filters that re‑render lists, a basic router.

[MEME_PLACEHOLDER: Queen‑style title card “Baseline Rhapsody” with vanillaJS logos as instruments]

Speaker notes: Energy high, set expectations for **no Shadow DOM**, **no <template>**, **use of `is="…"`**.

---

## 2) The Lean Web Mindset (03:00–08:00)
- Principles: **Less deps**, **More standards**, **Measure first**, **Ship progressively**.
- Constraints we embrace for this talk:
  - **No Shadow DOM**.
  - **No <template>**.
  - **Only customized built‑ins**: `customElements.define('x-thing', Class, { extends: 'button' })` + `is="x-thing"` in markup.
- Impact on DevX: fewer abstractions, easier handoff, better a11y by default.

[MEME_PLACEHOLDER: “What if I told you… HTML is already a component model” (Matrix Morpheus parody)]

---

## 3) Customized Built‑ins 101 (08:00–12:00)
**Why customized built‑ins?**
- Reuse native semantics (button, a, input, details…).
- Automatic accessibility hooks (roles, focus, keyboard) with small additions.
- Zero custom tags in CSS specificity fights.

**Example: A Counter Button**
```html
<!-- Usage: native button + is -->
<button is="x-counter" value="0"></button>
```
```js
class XCounter extends HTMLButtonElement {
  constructor() {
    super();
    this._value = Number(this.getAttribute('value') ?? 0);
    this.addEventListener('click', () => this.setValue(this._value + 1));
  }
  connectedCallback() {
    this.setAttribute('aria-live', 'polite');
    this.setAttribute('type', this.getAttribute('type') || 'button');
    this.render();
  }
  setValue(v){ this._value = v; this.setAttribute('value', String(v)); this.render(); }
  render(){ this.textContent = `Count: ${this._value}`; }
}
customElements.define('x-counter', XCounter, { extends: 'button' });
```

A11y note: live region for dynamic text; preserves **Button** semantics.

[MEME_PLACEHOLDER: “One does not simply re‑invent <button>” (Boromir)]

---

## 4) Lifecycles & Composition Patterns (12:00–16:00)
- Hooks available: `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`, `adoptedCallback`.
- Composition without Shadow DOM: **data‑attributes**, **closest()**, **delegation**.

**Example: A Toggle Button controlling a region (ARIA)**
```html
<button is="x-toggle" aria-controls="panel-1" aria-expanded="false">Toggle</button>
<section id="panel-1" hidden>
  <p>Peek‑a‑boo!</p>
</section>
```
```js
class XToggle extends HTMLButtonElement {
  static get observedAttributes(){ return ['aria-expanded']; }
  constructor(){ super(); this.addEventListener('click', () => this.toggle()); }
  connectedCallback(){ this.setAttribute('type', 'button'); this.sync(); }
  attributeChangedCallback(){ this.sync(); }
  toggle(){ this.setAttribute('aria-expanded', this.expanded ? 'false' : 'true'); }
  get expanded(){ return this.getAttribute('aria-expanded') === 'true'; }
  sync(){
    const region = document.getElementById(this.getAttribute('aria-controls'));
    if (!region) return;
    region.hidden = !this.expanded;
  }
}
customElements.define('x-toggle', XToggle, { extends: 'button' });
```
A11y: `aria-controls`, `aria-expanded`, and `hidden` state.

[PHOTO_PLACEHOLDER: demo screenshot]

---

## 5) Reactivity Without a Framework (16:00–24:00)
### 5.1 Minimal Observable (EventTarget‑based)
```js
function observable(initial){
  let value = initial;
  const et = new EventTarget();
  return {
    get value(){ return value; },
    set value(v){ value = v; et.dispatchEvent(new Event('change')); },
    subscribe(fn){
      const h = () => fn(value);
      et.addEventListener('change', h);
      fn(value);
      return () => et.removeEventListener('change', h);
    }
  };
}
```

### 5.2 Tiny Signal Primitive
```js
function Signal(initial){
  let v = initial; const subs = new Set();
  return {
    get(){ return v; },
    set(nv){ v = nv; subs.forEach(f => f(v)); },
    subscribe(fn){ subs.add(fn); fn(v); return () => subs.delete(fn); }
  };
}
```

### 5.3 Bind HTML to Signals (No Shadow, No Template)
```html
<div data-bind-text="count"></div>
<button is="x-inc">+1</button>
<button is="x-dec">-1</button>
```
```js
const state = { count: Signal(0) };

function bindText(el, key){
  return state[key].subscribe(v => { el.textContent = String(v); });
}

// Auto-bind by data attribute
document.querySelectorAll('[data-bind-text]').forEach(el => bindText(el, el.dataset.bindText));

class XInc extends HTMLButtonElement { constructor(){ super(); this.addEventListener('click', () => state.count.set(state.count.get()+1)); } }
class XDec extends HTMLButtonElement { constructor(){ super(); this.addEventListener('click', () => state.count.set(state.count.get()-1)); } }
customElements.define('x-inc', XInc, { extends: 'button' });
customElements.define('x-dec', XDec, { extends: 'button' });
```

[MEME_PLACEHOLDER: “Reactivity? Where we’re going we don’t need frameworks.” (Back to the Future)]

---

## 6) Styling at Scale w/ Constructable Stylesheets (24:00–31:00)
- Use **CSSStyleSheet** + `document.adoptedStyleSheets` (works document‑wide, no Shadow DOM required).
- Coexist with existing CSS: `@layer`, `:where()`, attribute gates.

**Example: One Sheet to Rule Them All**
```js
const ui = new CSSStyleSheet();
ui.replaceSync(`
@layer components {
  :where(button[is="x-counter"]) { border: 0; padding: .6rem .9rem; border-radius: .6rem; }
  :where(button[is="x-inc"], button[is="x-dec"]) { font: inherit; padding: .5rem .8rem; }
  [data-bind-text="count"] { font-weight: 700; font-size: 1.25rem; }
}
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, ui];
```

**Optional niceties (progressive):** `@scope`, `:has()`, `:focus-visible`, `prefers-reduced-motion`.

[MEME_PLACEHOLDER: “CSS Layers Assemble!” (Avengers assemble parody)]

---

## 7) Progressive Enhancements & Native APIs (31:00–37:00)
- **Form behaviors**: constraint validation + tiny CE helpers.
- **History API mini-router** with a customized link.
- **Popover API** for menus/tooltips (fallbacks if unsupported).

### 7.1 Validating Inputs
```html
<input is="x-number" type="number" min="0" max="10" required>
```
```js
class XNumber extends HTMLInputElement {
  constructor(){ super(); this.addEventListener('input', () => this.reportValidity()); }
  connectedCallback(){ this.addEventListener('invalid', () => this.setAttribute('aria-invalid','true')); }
}
customElements.define('x-number', XNumber, { extends: 'input' });
```

### 7.2 Router‑ish Links
```html
<nav>
  <a is="x-nav" href="/home">Home</a>
  <a is="x-nav" href="/settings">Settings</a>
</nav>
<main id="view"></main>
```
```js
const routes = {
  '/home': () => '<h2>Home</h2><p>Welcome!</p>',
  '/settings': () => '<h2>Settings</h2><p>Be nice to your CSS.</p>'
};
function render(){
  const html = routes[location.pathname] ? routes[location.pathname]() : '<h2>404</h2>';
  document.getElementById('view').innerHTML = html;
}
addEventListener('popstate', render);
render();

class XNav extends HTMLAnchorElement {
  constructor(){ super(); this.addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState({}, '', this.getAttribute('href'));
    render();
  }); }
}
customElements.define('x-nav', XNav, { extends: 'a' });
```

### 7.3 Popover Menu (progressive)
```html
<button is="x-menu" popovertarget="nav-pop">Menu</button>
<nav id="nav-pop" popover>
  <a is="x-nav" href="/home">Home</a>
  <a is="x-nav" href="/settings">Settings</a>
</nav>
```
```js
class XMenu extends HTMLButtonElement { constructor(){ super(); this.addEventListener('click', () => {
  const id = this.getAttribute('popovertarget');
  const el = document.getElementById(id);
  if (el?.togglePopover) el.togglePopover();
}); }}
customElements.define('x-menu', XMenu, { extends: 'button' });
```
A11y: native semantics for `button`, `nav`, and focus trapping not required for popovers (non‑modal), but mind keyboard and dismissal.

[MEME_PLACEHOLDER: “It’s dangerous to go alone! Take this <a>.” (8‑bit Zelda parody)]

---

## 8) Mini Demos + A11y Checklist (37:00–42:00)
**Demo 1**: Counter + Inc/Dec + Live Value (announced)
- Verify: `Tab` order, `Enter/Space`, `aria-live` works.

**Demo 2**: Toggle Section
- Verify: `aria-expanded`, `hidden` toggling, `Esc` if you add key handling.

**Demo 3**: Router + Popover Menu
- Verify: Focus is preserved after navigation, skip links, 404 route.

**A11y Quicklist**
- Use real elements (button, a, input).
- Label all controls; ensure hit target sizes.
- Respect reduced motion; use `:focus-visible`.
- Contrast and `prefers-color-scheme` friendly.

[PHOTO_PLACEHOLDER: Lighthouse/Axe short report screengrab]

---

## 9) Performance & DX Tips (sprinkled throughout)
- Measure: **PerformanceObserver**, **User‑Timing**, **DevTools coverage**.
- Avoid heavy state libs; signals/observables above handle 90%.
- Keep CSS in **@layer components** via one constructable sheet.
- Start islands: sprinkle CEs where they matter, keep HTML declarative.

[MEME_PLACEHOLDER: “Ship it!” release button with confetti]

---

## 10) Slide‑by‑Slide Beat Sheet (Draft)
1. Title — **customElements & beyond**  
   [MEME: Queen cover parody “Vanilla Rhapsody”]
2. Thesis: **Lean ≠ Barebones**  
   [MEME: “More with less” LEGO minimal build]
3. Constraint card — no Shadow DOM, no <template>, only `is`  
   [Meme caption overlay]
4. Customized built‑ins: why they rock  
5. Counter Button code (short)  
6. A11y callouts for buttons (aria‑live)  
7. Toggle example (expanded/controls/hidden)  
8. Composition patterns without shadow  
9. Observable: 8‑line primitive  
10. Signal: 6‑line primitive  
11. Bind UI via data‑attributes  
12. Inc/Dec buttons as CEs  
13. Constructable Stylesheet snippet  
14. CSS Layers and gates (`:where([is="x-…"])`)  
15. Router‑ish links (History API)  
16. Popover API menu  
17. Perf notes (coverage + PO)  
18. A11y checklist (keyboard, focus, labels)  
19. Demo time (live #1)  
20. Demo time (live #2)  
21. Demo time (live #3)  
22. Progressive enhancement matrix (support notes)  
23. Real‑world integration tips (design systems)  
24. Takeaways (3 bullets)  
25. Q&A slide (links + repo gist)  

---

## 11) Exercise Seeds (for workshops / follow‑ups)
- **x-filter (extends input[type="search"])** filtering a list via Signal.
- **x-save (extends button)** that persists state to `localStorage`.
- **x-theme (extends button)** toggling color‑scheme and storing preference.

**Seed: x-theme**
```html
<button is="x-theme" aria-pressed="false">Toggle Theme</button>
```
```js
class XTheme extends HTMLButtonElement {
  constructor(){ super(); this.addEventListener('click', () => this.toggle()); }
  connectedCallback(){ this.setAttribute('type','button'); this.sync(); }
  toggle(){
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    this.setAttribute('aria-pressed', String(dark));
  }
  sync(){
    const pref = localStorage.getItem('theme');
    const dark = pref ? pref === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
    this.setAttribute('aria-pressed', String(dark));
  }
}
customElements.define('x-theme', XTheme, { extends: 'button' });
```

---

## 12) Risks, Gotchas, and How to Communicate Them
- **Customized built‑ins support**: ensure you ship **progressive enhancement** and guard server‑rendered HTML accordingly.
- **CSR/SSR**: hydrate by upgrading elements after DOM ready; keep HTML usable pre‑upgrade.
- **A11y is explicit**: use platform semantics; add ARIA only when needed.

[MEME_PLACEHOLDER: “With great power comes great responsibility (for semantics)”]

---

## 13) Final Takeaways (Slide)
- **HTML is your component model**; **CEs = upgrades**, not reinventions.
- **Tiny signals/observables** replace bulky state managers for most UIs.
- **Constructable stylesheets** + **CSS layers** keep CSS tidy and fast.
- **Measure & iterate**; ship **progressively** and **accessibly**.

[PHOTO_PLACEHOLDER: Thank‑you + socials]

---

## 14) Appendix (Paste‑ready Snippets)
### Upgrade Helpers
```js
// Upgrade all CE usages by is="…" once DOM is ready
if (document.readyState !== 'loading') upgrade(); else addEventListener('DOMContentLoaded', upgrade);
function upgrade(){ /* intentionally empty: CE definitions auto‑upgrade when defined */ }
```

### Attribute Utils
```js
const boolAttr = (el, name, v) => v ? el.setAttribute(name,'') : el.removeAttribute(name);
```

### Perf Probe
```js
performance.mark('render-start');
// ...work
performance.mark('render-end');
performance.measure('render', 'render-start', 'render-end');
console.log(performance.getEntriesByName('render')[0].duration.toFixed(2),'ms');
```

---

### Meme & Visual Rhythm Guide
- Use **Queen/rock‑era** intros for chapter breaks (brand‑safe parodies).
- **Progress bar** jokes when contrasting npm marathon vs native APIs.
- **Matrix/Morpheus** for “HTML is a component model”.
- **Avengers assemble** for CSS Layers section.
- **8‑bit Zelda** for links/router slide.
- **Ship it** confetti for perf wrap.

[PHOTO_PLACEHOLDER: collage panel spots for event photos]

---

### Notes for Reveal.js Build (Later)
- Keep code font large; no slide exceeds ~12 lines of code.
- Color‑blind‑safe palette; ensure 4.5:1 contrast.
- Provide a **demo.html** that works offline; no bundlers needed.
- Keyboard map: `Space` advances; live demos ready in iframes.

