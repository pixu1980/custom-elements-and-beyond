# Copilot Instructions - Custom Elements and Beyond

## Project Context

This is an HTML talk/presentation about Custom Elements, exploring how to extend native HTML elements using the `{extends: "elementName"}` pattern and the `is="custom-name"` attribute approach. This presentation focuses on practical, framework-agnostic web components without Shadow DOM or HTML templates.

**Duration:** 45-60 minutes  
**Format:** HTML presentation with reveal.js  
**Deployment:** GitHub Pages  
**Package Manager:** pnpm

## Talk Objectives

- Introduce Custom Elements fundamentals using native element extension
- Demonstrate practical use cases with `{extends: "elementName"}` pattern
- Explore lifecycle hooks and APIs for extended elements
- Show integration with modern frameworks and tools
- Present best practices and performance considerations
- Focus on simplicity without Shadow DOM complexity

## Slide Structure

Each slide must follow these principles:

### General Guidelines
- **One concept per slide**: Each major topic gets its dedicated slide
- **Code examples**: Clear, working code snippets for every technical concept
- **Live demos**: Inline demos when possible; external links for complex examples
- **Progressive disclosure**: Start with basics, move to advanced topics
- **Visual consistency**: Follow the brand guidelines in `src/brand/`

### Slide Categories

#### Introduction (Slides 1-3)
- Speaker introduction and background
- Talk overview and learning objectives
- Why Web Components matter

#### Fundamentals (Slides 4-12)
- What are Custom Elements
- Custom Elements API with `{extends: "elementName"}`
- Using the `is="custom-name"` attribute pattern
- Browser support and Baseline status
- Creating your first extended Custom Element
- Lifecycle callbacks for extended elements

#### Patterns and Use Cases (Slides 13-24)
- Component composition patterns with extended elements
- Attribute and property binding
- Event handling and communication
- Styling strategies with CSS custom properties and attribute selectors
- Accessibility considerations (inheriting native accessibility)
- Form integration with extended form controls

#### Advanced Topics (Slides 25-35)
- Advanced DOM manipulation patterns
- Content distribution without slots
- Advanced lifecycle patterns
- Performance optimization
- Testing Custom Elements

#### Integration (Slides 36-42)
- Using Web Components with frameworks (Vue, React, Angular)
- Frameworks and Web Components interoperability
- Building design systems with Web Components
- Real-world examples

#### Future and Wrap-up (Slides 43-45)
- Upcoming Web Components features
- Resources and learning paths
- Q&A and conclusions

## Technical Code Standards

### HTML/Structure
- Use reveal.js for slide composition
- Each slide section in `src/slides/`
- Main slides file: `src/slides/slides.html`
- Naming convention: Use descriptive names for slide files
- PostHTML may be used for template composition

### CSS
- Main styles in `src/styles/index.css`
- Use custom properties for theming and reusable values
- Follow mobile-first responsive design
- Demonstrate modern CSS APIs when showcasing Web Components styling

### JavaScript
- Main script in `src/scripts/index.js`
- Keep presentation logic minimal
- Web Component examples should be self-contained
- Use ES2020+ syntax
- Comment complex code thoroughly

### Custom Elements Examples
- Each example must extend a native HTML element
- Always use `{extends: "elementName"}` pattern
- Always use `is="custom-name"` attribute in HTML
- Include proper accessibility attributes (inherited from native elements)
- Demonstrate lifecycle methods when relevant
- Show proper error handling
- Include JSDoc comments for clarity

### Language Policy (Mandatory)
- **All files must be in English**: slide content, comments, scripts, and styles
- When adding or editing content, translate any non-English text to English
- Do not use typographic dashes (em dash —, en dash –) or non-breaking hyphens (‑)
- Use only the ASCII hyphen-minus (-) character
- Avoid hyphenated compound adjectives in English copy (use "production ready" not "production ready")

## File Organization

```
src/
├── index.html              # Main presentation file
├── assets/
│   ├── audio/             # Audio files if needed
│   ├── logo/              # Logo assets
│   └── qrcodes/           # QR codes for resources
├── brand/
│   └── brand.html         # Brand styling and assets
├── scripts/
│   └── index.js           # Main presentation script
├── slides/
│   ├── slides.html        # Main slides container
│   ├── intro/
│   │   ├── intro.html
│   │   ├── _pixu.html
│   │   ├── _main-topic.html
│   │   └── _doodle.html
│   ├── topics/
│   │   └── topics.html    # Topics container
│   ├── summary/
│   │   ├── summary.html
│   │   ├── _topics.html
│   │   └── _dive-in.html
│   └── outro/
│       ├── outro.html
│       ├── _wrap-up.html
│       ├── _thanks.html
│       ├── _links.html
│       └── _taf.html
└── styles/
    └── index.css          # Main stylesheet
```

