# Vuetify.js confirm dialog

This module extends vuetify confirm dialog.

[![NPM Version][npm-image]][npm-url]

## Demo page

[See demo here](https://yariksav.github.io/demo-vuetify-confirm.html)

## Setup

Install the package from npm

```npm
npm install vuetify-confirm
```

> Important: since vuetify2 you should put instance of vuetify into config

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, { vuetify })
```
Install with options or any of them:

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
let res = await this.$confirm('Do you really want to exit?', { title: 'Warning' })
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

[npm-image]: https://img.shields.io/npm/v/vuetify-confirm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vuetify-confirm
