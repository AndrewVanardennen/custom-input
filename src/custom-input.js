'use strict';
import RenderMixin from './../../custom-renderer-mixin/src/render-mixin.js';

export default (() => {
  class CustomInput extends RenderMixin(HTMLElement) {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    set type(val) {
      this.input.setAttribute('type', val);
    }
    set placeholder(val) {
      this.input.setAttribute('placeholder', val);
    }
    set value(val) {
      this.input.setAttribute('value', val);
    }
    get input() {
      return this.shadowRoot.querySelector('input');
    }
    get value() {
      return this.input.value;
    }

    addListener(name, cb) {
      if(name === 'input' || name === 'change') {
        this.input.addEventListener(name, cb);
      } else {
        this.addEventListener(name, cb);
      }
    }

    get template() {
      return html`
        <style>
          :host {
            display: block;
            height: var(--custom-input-height, 48px);
            background: var(--custom-input-background, transparent);
            width: 100%;
            box-shadow: 0px 1px 3px -1px #333;
            min-width: 240px;
          }
          input {
            --webkit-visibility: none;
            border: none;
            background: transparent;
            height: var(--custom-input-height, 48px);
            width: 100%;
          }
        </style>
        <input></input>
      `;
    }
  };
  customElements.define('custom-input', CustomInput)
})();
