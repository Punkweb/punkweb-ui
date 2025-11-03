# punkweb-ui

A lightweight CSS framework used by [Punkweb](https://punkweb.net) projects.

punkweb-ui can be used as a standalone CSS file or as a modular SCSS system.

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
@import 'punkweb-ui/scss/punkweb-ui';
```

## Development

```bash
npm install
npm start
```

This will watch SCSS files for changes and run lite-server for hot reloading
