const through = require('through2')

const rs = process.stdin
const ts = grep(/foo/)
const ws = process.stdout
rs.pipe(ts).pipe(ws)

function grep (regex) {
  return through(function (chunk, enc, cb) {
    const str = String(chunk)
    if (regex.test(chunk)) this.push(str.toUpperCase())
    cb()
  })
}
