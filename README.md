# punkweb-ui

CSS Framework for Punkweb.

The primary goal of this project is to create a CSS framework that can be used for the following use cases:

- As a standalone minified CSS file, for projects using only browser CSS
- As a modular system for projects using SCSS.

## Usage

### Standalone CSS

- Download the latest release from the [releases page](https://github.com/Punkweb/punkweb-ui/releases) and include the minified CSS file in your project.
- Include the CSS file in your HTML file:

```html
<link rel="stylesheet" href="/path/to/punkweb-ui.min.css" />
```

### SCSS

```bash
npm install punkweb-ui
```

#### Full import

```scss
@import "punkweb-ui/scss/punkweb-ui";
```

#### Individual components

```scss
@import "punkweb-ui/scss/mixins"; // required for most components
@import "punkweb-ui/scss/components/buttons";
```

## Development

```bash
npm install
npm start
```

This will watch SCSS files for changes and run lite-server for hot reloading
