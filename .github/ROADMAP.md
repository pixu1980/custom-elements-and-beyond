# Custom Elements and Beyond - Implementation Roadmap

**Duration:** 45-60 minutes  
**Total Slides:** 45 slides  
**Target Audience:** Web developers, designers, frontend engineers  
**Level:** Intermediate to Advanced

---

## Abstract

Custom Elements are a standardized API that enables developers to create reusable, framework-agnostic components by extending native HTML elements. This presentation explores the capabilities of Custom Elements, demonstrating practical use cases, best practices using the `{extends: "elementName"}` pattern, and how they integrate with modern web development workflows.

From creating simple extended elements to building complex design systems, this talk celebrates the power and flexibility of web standards, emphasizing interoperability and long-term sustainability of web applications without the complexity of Shadow DOM or templates.

---

## Talk Structure and Implementation Plan

### Phase 1: Introduction (Slides 1-3, ~5 min)

#### Slide 1 – Personal Introduction

- **File:** `src/slides/intro/_pixu.html`
- **Status:** 🟩 Complete
- **Content:**
  - Speaker name, role, background
  - Journey in web development
  - Why Web Components matter to you
  - Connection to the topic
  - Social links and contact information

#### Slide 2 – Main Topic and Why It Matters

- **File:** `src/slides/intro/_main-topic.html`
- **Status:** 🟩 Complete
- **Content:**
  - Title: "Building the future with Web Standards"
  - Brief overview of what will be covered (5 key learning areas)
  - Why this matters now (framework fatigue, standards adoption, interoperability)
  - Learning path preview with progressive disclosure

#### Slide 3 – Title Slide with Tagline

- **File:** `src/slides/intro/_doodle.html`
- **Status:** 🟩 Complete
- **Content:**
  - Main title: "customElements & beyond"
  - Tagline: "Exploring the power and flexibility of Web Standards"
  - Speaker notes about talk objectives

---

### Phase 2: Fundamentals (Slides 4-12, ~10-12 min)

#### Slide 4 – What Are Custom Elements?

- **File:** `src/slides/topics/_01-what-are-custom-elements.html`
- **Status:** 🟩 Complete
- **Content:**
  - Definition of Custom Elements
  - Core API: Extending native HTML elements
  - Why they matter (framework agnostic, standards based)
  - Inherit native behavior and accessibility
  - Myth vs Fact: Custom Elements != Web Components
  - Web Components is three APIs: Custom Elements, Shadow DOM, HTML Template
  - Scope: this talk focuses only on the Custom Elements API (no Shadow DOM, no template)

#### Slide 5 – Custom Elements API Overview

- **File:** `src/slides/topics/_02-custom-elements-api.html`
- **Status:** 🟩 Complete
- **Content:**
  - `customElements.define()` with `{extends: "elementName"}`
  - Using `is="custom-name"` attribute
  - Extending native elements (button, input, div, etc.)
  - Benefits of extending native elements
  - Three sub-sections with code examples

#### Slide 6 – Browser Support and Baseline Status

- **File:** `src/slides/topics/_03-browser-support.html`
- **Status:** 🟩 Complete
- **Content:**
  - Baseline adoption timeline
  - Current browser support matrix
  - Safari limitation note
  - Polyfill availability

#### Slide 7 – Creating Your First Custom Element

- **File:** `src/slides/topics/_04-first-custom-element.html`
- **Status:** 🟩 Complete
- **Content:**
  - Counter button example with full implementation
  - Step-by-step walkthrough (define, register, use)
  - Live working demo included
  - Code for all three steps
  - Cleanup in disconnectedCallback

#### Slide 8 – Understanding Lifecycle Callbacks

- **File:** `src/slides/topics/_05-lifecycle-callbacks.html`
- **Status:** 🟩 Complete
- **Content:**
  - All four lifecycle callbacks with examples
  - `constructor()`, `connectedCallback()`, `disconnectedCallback()`, `attributeChangedCallback()`
  - Rules and best practices for each
  - Timeline diagram section

#### Slide 9 – Attributes vs Properties

