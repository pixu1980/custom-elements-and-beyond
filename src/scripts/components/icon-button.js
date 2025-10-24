// Customized built-in: <button is="icon-button">
// Extends: HTMLButtonElement
// Semantics: button (inherits native semantics and keyboard behavior)

if (!customElements.get('icon-button')) {
  class IconButton extends HTMLButtonElement {
    connectedCallback() {
      const icon = this.getAttribute('icon') ?? '';
      const text = this.textContent;
      this.innerHTML = `
        <span class="icon">${icon}</span>
        ${text}
      `;
    }
  }

  customElements.define('icon-button', IconButton, { extends: 'button' });
}
