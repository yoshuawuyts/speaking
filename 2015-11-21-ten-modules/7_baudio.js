const baudio = require('baudio')

// beep
// var n = 0
// var b = baudio(function (t) {
//   const x = Math.sin(t * 262 + Math.sin(n))
//   n += Math.sin(t)
//   return x
// })

// crackle
// var b = baudio(function (t, i) {
//   return ((
//     (i & 0x71) * Math.floor(i / 3571) * Math.floor(i / 3559)
//   ) % 256) / 128 - 1
// })

// ramp
var b = baudio(function (t, i) {
  var n = 28
  var c = 10 * (1 + Math.sin(i / 20000) / 10000)
  return Math.sin(
    (t % 15) * 150 * (t % 30) * Math.floor(Math.sin(t) * 5)
    ) + (t << 3) * (t & 0x7f) / 256 + Math.sin(t * 5000) * Math.max(0, Math.sin(t * n + c * Math.sin(t * 20)))
})

setInterval(function () {
  b.play()
}, 100)