- **File:** `src/slides/topics/_06-attributes-properties.html`
- **Status:** 🟩 Complete
- **Content:**
  - Key differences explained
  - Reflection pattern implementation
  - Best practices section
  - Multiple code examples

#### Slide 10 – Observed Attributes and Reactivity

- **File:** `src/slides/topics/_07-observed-attributes.html`
- **Status:** 🟩 Complete
- **Content:**
  - `static get observedAttributes()` method
  - Complete validated input example
  - Performance tips
  - Real-world usage examples

#### Slide 11 – Extending Different Native Elements

- **File:** `src/slides/topics/_08-extending-natives.html`
- **Status:** 🟩 Complete
- **Content:**
  - Examples for buttons, inputs, divs, lists
  - Benefits of each base element
  - Choosing the right base table
  - Accessibility inheritance highlighted

#### Slide 12 – Styling Extended Elements

- **File:** `src/slides/topics/_09-styling-elements.html`
- **Status:** 🟩 Complete
- **Content:**
  - Attribute selector patterns
  - CSS custom properties for theming
  - Cascade and specificity
  - Complete themed button example with CSS

---

### Phase 3: Patterns and Use Cases (Slides 13-24, ~15-18 min)

#### Slide 13 – Component Composition Patterns

- **File:** `src/slides/topics/_10-composition-patterns.html`
- **Status:** 🟩 Complete
- **Content:**
  - Container/Presentational patterns with tab example
  - Composition vs Inheritance
  - Building reusable components
  - Separation of concerns
  - Best practices (5 sections)

#### Slide 14 – Attribute and Property Binding

- **File:** `src/slides/topics/_11-binding.html`
- **Status:** 🟩 Complete
- **Content:**
  - Two-way binding with range input
  - Property synchronization
  - Data binding with objects
  - Complete examples (4 sections)

#### Slide 15 – Event Handling and Communication

- **File:** `src/slides/topics/_12-event-handling.html`
- **Status:** 🟩 Complete
- **Content:**
  - Custom events with detail
  - Event delegation pattern
  - Parent-child communication
  - Best practices section (6 sections)

#### Slide 16 – Component Styling Strategies

- **File:** `src/slides/topics/_13-styling-strategies.html`
- **Status:** 🟩 Complete
- **Content:**
  - BEM with Custom Elements
  - CSS custom properties architecture
  - Theme layers
  - State-based styling
  - Organizational best practices (5 sections)

#### Slide 17 – CSS Custom Properties for Theming

- **File:** `src/slides/topics/_14-theming.html`
- **Status:** 🟩 Complete
- **Content:**
  - Design tokens implementation
  - Component theme contract
  - Dark mode with toggle button
  - Dynamic theme updates
  - Complete working example (6 sections)

#### Slide 18 – Accessibility in Custom Elements

- **File:** `src/slides/topics/_15-accessibility.html`
- **Status:** 🟩 Complete
- **Content:**
  - Inherited accessibility features
  - ARIA attributes implementation
  - Keyboard navigation
  - Focus management
  - Screen reader support
  - Form integration
  - Testing strategies (8 sections)

#### Slide 19 – Form Integration and Validation

- **File:** `src/slides/topics/_16-form-integration.html`
- **Status:** 🟩 Complete
- **Content:**
  - ElementInternals API
  - Custom form elements
  - Validation API
  - ElementInternals API
  - Custom validation examples
  - Form submission handling
  - Real-time validation
  - Browser compatibility notes (6 sections)

#### Slide 20 – State Management in Components

- **File:** `src/slides/topics/_17-state-management.html`
- **Status:** 🟩 Complete
- **Content:**
  - Local component state
  - State synchronization patterns
  - Immutability principles
  - Change detection strategies
  - Proxy-based reactivity (5 sections)

#### Slide 21 – Reactivity with Observable Pattern

- **File:** `src/slides/topics/_18-reactivity-observable.html`
- **Status:** 🟩 Complete
- **Content:**
  - EventTarget-based Observable implementation
  - Subscribe/unsubscribe pattern
  - Using Observables in Custom Elements
  - Automatic UI updates on state change
  - Cleanup and memory management (4 sections)

