const boleStream = require('bole-stream')
const httpNdjson = require('http-ndjson')
const stdout = require('stdout-stream')
const bole = require('bole')
const http = require('http')

bole.output({ level: 'debug', stream: stdout })
const logStream = boleStream({ level: 'debug' })

const server = http.createServer(function (req, res) {
  const httpLogger = httpNdjson(req, res)
  httpLogger.pipe(logStream, { end: false })
  res.end()
}).listen(8080)

http.get('http://localhost:8080', function (res) {
  server.close()
})

// ! node 5.js
// ! node 5.js | garnish
