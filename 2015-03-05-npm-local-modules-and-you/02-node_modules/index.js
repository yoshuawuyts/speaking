const summary = require('server-summary')
const koa = require('koa')
const server = koa()

const port = 1337

server.use(function *() {
  this.body = 'Hello World'
})

server.listen(port, summary)
