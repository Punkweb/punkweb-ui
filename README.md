# punkweb-ui

PunkwebUI is a lightweight open source (BSD-3 Clause) CSS framework that can be used as a standalone minified CSS file or installed via npm for use in frontend build systems. It focuses on sensible classless defaults for semantic HTML, [TailwindCSS](https://tailwindcss.com/) inspired utility clases, and essential UI components.

## Features

- Classless base styles for semantic HTML
- TailwindCSS inspired utility classes
- Essential UI components (buttons, dialogs, forms, etc.)
- Theming and customization through CSS variables
- Dark mode support out of the box
- Small footprint (~25kB minified and gzipped)

## Quick Start

### Standalone CSS

- Download the latest release from the [releases page](https://github.com/Punkweb/punkweb-ui/releases) and include the minified CSS file in your HTML:

```html
<link rel="stylesheet" href="/path/to/punkweb-ui.min.css" />
```

### SCSS

```bash
npm install punkweb-ui
```

Then import the SCSS file in your project:

```scss
@import 'punkweb-ui/scss/punkweb-ui';
```

### Usage

Documentation is sparse at the moment but you can explore the [source files](https://github.com/Punkweb/punkweb-ui/tree/main/scss/components) for available components. Plain HTML will automatically get styled by the classless base styles for a great looking default appearance. Most highly-used TailwindCSS utility classes are implemented with the same naming conventions, including responsive variants. Colors can be customized using CSS variables.

To use the out of the box dark mode add `data-theme="dark"` to your `<html>` or `<body>` tag.

## Development

```bash
npm install
npm start
```

This will watch SCSS files for changes and run lite-server for hot reloading
