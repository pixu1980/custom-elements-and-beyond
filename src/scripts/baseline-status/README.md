# Baseline Status component assets

This folder contains the `baseline-status` custom element and its assets split by type.

- `baseline-status.js`: component logic and rendering
- `baseline-status.css`: component CSS injected at runtime
- `icons/`: SVG assets imported as raw strings
- `templates/`: HTML templates with `{{placeholders}}` interpolated in `baseline-status.js`

Build notes:

- Parcel inline string imports are enabled by `@parcel/transformer-inline-string` dev dependency. Use `import x from 'bundle-text:./file.ext'` to load as text.
- No Shadow DOM or `<template>` is used by design. The component renders plain HTML and injects a singleton `<style>`.

Usage in slides:

```html
<baseline-status feature-id="anchor-positioning"></baseline-status>
```
