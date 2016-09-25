// bankai start --entry=02_css.js
const css = require('sheetify')
const html = require('bel')

const prefix = css`
  :host {
    font-size: 200px;
  }
`

const el = html`
  <p class=${prefix}>
    hello you
  </p>
`

document.body.appendChild(el)
