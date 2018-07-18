# Vuetify.js confirm dialog

This module extends vuetify confirm dialog.

[![NPM Version][npm-image]][npm-url]

## Setup

Install the package from npm

```npm
npm install vuetify-confirm
```

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm)
```
Install with options or any of them:

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, {
  buttonTrueText: 'OK',
  buttonFalseText: 'On, ho',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 300,
  property: '$confirm'
})
```

property: '$confirm' will create property with this name in Vue prototype

## Usage

```js
this.$confirm('Do you really want to exit?').then(res => {
})
```

```js
let res = await this.$confirm('Do you really want to exit?', {title: 'Warning'})
if (res) {
  ...
}
```
*res* will be true or false

You can format your message with arbitrary HTML - make sure you don't include any user-provided content here:

```js
this.$confirm('Please do not do this.<br>Do you really want to exit?'}).then(res => {
})
```

[npm-image]: https://img.shields.io/npm/v/vuetify-confirm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/vuetify-confirm
