<div align="center">
   <h1>
        <a href="https://onokumus.github.io/metismenujs">metismenujs</a>
    </h1>
    <p align="center">Collapsible menu plugin with Vanilla-JS</p>
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/metismenujs.svg?style=flat-square)](https://www.npmjs.org/package/metismenujs)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=metismenujs&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=metismenujs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/metismenujs?style=flat-square)](https://bundlephobia.com/package/metismenujs@latest)
[![npm downloads](https://img.shields.io/npm/dm/metismenujs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=metismenujs)
[![](https://data.jsdelivr.com/v1/package/npm/metismenujs/badge)](https://www.jsdelivr.com/package/npm/metismenujs) [![Packagist](https://img.shields.io/packagist/v/onokumus/metismenujs.svg)](https://packagist.org/packages/onokumus/metismenujs)
</div>


## Table of Contents

- [Browser Support](#browser-support)
- [Installing](#installing)
  - [Package manager](#package-manager)
  - [CDN](#cdn)
- [Usage](#usage)
  * [Stopping list opening on certain elements](#stopping-list-opening-on-certain-elements)
- [Options](#options)
- [API](#api)
    + [dispose](#dispose)
    + [update](#update)
- [Events](#events)
- [CSS custom properties (variables)](#css-custom-properties-variables)
- [Migrating to v1.0.3 from v1.4.0](#migrating-to-v103-from-v140)
- [Examples](#examples)
- [Demo](#demo)
- [About](#about)
  * [Related projects](#related-projects)
  * [Contributing](#contributing)
  * [Author](#author)
  * [License](#license)


## Browser Support

> This plugin does not support any version of IE browser.

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | ❌ |


## Install

### Package Managers

Using [npm](https://www.npmjs.com/):

```bash
npm install metismenujs
```

Using [yarn](https://yarnpkg.com):

```sh
yarn add metismenujs
```

Using [pnpm](https://pnpm.io/):

```sh
pnpm add metismenujs
```


Once the package is installed, you can import the library using `import` or `require` approach:


```js
// recommended approach
import { MetisMenu } from 'metismenujs';
```

```js
// You can also use the default export
import MetisMenu from 'metismenujs';
```

If you use `require` for importing, **only default export is available**:

```js
const MetisMenu = require('metismenujs');
```

> **Note** CommonJS usage
> In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()`, add the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "NodeNext"
  }
}
```


### CDN

#### ES6 UMD browser module

Using [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/metismenujs"></script>
```

Using [unpkg](https://unpkg.com/) CDN:

```html
<script src="https://unpkg.com/metismenujs"></script>
```

#### ES6 ES module

Using [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<script type="module">
  import { MetisMenu } from 'https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.esm.min.js';
</script>
```

Using [unpkg](https://unpkg.com/) CDN:

```html
<script type="module">
  import { MetisMenu } from 'https://unpkg.com/metismenujs/dist/metismenujs.esm.min.js';
</script>
```

Install with [composer](https://getcomposer.org/)

```bash
composer require onokumus/metismenujs:dev-master
```

### Download
[download](https://github.com/onokumus/metismenujs/archive/master.zip)

Ready to use files are located in the `dist` directory.

## Usage

1. Include metismenujs StyleSheet

    ### Using CDN

    [jsDelivr](https://www.jsdelivr.com/) :

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.min.css">
    ```

    [unpkg](https://unpkg.com/) :
    ```html
    <link rel="stylesheet" href="https://unpkg.com/metismenujs/dist/metismenujs.min.css">
    ```

    ### Using [Vite](https://vitejs.dev/), [Astro](https://astro.build/) etc.

    ```js
    import 'metismenujs/style';
    ```
    or sass source file
    ```js
    import 'metismenujs/sass';
    ```


2. Add class `metismenu` to unordered list

  ```html
  <ul class="metismenu" id="menu">

  </ul>
  ```
3. Make expand/collapse controls accessible

  > Be sure to add `aria-expanded` to the element `a`. This attribute explicitly defines the current state of the collapsible element to screen readers and similar assistive technologies. If the collapsible element is closed by default, it should have a value of `aria-expanded="false"`. If you've set the collapsible element's parent `li` element to be open by default using the `active` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute based on whether or not the collapsible element has been opened or closed.

  ```html
  <ul class="metismenu" id="menu">
    <li class="mm-active">
      <a href="#" aria-expanded="true">Menu 1</a>
      <ul>
      ...
      </ul>
    </li>
    <li>
      <a href="#" aria-expanded="false">Menu 2</a>
      <ul>
      ...
      </ul>
    </li>
    ...
    </ul>
  ```
4. Arrow Options

  > add `has-arrow` class to `a` element

  ```html
  <ul class="metismenu" id="menu">
  <li class="mm-active">
    <a class="has-arrow" href="#" aria-expanded="true">Menu 1</a>
    <ul>
    ...
    </ul>
  </li>
  <li>
    <a class="has-arrow" href="#" aria-expanded="false">Menu 2</a>
    <ul>
    ...
    </ul>
  </li>
  ...
  </ul>
  ```

5. Call the plugin:

  ```javascript
    new MetisMenu("#menu");
    // or
    MetisMenu.attach('#menu');
  ```

### Stopping list opening on certain elements
Setting aria-disabled="true" in the `<a>` element as shown will stop metisMenu opening the menu for that particular list. This can be changed dynamically and will be obeyed correctly:

```html
<a href="#" aria-expanded="false" aria-disabled="true">List 1</a>
```

## Options

| Option | Type | Default | Description | Example |
| --- | --- | --- | --- | --- |
| toggle | Boolean | true | For auto collapse support. | `new MetisMenu("#menu", { toggle: false });` |
| triggerElement | css selector | a | | `new MetisMenu("#menu", { triggerElement: '.nav-link' });` |
| parentTrigger | css selector | li | | `new MetisMenu("#menu", { parentTrigger: '.nav-item' });` |
| subMenu | css selector | ul | | `new MetisMenu("#menu", { subMenu: '.nav.flex-column' });` |


## API

### dispose

For stop and destroy metisMenu.

```javascript
 const mm = new MetisMenu("#menu");
 mm.dispose();
```

### update

Re-init metisMenu.

```javascript
const mm = new MetisMenu("#menu");
mm.dispose();
// ajax ...
mm.update();
```

## Events

|**Event Type**      |**Description**|
|--------------|--------------|
|show.metisMenu    |This event fires immediately when the `show` instance method is called.|
|shown.metisMenu   |This event is fired when a collapse `ul` element has been made visible to the user (will wait for CSS transitions to complete).|
|hide.metisMenu    |This event is fired immediately when the `hide` method has been called. |
|hidden.metisMenu  |This event is fired when a collapse `ul` element has been hidden from the user (will wait for CSS transitions to complete).|

## CSS custom properties (variables)
|**Property**   |  **Default**   |**Description** |
|--------------|--------------|--------------|
|--mm-transition-timing-function  |  ease  |This property sets how intermediate values are calculated for CSS properties being affected by a transition effect. |
|--mm-trantisition-duration |  0.35s   |This property sets the length of time a transition animation should take to complete. |


## Migrating to v1.0.3 from v1.4.0

- Update `metisMenu.js` & `metisMenu.css` files
- Change `active` class to `mm-active`

## Examples

[https://github.com/metismenu/examples](https://github.com/metismenu/examples)

## Demo
[https://onokumus.github.io/metismenujs](https://onokumus.github.io/metismenujs)

Contains a simple HTML file to demonstrate metisMenu plugin.

## About

### Related projects
- [metismenu](https://www.npmjs.com/package/metismenu): A jQuery menu plugin | [homepage](https://github.com/onokumus/metismenu)
- [@metismenu/react](https://www.npmjs.com/package/@metismenu/react): react.js component for metismenu | [homepage](https://github.com/metismenu/metismenu-react)

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author
**Osman Nuri Okumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2023, [Osman Nuri Okumuş](https://github.com/onokumus).
Released under the [MIT License](LICENSE).
