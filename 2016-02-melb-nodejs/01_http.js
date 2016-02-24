const summary = require('server-summary')
const toJson = require('body/json')
const nano = require('nanomsg')
const http = require('http')
const pbuf = require('pbs')

const addr = 'tcp://127.0.0.1:5556'

const msg = pbuf(`
  message Climate {
    repeated Weather weather = 1;

    message Weather {
      required string city = 1;
      required uint32 temperature = 2;
      required string unit = 3;
    }
  }
`)

// encode / publish
const encoder = msg.Climate.encode()
const pub = nano.socket('pub')
pub.bind(addr)
encoder.pipe(pub)

// decode / subscribe
const decoder = msg.Climate.decode()
const sub = nano.socket('sub')
sub.connect(addr)
sub.pipe(decoder)

// worker function
decoder.weather(function (w, cb) {
  const msg = 'Temperature in ' + w.city +
    ' is ' + w.temperature + ' degrees ' + w.unit
  console.log(msg)
  cb()
})

// server
const server = http.createServer(function (req, res) {
  toJson(req, res, function (err, data) {
    if (err) {
      res.statusCode = 404
      return res.end('Error: invalid JSON')
    }
    try {
      encoder.weather(data)
      res.end()
    } catch (e) {
      res.end(e.message)
    }
  })
})
server.listen('1337', summary(server, process.stdout))
