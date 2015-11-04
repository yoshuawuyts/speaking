const boleStream = require('bole-stream')
const httpNdjson = require('http-ndjson')
const sizeStream = require('size-stream')
const stdout = require('stdout-stream')
const pumpify = require('pumpify')
const bole = require('bole')
const http = require('http')

bole.output({ level: 'debug', stream: stdout })
const logStream = boleStream({ level: 'debug' })

const server = http.createServer(function (req, res) {
  const httpLogger = httpNdjson(req, res)
  httpLogger.pipe(logStream, { end: false })

  const size = sizeStream()
  size.once('size', size => httpLogger.setContentLength(size))

  const sink = pumpify(size, res)
  sink.end('some very long response')
}).listen(8080)

http.get('http://localhost:8080', function (res) {
  server.close()
})

// ! node 6.js | jq .contentLength
