# Vuetify.js confirm dialog

This module extends vuetify confirm dialog.

[![NPM Version][npm-image]][npm-url]

## Demo page
[See the demo](https://q5w2v.csb.app/)

[Open the demo in Codesandbox](https://codesandbox.io/s/vuetify-2-confirm-example-q5w2v)

## Setup

Install the package from npm

```npm
npm install vuetify-confirm
```



## vuetify 2

> Important: since vuetify2 you should put instance of vuetify into config

```javascript
const vuetify = new Vuetify(...)
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, { vuetify })
```
....

### Installation in Nuxt
In nuxt create and register plugin `plugins/dialog.js`

```js
import Vue from 'vue'
import VuetifyConfirm from 'vuetify-confirm'

export default ({ app }) => {
  Vue.use(VuetifyConfirm, { vuetify: app.vuetify })
}
```

## vuetify 1
For vuetify 1 please use [0.2.6 version](https://www.npmjs.com/package/vuetify-confirm/v/0.2.6)

## Installation options

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Accept',
  buttonFalseText: 'Discard',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})
```

property: '$confirm' will create property with this name in Vue prototype

## Params
 - message: String, required
 - options: Object
    - buttonTrueText: String
    - buttonFalseText: String
    - color: String
    - icon: String
    - title: String
    - width: Number
    - persistent: Boolean
## Usage

```js
this.$confirm('Do you really want to exit?').then(res => {
})
```

```js
const res = await this.$confirm('Do you really want to exit?', { title: 'Warning' })
if (res) {
  ...
}
```
*res* will be true or false

You can format your message with arbitrary HTML - make sure you don't include any user-provided content here:

```js
const res = await this.$confirm('Please do not do this.<br>Do you really want to exit?')
console.log(res)
```

Also you can press Enter or Esc keys for choose confirm result

[npm-image]: https://img.shields.io/npm/v/vuetify-confirm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vuetify-confirm
