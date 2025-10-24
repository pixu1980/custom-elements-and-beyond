// Customized built-in: <div is="collapsible-panel">
// Extends: HTMLDivElement
// Adds collapsible behavior toggled by a child element with slot="header"

if (!customElements.get("collapsible-panel")) {
	class CollapsiblePanel extends HTMLDivElement {
		connectedCallback() {
			this.setAttribute("role", "region");
			const header = this.querySelector('[slot="header"]');
			header?.addEventListener("click", () => {
				this.classList.toggle("collapsed");
				const expanded = !this.classList.contains("collapsed");
				this.setAttribute("aria-expanded", String(expanded));
			});
		}
	}
	try {
		customElements.define("collapsible-panel", CollapsiblePanel, {
			extends: "div",
		});
	} catch (e) {
		console.warn(
			"[collapsible-panel] Customized built-ins not supported in this browser.",
			e,
		);
	}
}
