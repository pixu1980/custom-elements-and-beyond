// Customized built-in: <img is="smart-img">
// Extends: HTMLImageElement
// Adds lazy loading by default and optional fallback via data-fallback on error.
// The data-fallback can be:
// - a regular URL
// - a data URL (data:...)
// - a raw base64 string (we will prefix it as data:image/png;base64,)
// If the fallback also fails or is missing, a default inline SVG missing-image icon is used.

if (!customElements.get('smart-img')) {
  class SmartImg extends HTMLImageElement {
    connectedCallback() {
      if (!this.hasAttribute('loading')) this.setAttribute('loading', 'lazy');

      const DEFAULT_MISSING_ICON =
        'data:image/svg+xml;charset=utf-8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="0.75" y="0.75" width="22.5" height="16.5" rx="2.25" ry="2.25"/><path d="M6 11l3-3 4 4 2-2 3 3"/><circle cx="7.5" cy="6.5" r="1.25"/></svg>`,
        );

      const rawFallback = this.getAttribute('data-fallback');
      const normalizeFallback = (value) => {
        if (!value) return null;
        const trimmed = value.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith('data:')) return trimmed; // already a data URL
        // Heuristic: treat as base64 if only base64 chars and reasonably long
        const b64 = trimmed.replace(/\s+/g, '');
        const base64Re = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
        if (b64.length > 32 && base64Re.test(b64)) {
          return `data:image/png;base64,${b64}`;
        }
        return trimmed; // assume it is a normal URL
      };

      const fallback = normalizeFallback(rawFallback);

      this.addEventListener('error', () => {
        // First error: try fallback if available (once)
        if (fallback && !this.dataset.fallbackTried) {
          this.dataset.fallbackTried = '1';
          if (this.src !== fallback) this.src = fallback;
          return;
        }
        // Second error or no fallback: set default missing icon (once)
        if (!this.dataset.missingIconApplied) {
          this.dataset.missingIconApplied = '1';
          if (this.src !== DEFAULT_MISSING_ICON) this.src = DEFAULT_MISSING_ICON;
        }
      });
    }
  }

  customElements.define('smart-img', SmartImg, { extends: 'img' });
}
