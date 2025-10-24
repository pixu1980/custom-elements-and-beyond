// Customized built-in: <ul is="sortable-list">
// Extends: HTMLUListElement
// Adds a Sort button before the list and provides alphabetical sort of <li>

if (!customElements.get("sortable-list")) {
	class SortableList extends HTMLUListElement {
		connectedCallback() {
			this.setAttribute("role", "list");
			const sortButton = document.createElement("button");
			sortButton.type = "button";
			sortButton.textContent = "Sort";
			sortButton.onclick = () => this.sort();
			this.before(sortButton);
		}
		sort() {
			const items = Array.from(this.children);
			items.sort((a, b) => a.textContent.localeCompare(b.textContent));
			this.append(...items);
		}
	}
	try {
		customElements.define("sortable-list", SortableList, { extends: "ul" });
	} catch (e) {
		console.warn(
			"[sortable-list] Customized built-ins not supported in this browser.",
			e,
		);
	}
}
