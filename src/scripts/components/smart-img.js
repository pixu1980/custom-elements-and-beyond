// Customized built-in: <img is="smart-img">
// Extends: HTMLImageElement
// Adds lazy loading by default and optional fallback via data-fallback on error

if (!customElements.get("smart-img")) {
	class SmartImg extends HTMLImageElement {
		connectedCallback() {
			if (!this.hasAttribute("loading")) this.setAttribute("loading", "lazy");
			const fallback = this.getAttribute("data-fallback");
			if (fallback) {
				this.addEventListener("error", () => {
					if (this.src !== fallback) this.src = fallback;
				});
			}
		}
	}

	try {
		customElements.define("smart-img", SmartImg, { extends: "img" });
	} catch (e) {
		console.warn(
			"[smart-img] Customized built-ins not supported in this browser.",
			e,
		);
	}
}