## Style Conventions

### Code Examples Template
```html
<section class="slide" data-markdown>
  <textarea data-template>
    ## API/Topic Name

    Description of the concept

    ```javascript
    class EnhancedButton extends HTMLButtonElement {
      constructor() {
        super();
        // Implementation
      }
      
      connectedCallback() {
        // Setup when element is added to DOM
      }
    }

    customElements.define('enhanced-button', EnhancedButton, {extends: 'button'});
    ```

    ```html
    <button is="enhanced-button">Click me</button>
    ```

    Live demo or screenshot
  </textarea>
</section>
```

### Notes Section
Each API/topic should include:
- Clear explanation of the concept
- Browser compatibility/Baseline status
- Practical use cases
- Link to MDN documentation
- Performance considerations if relevant

## Build and Development

### Scripts
- **Start development server**: `pnpm start`
  - Runs Parcel dev server on port 6001
  - Watch mode enabled
  
- **Build for production**: `pnpm build`
  - Creates optimized build in `dist/`
  - Auto-commits and pushes changes
  - Sets public URL to `./` for GitHub Pages

- **Clear cache**: `pnpm run clear`
  - Removes `.parcel-cache` and `dist/` directories

### Release Management
- **Major release**: `pnpm run rel:major`
- **Minor release**: `pnpm run rel:minor`
- **Patch release**: `pnpm run rel:patch`

## Dependencies

### Production
- `reveal.js`: Presentation framework
- `@pixu-talks/core`: Core presentation utilities
- `@pixu-talks/fonts`: Font library
- `@pixu-talks/theme`: Theme library

### Development
- `parcel`: Module bundler and dev server
- `@biomejs/biome`: Code formatter and linter
- `lightningcss`: CSS parser and minifier
- Sass transformer for Parcel

## Code Quality

### Formatting
- **Biome** for JavaScript and TypeScript
- **Prettier** for HTML, CSS, JSON, YAML, and Markdown
- Format before committing

### Best Practices
1. **Accessibility**: Every component must be accessible
   - Proper ARIA labels
   - Keyboard navigation support
   - Screen reader friendly

2. **Performance**: 
   - Lazy load images when possible
   - Optimize animations
   - Minimize JavaScript

3. **Browser Support**:
   - Test on Chrome, Firefox, Safari, Edge
   - Use feature detection where needed
   - Provide fallbacks for older browsers

4. **Responsive Design**:
   - Mobile-first approach
   - Test on various viewport sizes
   - Touch-friendly interactions

## Reference Sources

- [MDN Web Components Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Baseline](https://web.dev/baseline) - API support standard
- [Web Components Best Practices](https://www.webcomponents.org)
- [WHATWG Specifications](https://spec.whatwg.org/)
- [Can I Use](https://caniuse.com) - Browser support matrix

## Tone of Voice

- Technical but accessible to intermediate developers
- Show practical, real-world examples
- Celebrate the power and flexibility of Custom Elements
- Provide "before and after" comparisons
- Emphasize standards and interoperability

## Project-Specific Guidelines

1. **No Frameworks**: This presentation focuses on vanilla Custom Elements
2. **Self-Contained Examples**: Each code example should work independently
3. **Progressive Enhancement**: Examples should gracefully degrade
4. **Standards First**: Prioritize standard APIs over polyfills
5. **Documentation**: Every non-trivial component needs clear comments

## Files to Create/Modify

When adding new slides:
1. Create file in appropriate folder under `src/slides/`
2. Include in parent section's HTML file
3. Add specific styles in `src/styles/index.css` if needed
4. Test in dev server with `pnpm start`

## Deployment

- Automatic deployment to GitHub Pages via GitHub Actions
- Workflow file: `.github/workflows/static.yml`
- Builds on push to main/master branch
- Public URL: Check repository settings for the live URL

## Additional Notes

- The presentation uses reveal.js with its navigation and keyboard shortcuts
- Slides are modular and can be reordered if needed
- Keep track of presentation timing during development
- Test all interactive examples before deployment
- Ensure all external links are valid and accessible