#### Slide 22 – Reactivity with Signal Pattern

- **File:** `src/slides/topics/_19-reactivity-signals.html`
- **Status:** 🟩 Complete
- **Content:**
  - Minimal Signal primitive implementation
  - Get/set/subscribe API
  - Using Signals in Custom Elements
  - Derived signals (computed values)
  - Framework-agnostic reactivity (5 sections)

#### Slide 23 – Automatic Data Binding

- **File:** `src/slides/topics/_20-reactivity-binding.html`
- **Status:** 🟩 Complete
- **Content:**
  - Creating a binding system with data-bind-\* attributes
  - Declarative UI updates
  - Two-way binding for inputs
  - Complete reactive examples
  - Benefits of declarative bindings (6 sections)

#### Slide 24 – Error Handling and Resilience

- **File:** `src/slides/topics/_18-error-handling.html`
- **Status:** 🟩 Complete
- **Content:**
  - Try-catch in lifecycle methods
  - Graceful degradation
  - Retry logic with exponential backoff
  - Error boundaries pattern
  - Loading states
  - Fallback content (6 sections)

#### Slide 25 – Documentation and API Design

- **File:** `src/slides/topics/_19-api-design.html`
- **Status:** 🟩 Complete
- **Content:**
  - Designing clear component APIs
  - JSDoc documentation
  - Semantic attribute naming
  - Property vs attribute guidelines
  - TypeScript support
  - Documentation best practices (6 sections)

#### Slide 26 – Real-World Component Examples

- **File:** `src/slides/topics/_20-real-world-examples.html`
- **Status:** 🟩 Complete
- **Content:**
  - Toast notification implementation
  - Accordion panel with animations
  - Copy to clipboard button
  - Complete working examples
  - Resources and links (5 sections)

---

### Phase 4: Advanced Topics (Slides 27-37, ~15-18 min)

#### Slide 27 – Advanced DOM Manipulation

- **File:** `src/slides/topics/_21-advanced-dom.html`
- **Status:** 🟩 Complete
- **Content:**
  - innerHTML vs createElement comparison
  - DocumentFragment for batch operations
  - XSS prevention and security
  - Efficient DOM queries
  - Performance monitoring (6 sections)

#### Slide 28 – Content Distribution Patterns

- **File:** `src/slides/topics/_22-content-distribution.html`
- **Status:** 🟩 Complete
- **Content:**
  - Named regions pattern with slot attributes
  - Content projection with classes
  - Dynamic content wrapping
  - Content filtering
  - Template cloning (5 sections)

#### Slide 29 – Advanced Lifecycle Patterns

- **File:** `src/slides/topics/_23-lifecycle-patterns.html`
- **Status:** 🟩 Complete
- **Content:**
  - Lazy initialization with Intersection Observer
  - Cleanup management helpers
  - Reconnection handling
  - Adopted callback pattern
  - Attribute change batching
  - Lifecycle best practices (6 sections)

#### Slide 30 – Advanced Event Patterns

- **File:** `src/slides/topics/_24-advanced-events.html`
- **Status:** 🟩 Complete
- **Content:**
  - Event delegation with data attributes
  - Event bus pattern
  - Throttling and debouncing
  - Event composition (gestures)
  - Promise-based events
  - Event replay pattern (6 sections)

#### Slide 31 – Performance Optimization

- **File:** `src/slides/topics/_25-performance.html`
- **Status:** 🟩 Complete
- **Content:**
  - Rendering optimization and batching
  - Lazy loading content
  - Memory management with WeakMap
  - CSS containment
  - will-change property usage
  - Performance measurement (6 sections)

#### Slide 32 – Testing Custom Elements

- **File:** `src/slides/topics/_26-testing.html`
- **Status:** 🟩 Complete
- **Content:**
  - Unit testing setup
  - Testing lifecycle methods
  - Testing user interactions
  - Testing async operations
  - Integration testing
  - Visual regression testing
  - Testing best practices (7 sections)

#### Slide 33 – TypeScript Integration

