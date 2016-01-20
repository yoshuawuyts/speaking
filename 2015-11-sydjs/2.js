const stream = require('stream')

// primitive .pipe()
const stream1 = new stream.PassThrough()
const stream2 = new stream.PassThrough()

process.stdin.pipe(stream1)

stream1.on('readable', function () {
  stream1.on('data', function (data) {
    stream2.write(String(data).toUpperCase())
  })
  stream1.on('end', function () {
    stream2.end()
  })
})

stream2.pipe(process.stdout)
