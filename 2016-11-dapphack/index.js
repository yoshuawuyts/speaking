const html = require('choo/html')
const css = require('sheetify')

css('tachyons')
css('./dat.css')

const slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        <span style="color: #24943A">DAT</span>
      </h1>
      <h2 class="f1 code bold ttu">
        Hyper technology
      </h2>
      <h2 class="f2 mt0 code bold">
        [ @dat_project / @yoshuawuyts ]
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu">
        HYPER TECHNOLOGY
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu underline">
        HYPER TECHNOLOGY !!!!
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu">
        [ freestyle ]
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu">
        [ demos et al ]
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Thank you!
      </h1>
      <h2 class="f2">
        Twitter / yoshuawuyts
      </h2>
      <h2 class="f2">
        GitHub / yoshuawuyts
      </h2>
    </main>
  `
]

require('./slider')(slides)
