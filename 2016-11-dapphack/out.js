const normcore = require('normcore')

const feed2 = normcore(process.env.key, { live: true })
feed2.createReadStream().on('data', function (data) {
  console.log('feed2: ' + data.toString())
})
