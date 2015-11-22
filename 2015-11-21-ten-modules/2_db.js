const level = require('level')

const db = level('/var/tmp/campdb')

db.put('foo', 'bar', function (err) {
  if (err) throw err
  console.log('done')
})