- **File:** `src/slides/topics/_27-typescript.html`
- **Status:** 🟩 Complete
- **Content:**
  - Basic TypeScript definitions
  - Type-safe attributes
  - Event type definitions
  - Generic components
  - Decorators (experimental)
  - Type declaration files (6 sections)

#### Slide 34 – Build Tools & Bundling

- **File:** `src/slides/topics/_28-build-tools.html`
- **Status:** 🟩 Complete
- **Content:**
  - No build approach
  - Vite configuration
  - Webpack configuration
  - Code splitting
  - CSS processing
  - Development server
  - Publishing to NPM (7 sections)

#### Slide 35 – Debugging & DevTools

- **File:** `src/slides/topics/_29-debugging.html`
- **Status:** 🟩 Complete
- **Content:**
  - Browser DevTools usage
  - Custom debug panel
  - Performance profiling
  - Error tracking
  - Logging utilities
  - Testing in DevTools (6 sections)

#### Slide 36 – Versioning & Compatibility

- **File:** `src/slides/topics/_30-versioning.html`
- **Status:** 🟩 Complete
- **Content:**
  - Semantic versioning
  - Feature detection
  - Polyfill strategy
  - Backward compatibility
  - Migration guides
  - Compatibility testing (6 sections)

#### Slide 37 – Advanced Topics Recap

#### Slide 27 – Advanced Lifecycle Patterns

- **File:** `src/slides/topics/_23-lifecycle-patterns.html`
- **Status:** 🟩 Complete
- **Content:**
  - Lazy initialization with Intersection Observer
  - Cleanup management helpers
  - Reconnection handling
  - Adopted callback pattern
  - Attribute change batching
  - Lifecycle best practices (6 sections)

#### Slide 28 – Advanced Event Patterns

- **File:** `src/slides/topics/_24-advanced-events.html`
- **Status:** 🟩 Complete
- **Content:**
  - Event delegation with data attributes
  - Event bus pattern
  - Throttling and debouncing
  - Event composition (gestures)
  - Promise-based events
  - Event replay pattern (6 sections)

#### Slide 29 – Performance Optimization

- **File:** `src/slides/topics/_25-performance.html`
- **Status:** 🟩 Complete
- **Content:**
  - Rendering optimization and batching
  - Lazy loading content
  - Memory management with WeakMap
  - CSS containment
  - will-change property usage
  - Performance measurement (6 sections)

#### Slide 30 – Testing Custom Elements

- **File:** `src/slides/topics/_26-testing.html`
- **Status:** 🟩 Complete
- **Content:**
  - Unit testing setup
  - Testing lifecycle methods
  - Testing user interactions
  - Testing async operations
  - Integration testing
  - Visual regression testing
  - Testing best practices (7 sections)

#### Slide 31 – TypeScript Integration

- **File:** `src/slides/topics/_27-typescript.html`
- **Status:** 🟩 Complete
- **Content:**
  - Basic TypeScript definitions
  - Type-safe attributes
  - Event type definitions
  - Generic components
  - Decorators (experimental)
  - Type declaration files (6 sections)

#### Slide 32 – Build Tools & Bundling

- **File:** `src/slides/topics/_28-build-tools.html`
- **Status:** 🟩 Complete
- **Content:**
  - No build approach
  - Vite configuration
  - Webpack configuration
  - Code splitting
  - CSS processing
  - Development server
  - Publishing to NPM (7 sections)

#### Slide 33 – Debugging & DevTools

- **File:** `src/slides/topics/_29-debugging.html`
- **Status:** 🟩 Complete
- **Content:**
  - Browser DevTools usage
  - Custom debug panel
  - Performance profiling
  - Error tracking
  - Logging utilities
  - Testing in DevTools (6 sections)

#### Slide 34 – Versioning & Compatibility

- **File:** `src/slides/topics/_30-versioning.html`
- **Status:** 🟩 Complete
- **Content:**
  - Semantic versioning
  - Feature detection
  - Polyfill strategy
  - Backward compatibility
  - Migration guides
  - Compatibility testing (6 sections)

#### Slide 35 – Advanced Topics Recap

