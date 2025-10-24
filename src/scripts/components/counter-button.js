// Customized built-in: <button is="counter-button">
// Extends: HTMLButtonElement
// Simple counter on click with accessible text update

if (!customElements.get('counter-button')) {
  class CounterButton extends HTMLButtonElement {
    constructor() {
      super();
      this.count = 0;
    }

    connectedCallback() {
      this.addEventListener('click', this.handleClick);
    }

    disconnectedCallback() {
      this.removeEventListener('click', this.handleClick);
    }

    handleClick = () => {
      this.count++;
      this.updateText();
    };

    updateText() {
      this.textContent = `Clicked ${this.count} times`;
      this.setAttribute('aria-live', 'polite');
    }
  }

  try {
    customElements.define('counter-button', CounterButton, {
      extends: 'button',
    });
  } catch (e) {
    console.warn('[counter-button] Customized built-ins not supported in this browser.', e);
  }
}
