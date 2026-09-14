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

[![JSR](https://jsr.io/badges/@onokumus/metismenujs)](https://jsr.io/@onokumus/metismenujs)
</div>


## Table of Contents

- [Install](#install)
  - [Package Managers](#package-managers)
  - [CDN](#cdn)
  - [Download](#download)
- [Usage](#usage)
  * [Stopping list opening on certain elements](#stopping-list-opening-on-certain-elements)
- [Options](#options)
- [API](#api)
    + [dispose](#dispose)
    + [update](#update)
- [Events](#events)
- [CSS custom properties (variables)](#css-custom-properties-variables)
- [Migration Guide](#migration-guide)
- [Examples](#examples)
- [Demo](#demo)
- [About](#about)
  * [Related projects](#related-projects)
  * [Contributing](#contributing)
  * [Author](#author)
  * [License](#license)


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

Using [Deno](https://deno.com/):

```sh
deno add jsr:@onokumus/metismenujs
```


Once the package is installed, you can import the library:


```js
// Recommended approach (Named Import)
import { MetisMenu } from 'metismenujs';
```

```js
// Deprecated in v1.5.0, will be removed in v2.0.0
import MetisMenu from 'metismenujs';
```

If you use `require` for importing, **only default export is available**:

```js
const MetisMenu = require('metismenujs');
```

If you are using **Deno** without an install step (direct URL/JSR import):

```ts
import { MetisMenu } from "jsr:@onokumus/metismenujs";
```

> **Note:** CommonJS usage
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
  import { MetisMenu } from 'https://cdn.jsdelivr.net/npm/metismenujs/dist/index.mjs';
</script>
```

Using [unpkg](https://unpkg.com/) CDN:

```html
<script type="module">
  import { MetisMenu } from 'https://unpkg.com/metismenujs/dist/index.mjs';
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

1. **Include metismenujs StyleSheet**

    Using CDN — [jsDelivr](https://www.jsdelivr.com/):

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.min.css">
    ```

    Using CDN — [unpkg](https://unpkg.com/):

    ```html
    <link rel="stylesheet" href="https://unpkg.com/metismenujs/dist/metismenujs.min.css">
    ```

    Using [Vite](https://vitejs.dev/), [Astro](https://astro.build/) etc.:

    ```js
    import 'metismenujs/style';
    ```
    or sass source file:
    ```js
    import 'metismenujs/sass';
    ```

2. **Add class `metismenu` to unordered list**

    ```html
    <ul class="metismenu" id="menu">

    </ul>
    ```

3. **Make expand/collapse controls accessible**

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

4. **Arrow Options**

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

5. **Call the plugin**

    ```javascript
      // Recommended
      new MetisMenu("#menu");

      // Deprecated in v1.5.0, will be removed in v2.0.0
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

Stops and destroys metisMenu.

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
|--mm-transition-duration |  0.35s   |This property sets the length of time a transition animation should take to complete. |
|~~--mm-trantisition-duration~~ |  0.35s   |**Deprecated in v1.5.0, will be removed in v2.0.0.** Contains a typo — use `--mm-transition-duration` instead. |


## Migration Guide

### From v1.4.x to v1.5.0

The `v1.5.0` release focuses on modernizing the codebase and preparing for the next major version.

- **Deprecations**:
  - `MetisMenu.attach()` and the **default export** are now deprecated. They will be removed in `v2.0.0`.
  - The `--mm-trantisition-duration` CSS custom property (contains a typo) is now deprecated. It will be removed in `v2.0.0`.
- **Recommended Usage**:
  - Use `new MetisMenu()` instead of `MetisMenu.attach()`.
  - Use named imports: `import { MetisMenu } from 'metismenujs'`.
  - Use `--mm-transition-duration` instead of `--mm-trantisition-duration`.

### Preparing for v2.0.0

Version `2.0.0` will be a breaking release. To ensure a smooth transition:
- Update all your `MetisMenu.attach` calls to `new MetisMenu`.
- Switch from default exports to named exports.
- Replace any usage of `--mm-trantisition-duration` with `--mm-transition-duration`.

## Examples

[https://github.com/metismenu/examples](https://github.com/metismenu/examples)

## Demo
[https://onokumus.github.io/metismenujs](https://onokumus.github.io/metismenujs)

Contains a simple HTML file to demonstrate the metisMenu plugin.

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
Copyright © 2026, [Osman Nuri Okumuş](https://github.com/onokumus).
Released under the [MIT License](LICENSE).
