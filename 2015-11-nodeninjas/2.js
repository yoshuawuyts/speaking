const value = { foo: 'bar' }
validate(value, function (err, res) {
  if (err) return console.error(err)
  console.log(res)
})

// (obj, fn(err?, val?)) -> null
function validate (obj, cb) {
  if (!obj.baz) {
    const err = new Error('No baz property')
    return cb(err)
  }
  cb(null, 'success!')
}

// ! node 2.js
