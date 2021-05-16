# metismenujs [![NPM version](https://img.shields.io/npm/v/metismenujs.svg?style=flat)](https://www.npmjs.com/package/metismenujs) [![NPM monthly downloads](https://img.shields.io/npm/dm/metismenujs.svg?style=flat)](https://npmjs.org/package/metismenujs) [![NPM total downloads](https://img.shields.io/npm/dt/metismenujs.svg?style=flat)](https://npmjs.org/package/metismenujs)  
[![](https://data.jsdelivr.com/v1/package/npm/metismenujs/badge)](https://www.jsdelivr.com/package/npm/metismenujs) [![Packagist](https://img.shields.io/packagist/v/onokumus/metismenujs.svg)](https://packagist.org/packages/onokumus/metismenujs)

> MetisMenu: Collapsible menu plugin with Vanilla-JS

> This plugin does not support any version of IE browser.

Please consider following this project's author, [Osman Nuri Okumus](https://github.com/onokumus), and consider starring the project to show your :heart: and support.

- [Getting started](#getting-started)
  * [Install](#install)
  * [Download](#download)
- [Usage](#usage)
  * [Stopping list opening on certain elements](#stopping-list-opening-on-certain-elements)
- [Options](#options)
    + [toggle](#toggle)
    + [triggerElement](#triggerelement)
    + [parentTrigger](#parenttrigger)
    + [subMenu](#submenu)
- [API](#api)
    + [dispose](#dispose)
    + [update](#update)
- [Events](#events)
- [Migrating to v1.0.3 from v1.2.0](#migrating-to-v103-from-v120)
- [Demo](#demo)
- [About](#about)
  * [Related projects](#related-projects)
  * [Contributing](#contributing)
  * [Author](#author)
  * [License](#license)


## Getting started
### Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install metismenujs
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add metismenujs
```

Add project file to metismenu

```js
import MetisMenu from 'metismenujs';

// or
const MetisMenu = require('metismenujs');

// create new instance
const mm = new MetisMenu('#menu', {...});

// or call MetisMenu static attach method
const mm = MetisMenu.attach('#menu', {...})
```

Install with [composer](https://getcomposer.org/)

```sh
$ composer require onokumus/metismenujs:dev-master
```

### Download
[download](https://github.com/onokumus/metismenujs/archive/master.zip)

## Usage

1. Include metismenujs StyleSheet

  ```html
  <link rel="stylesheet" href="https://unpkg.com/metismenujs/dist/metismenujs.min.css">
  <!-- OR -->  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.min.css">
  ```

2. Include metismenujs plugin's code

  ```html
  <script src="https://unpkg.com/metismenujs/dist/metismenujs.min.js"></script>
  <!-- OR -->
  <script src="https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.min.js"></script>
  ```

3. Add class `metismenu` to unordered list

  ```html
  <ul class="metismenu" id="menu">

  </ul>
  ```
4. Make expand/collapse controls accessible

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
5. Arrow Options

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

6. Call the plugin:

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

#### toggle
Type: `Boolean`
Default: `true`

For auto collapse support.

```javascript
 new MetisMenu("#menu", {
   toggle: false
 });
```

#### triggerElement
Type: `css selector`
Default: `a`

```javascript
 new MetisMenu("#menu", {
   triggerElement: '.nav-link' // bootstrap 4
 });
```

#### parentTrigger
Type: `css selector`
Default: `li`

```javascript
 new MetisMenu("#menu", {
   parentTrigger: '.nav-item' // bootstrap 4
 });
```

#### subMenu
Type: `css selector`
Default: `ul`

```javascript
 new MetisMenu("#menu", {
   subMenu: '.nav.flex-column' // bootstrap 4
 });
```

## API
#### dispose

For stop and destroy metisMenu.

```javascript
 const mm = new MetisMenu("#menu");
 mm.dispose();
```

#### update

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

## Migrating to v1.0.3 from v1.2.0

- Update `metisMenu.js` & `metisMenu.css` files
- Change `active` class to `mm-active`

## Demo
[https://onokumus.com/metismenujs](https://onokumus.com/metismenujs)

Contains a simple HTML file to demonstrate metisMenu plugin.

## About

### Related projects
- [metismenu](https://www.npmjs.com/package/metismenu): A jQuery menu plugin | [homepage](https://github.com/onokumus/metismenu#readme "A jQuery menu plugin")
- [@metismenu/react](https://www.npmjs.com/package/@metismenu/react): react.js component for metismenu | [homepage](https://github.com/onokumus/metismenu-react#readme "react.js component for metismenu")

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author
**Osman Nuri Okumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2020, [Osman Nuri Okumus](https://github.com/onokumus).
Released under the [MIT License](LICENSE).
