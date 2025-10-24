// Customized built-in: <input is="date-input">
// Extends: HTMLInputElement
// Semantics: input type date, inherits form participation and validation

if (!customElements.get("date-input")) {
	class DateInput extends HTMLInputElement {
		connectedCallback() {
			this.type = "date";
			this.setAttribute("aria-label", "Select date");
			this.addEventListener("change", () => {
				// Keep the demo console log to show behavior
				console.log("Date selected:", this.value);
			});
		}
	}
	try {
		customElements.define("date-input", DateInput, { extends: "input" });
	} catch (e) {
		console.warn(
			"[date-input] Customized built-ins not supported in this browser.",
			e,
		);
	}
}
