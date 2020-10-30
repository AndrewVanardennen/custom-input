[![npm](https://img.shields.io/npm/dt/@andrewvanardennen/custom-input.svg?style=for-the-badge)](https://www.npmjs.com/package/@andrewvanardennen/custom-input)
[![David](https://img.shields.io/david/andrewvanardennen/custom-input.svg?style=for-the-badge)](https://github.com/andrewvanardennen/custom-input)


# custom-input
> A "minimal styled" input element.

## Install
> npm i --save @andrewvanardennen/custom-input

## Usage
```js
import 'custom-input'

customElements.define('my-el', class MyEL {
  constructor() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `
    <custom-input></custom-input>
    `
  }
})
```

```js
import 'custom-input'

customElements.define('my-el', class MyEL {
  constructor() {
    this.innerHTML = `
    <custom-input></custom-input>
    `
  }
})
```

```html
  <custom-input></custom-input>
  
  <script
    src="./node_modules/@andrewvanardennen/custom-input/custom-input.js"
    type="module">
  </script>
```

## API
### styling

--custom-input-background<br>
--custom-input-color<br>
--custom-input-placeholder-color<br>

## Powered By
* [customElements@v1](https://developers.google.com/web/fundamentals/web-components/customelements)