- **File:** `src/slides/topics/_31-advanced-recap.html`
- **Status:** 🟩 Complete
- **Content:**
  - Summary of advanced topics covered
  - Performance & optimization recap
  - Content management patterns
  - Lifecycle & events summary
  - Development tools overview
  - Key takeaways
  - Best practices summary
  - Performance checklist
  - Production readiness checklist (6 sections)

---

### Phase 5: Integration (Slides 38-44, ~10-12 min)

#### Slide 38 – Integration with Vue.js

- **File:** `src/slides/topics/_32-vue-integration.html`
- **Status:** 🟩 Complete
- **Content:**
  - Vue configuration for Custom Elements
  - Using in Vue templates
  - Two-way binding with v-model
  - Wrapper component pattern
  - Composables with Custom Elements (6 sections)

#### Slide 39 – Integration with React

- **File:** `src/slides/topics/_33-react-integration.html`
- **Status:** 🟩 Complete
- **Content:**
  - Basic usage in React
  - React wrapper component
  - Using the wrapper
  - Custom hook for elements
  - React 19+ improvements (6 sections)

#### Slide 40 – Integration with Angular

- **File:** `src/slides/topics/_34-angular-integration.html`
- **Status:** 🟩 Complete
- **Content:**
  - Angular configuration (NgModule & standalone)
  - Using in templates
  - Property binding
  - Directive wrapper
  - Service for Custom Elements (6 sections)

#### Slide 41 – Building Design Systems

- **File:** `src/slides/topics/_35-design-systems.html`
- **Status:** 🟩 Complete
- **Content:**
  - Design system structure
  - Design tokens (CSS & JS)
  - Base element class
  - Design system button component
  - Button styles
  - Component documentation
  - Publishing to NPM (7 sections)

#### Slide 42 – Framework Agnostic Components

- **File:** `src/slides/topics/_36-framework-agnostic.html`
- **Status:** 🟩 Complete
- **Content:**
  - Universal component pattern
  - Framework compatibility checklist
  - Framework adapters
  - Interoperability best practices
  - Testing across frameworks
  - Progressive enhancement (6 sections)

#### Slide 43 – Interoperability & Standards

- **File:** `src/slides/topics/_37-interoperability.html`
- **Status:** 🟩 Complete
- **Content:**
  - Web standards foundation
  - Standard communication patterns
  - Form participation with ElementInternals
  - CSS custom properties bridge
  - Accessibility standards
  - Module system compatibility
  - Interoperability checklist (7 sections)

#### Slide 44 – Real-World Case Studies

- **File:** `src/slides/topics/_38-case-studies.html`
- **Status:** 🟩 Complete
- **Content:**
  - GitHub: Progressive enhancement approach
  - Salesforce Lightning: Enterprise design system
  - YouTube: Migration strategy
  - ING Bank: Framework-agnostic Lion library
  - Adobe Spectrum: Cross-product consistency
  - Lessons learned
  - Resources and links (8 sections)

---

### Phase 6: Future and Wrap-up (Slides 45-47, ~5 min)

#### Slide 45 – Upcoming Custom Elements Features

- **File:** `src/slides/topics/_43-future-features.html`
- **Status:** 🟩 Complete
- **Content:**
  - Enhanced ElementInternals API
  - Better form integration capabilities
  - Improved accessibility features
  - Signals/Observables proposal
  - Custom state pseudo-classes
  - Invoker commands integration

#### Slide 46 – Resources and Learning Paths

- **File:** `src/slides/topics/_44-resources.html`
- **Status:** 🟩 Complete
- **Content:**
  - MDN Custom Elements documentation
  - Web.dev articles
  - Community resources
  - Open-source libraries
  - CodePen collections
  - Recommended courses and books
  - Conference talks

#### Slide 47 – Conclusions and Call-to-Action

- **File:** `src/slides/topics/_45-conclusions.html`
- **Status:** 🟩 Complete
- **Content:**
  - Key takeaways summary
  - Why now is the time for Custom Elements
  - Encouragement to experiment
  - Community involvement
  - Q&A invitation
  - Contact information and QR codes

---

## Implementation Phases Summary

