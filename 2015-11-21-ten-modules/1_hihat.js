const toBuffer = require('electron-canvas-to-buffer')

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

const gradient = context.createLinearGradient(0, 0, width, 0)
gradient.addColorStop(0, '#f39821')
gradient.addColorStop(1, '#f321b0')
 
context.fillStyle = gradient
context.fillRect(0, 0, width, height)
 
process.stdout.write(toBuffer(canvas, 'image/png'))
window.close()

// hihat render.js --node --exec > image.png
// says --voice=daniel 'bond, james bond'
