const mount = require('choo/mount')
const html = require('choo/html')
const css = require('sheetify')
const log = require('choo-log')
const choo = require('choo')

module.exports = function (slides) {
  const app = choo()
  app.use(log())

  app.model({
    namespace: 'slides',
    state: {
      slide: (function () {
        const loc = window.location.hash.replace('#', '')
        return (!loc) ? 0 : Number(loc.replace('slide-', ''))
      })(),
      max: slides.length - 1
    },
    reducers: {
      set: function (state, data) {
        return { slide: data }
      }
    },
    effects: {
      left: function (state, data, send, done) {
        const num = state.slide - 1
        const uri = (num <= 0) ? '/' : '#slide-' + num
        if (!(num < 0)) {
          send('slides:set', num, function () {
            send('location:set', uri, done)
          })
        }
      },
      right: function (state, data, send, done) {
        const num = state.slide + 1
        const uri = '#slide-' + num
        if (!(num > state.max)) {
          send('slides:set', num, function () {
            send('location:set', uri, done)
          })
        }
      }
    },
    subscriptions: {
      keydown: (send, done) => {
        document.body.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft' || e.key === 'h') send('slides:left', done)
          if (e.key === 'ArrowRight' || e.key === 'l') send('slides:right', done)
        })
      }
    }
  })

  app.router(slides.map((slide, i) => {
    const index = (!i) ? '/' : 'slide-' + i
    return [index, wrap(slide)]

    function wrap (slide) {
      return function () {
        // we gotta deep clone nodes or else vdom mutation
        // comes to ruin the party
        return html`
          <body
            style="height: 100vh;"
            class=${'flex justify-center items-center tc'}>
            ${slide.cloneNode(true)}
          </body>
        `
      }
    }
  }))

  mount('body', app.start())
}
