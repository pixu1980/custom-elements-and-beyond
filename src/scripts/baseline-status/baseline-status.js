// Baseline Status Web Component (vanilla JS)
// - Autonomous custom element (no Shadow DOM, no <template>)
// - Fetches Baseline info from https://api.webstatus.dev
// - Assets (CSS, SVG, HTML) imported as text via Parcel bundle-text: pipeline

import styles from "bundle-text:./baseline-status.css";

import {
	API_ENDPOINT,
	BASELINE_DEFS,
	SUPPORT_ICONS,
	BROWSER_ICONS,
	ICON_CHEVRON,
	TPL_LOADING,
	TPL_MAIN,
} from "./baseline-status.constants.js";

import {
	formatBaselineDate,
	descriptionFor,
	renderSupportIcon,
	renderBaselineGlyph,
	renderTemplate,
	ensureStyles,
	getBaselineDateParts,
	getLatestImplementationDateParts,
	escapeHTML,
	escapeAttr,
	svgToImgTag,
} from "./baseline-status.utils.js";

// inject component styles once

export class BaselineStatus extends HTMLElement {
	static get observedAttributes() {
		return ["feature-id", "featureId"];
	}

	constructor() {
		super();
		this._ctrl = null;
		this._data = null;
		this._loading = false;
		ensureStyles(styles);
	}

	connectedCallback() {
		this._renderLoading();
		this._fetchAndRender();
	}

	disconnectedCallback() {
		if (this._ctrl) this._ctrl.abort();
	}

	attributeChangedCallback(name) {
		if (name === "feature-id" || name === "featureId") {
			const fid =
				this.getAttribute("feature-id") || this.getAttribute("featureId");
			if (fid && this.getAttribute("feature-id") !== fid)
				this.setAttribute("feature-id", fid);
			this._fetchAndRender();
		}
	}

	get featureId() {
		return (
			this.getAttribute("feature-id") || this.getAttribute("featureId") || ""
		);
	}
	set featureId(v) {
		if (v == null) this.removeAttribute("feature-id");
		else this.setAttribute("feature-id", String(v));
	}

	_renderLoading() {
		const html = renderTemplate(TPL_LOADING, {
			featureName: escapeHTML(this.featureId || "Loading feature..."),
			baselineGlyph: renderBaselineGlyph("no_data"),
			chromeIcon: this._browserImg("chrome"),
			edgeIcon: this._browserImg("edge"),
			firefoxIcon: this._browserImg("firefox"),
			safariIcon: this._browserImg("safari"),
			noDataIcon: SUPPORT_ICONS.no_data,
			chevronIcon: ICON_CHEVRON,
		});

		this.innerHTML = html;
	}

	_render(feature) {
		const baseline = feature?.baseline?.status || "no_data";
		const title = BASELINE_DEFS[baseline]?.title || BASELINE_DEFS.no_data.title;
		const { label: baselineDateLabel, year } = getBaselineDateParts(feature);
		const { label: latestImplLabel } =
			getLatestImplementationDateParts(feature);
		const badge =
			baseline === "newly"
				? '<span class="baseline-badge">newly available</span>'
				: "";
		const description = descriptionFor(baseline, baselineDateLabel);
		const impl = feature?.browser_implementations || {};
		const aria = this._buildAriaLabel(title, year, !!badge, impl);
		const since = latestImplLabel ? `(since ${latestImplLabel})` : "";

		const html = renderTemplate(TPL_MAIN, {
			name: escapeHTML(feature?.name || this.featureId || "Unknown feature"),
			aria: escapeAttr(aria),
			baseline,
			since,
			baselineGlyph: renderBaselineGlyph(baseline),
			baselineLabel: "<strong>Baseline</strong>",
			title,
			year,
			badge,
			chromeIcon: this._browserImg("chrome"),
			edgeIcon: this._browserImg("edge"),
			firefoxIcon: this._browserImg("firefox"),
			safariIcon: this._browserImg("safari"),
			chromeSupport: renderSupportIcon(baseline, impl.chrome),
			edgeSupport: renderSupportIcon(baseline, impl.edge),
			firefoxSupport: renderSupportIcon(baseline, impl.firefox),
			safariSupport: renderSupportIcon(baseline, impl.safari),
			chevronIcon: ICON_CHEVRON,
			description,
			learnMore:
				baseline === "no_data"
					? ""
					: `<a href="https://webstatus.dev/features/${feature?.feature_id || this.featureId}" target="_blank" rel="noopener noreferrer">Learn more</a>`,
		});

		this.innerHTML = html;
	}

	_browserImg(name) {
		// Use data URI <img> to avoid inline SVG <defs> id collisions and paint issues
		const svg = BROWSER_ICONS[name];
		return svgToImgTag(svg, { className: `browser-icon browser-icon-${name}` });
	}

	_buildAriaLabel(title, year, isNewly, impl = {}) {
		const toText = (v) => (v === "available" ? "yes" : v || "unknown");
		const chrome = toText(impl.chrome?.status);
		const edge = toText(impl.edge?.status);
		const firefox = toText(impl.firefox?.status);
		const safari = toText(impl.safari?.status);
		const newly = isNewly ? " (newly available)" : "";
		const y = year ? ` ${year}` : "";
		return `Baseline: ${title}${y}${newly}. Supported in Chrome: ${chrome}. Supported in Edge: ${edge}. Supported in Firefox: ${firefox}. Supported in Safari: ${safari}.`;
	}

	async _fetchAndRender() {
		const featureId = this.featureId;
		if (!featureId) {
			this._render({
				baseline: { status: "no_data" },
				name: "Unknown feature",
			});
			return;
		}

		if (this._ctrl) this._ctrl.abort();
		this._ctrl = new AbortController();
		this._renderLoading();

		try {
			const resp = await fetch(API_ENDPOINT + encodeURIComponent(featureId), {
				signal: this._ctrl.signal,
				cache: "force-cache",
			});
			if (!resp.ok) throw new Error(String(resp.status));
			const json = await resp.json();
			this._data = json;
			this._render(json);
		} catch (err) {
			if (err?.name === "AbortError") return;
			this._render({ baseline: { status: "no_data" }, name: featureId });
		}
	}
}

customElements.define("baseline-status", BaselineStatus);
