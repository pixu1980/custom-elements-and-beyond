// Customized built-in: <ul is="sortable-list">
// Extends: HTMLUListElement
// Adds a simple Sort button before the list that sorts items alphabetically

if (!customElements.get('sortable-list')) {
  class SortableList extends HTMLUListElement {
    connectedCallback() {
      this.setAttribute('role', 'list');

      // Avoid inserting multiple buttons if reconnected
      if (!this.previousElementSibling || this.previousElementSibling.tagName !== 'BUTTON') {
        const sortButton = document.createElement('button');
        sortButton.type = 'button';
        sortButton.textContent = 'Sort';
        sortButton.addEventListener('click', () => this.sort());
        this.before(sortButton);
      }
    }

    sort() {
      const items = Array.from(this.children);
      items.sort((a, b) => (a.textContent || '').localeCompare(b.textContent || ''));
      this.append(...items);
    }
  }

  customElements.define('sortable-list', SortableList, { extends: 'ul' });
}
