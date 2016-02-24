const nano = require('nanomsg')
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
