const normcore = require('normcore')

const feed = normcore('hei')
console.log(feed.key.toString('hex'))
feed.append('hello')
