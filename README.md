# Vuetify.js confirm dialog

This module extends vuetify confirm dialog.

## Setup

Install the package from npm

```npm
npm install vuetify-confirm
```

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm)
```
Install with options:

```javascript
import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, {
  buttonTrueText: 'OK',
  buttonFalseText: 'On, ho',
  color: 'warning',
  icon: 'warning',
  property: '$confirm'
})
```

## Usage

```js
let res = await this.$confirm('Do yo really want to exit?', {title: 'Warning'})
if (res) {
  ...
}
```
