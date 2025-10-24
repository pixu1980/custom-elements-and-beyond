// Customized built-in: <a is="safe-link">
// Extends: HTMLAnchorElement
// Adds security attributes for external links and optional confirm prompt via data-confirm

if (!customElements.get("safe-link")) {
	class SafeLink extends HTMLAnchorElement {
		connectedCallback() {
			// Ensure security attributes for target _blank
			if (this.target === "_blank") {
				const rel = new Set(
					(this.getAttribute("rel") || "").split(/\s+/).filter(Boolean),
				);
				rel.add("noopener");
				rel.add("noreferrer");
				this.setAttribute("rel", Array.from(rel).join(" "));
			}

			// Optional confirm prompt for external navigation
			const confirmMsg = this.getAttribute("data-confirm");
			if (confirmMsg) {
				this.addEventListener("click", (e) => {
					if (!confirm(confirmMsg)) {
						e.preventDefault();
					}
				});
			}
		}
	}

	try {
		customElements.define("safe-link", SafeLink, { extends: "a" });
	} catch (e) {
		console.warn(
			"[safe-link] Customized built-ins not supported in this browser.",
			e,
		);
	}
}