| Phase                | Slides | Duration      | Status                  |
| -------------------- | ------ | ------------- | ----------------------- |
| Introduction         | 1-3    | 5 min         | 🟩 Complete             |
| Fundamentals         | 4-12   | 10-12 min     | 🟩 Complete             |
| Patterns & Use Cases | 13-26  | 15-18 min     | 🟩 Complete             |
| Advanced Topics      | 27-37  | 15-18 min     | 🟩 Complete             |
| Integration          | 38-44  | 10-12 min     | 🟩 Complete             |
| Future & Wrap-up     | 45-47  | 5 min         | 🟩 Complete             |
| **TOTAL**            | **47** | **45-60 min** | ✅ Done (100% complete) |

---

## Status Legend

- ⬜ **Not started** - Slide not yet created
- 🟨 **In progress** - Currently being worked on
- 🟩 **Complete** - Slide finished and tested
- 🔴 **Needs review** - Complete but awaiting review
- ✅ **Ready** - Approved and deployed

---

## Slide Creation Checklist

For each slide, ensure:

- [ ] File created in appropriate `src/slides/topics/` folder
- [ ] Included in parent section's HTML file (e.g., `topics.html`)
- [ ] Accessibility compliance (ARIA labels, contrast, semantics)
- [ ] Code examples tested and working
- [ ] Live demo functional (or external link provided)
- [ ] Browser compatibility noted
- [ ] MDN documentation links included
- [ ] Consistent styling with brand guidelines
- [ ] Timing validation (does it fit in allocated time?)
- [ ] Spelling and grammar check
- [ ] Formatted with Prettier/Biome

---

## Development Guidelines

### Content Creation

1. Create slide file: `src/slides/topics/_NN-slide-name.html`
2. Add code examples with proper syntax highlighting
3. Include live demos or CodePen embeds
4. Add accessibility attributes
5. Include notes about browser support

### Code Quality

- Run `pnpm start` to test slides locally
- Use `pnpm build` before committing
- Ensure code formatting with appropriate tools
- Test on Chrome, Firefox, Safari, Edge

### Documentation

- Update this ROADMAP.md as slides progress
- Link to MDN/web.dev resources
- Include practical use cases
- Show "before and after" examples where applicable

---

## Next Steps

1. **Week 1:** Create Introduction slides (1-3)
2. **Week 2:** Create Fundamentals slides (4-12)
3. **Week 3:** Create Patterns & Use Cases slides (13-24)
4. **Week 4:** Create Advanced Topics slides (25-35)
5. **Week 5:** Create Integration slides (36-42)
6. **Week 6:** Create Future & Wrap-up slides (43-45)
7. **Week 7:** Review, refine, and practice presentation

---

## Notes

- Slides are modular and can be reordered if needed
- Each slide should be self-contained with its own code examples
- Practice timing is crucial - aim for 1 minute per slide on average
- Keep interactive elements engaging but not distracting
- Ensure all external links are tested and valid
- Maintain consistent terminology throughout the presentation

---

## Implementation Progress

| Phase                         | Slides | Status              | Files                          |
| ----------------------------- | ------ | ------------------- | ------------------------------ |
| Phase 1: Introduction         | 1-3    | ✅ Complete (3/3)   | \_pixu, \_main-topic, \_doodle |
| Phase 2: Fundamentals         | 4-12   | ✅ Complete (9/9)   | \_01 through \_09              |
| Phase 3: Patterns & Use Cases | 13-24  | ✅ Complete (12/12) | \_10 through \_20              |
| Phase 4: Advanced Topics      | 25-35  | ✅ Complete (11/11) | \_21 through \_31              |
| Phase 5: Integration          | 36-42  | ✅ Complete (7/7)   | \_32 through \_38              |
| Phase 6: Future & Wrap-up     | 43-45  | ✅ Complete (3/3)   | \_43 through \_45              |
| **TOTAL**                     | **45** | **100% Complete**   | **45/45 slides**               |

---

**Last Updated:** October 22, 2025  
**Version:** 1.4  
**Status:** Complete - All phases delivered (100%)
