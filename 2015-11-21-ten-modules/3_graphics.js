const gl = require('gl')(512, 512, { preserveDrawingBuffer: true })
const triangle = require('a-big-triangle')
const save = require('save-pixels')
const Shader = require('gl-shader')
const ndarray = require('ndarray')
const fs = require('fs')

const pixels = new Uint8Array(512 * 512 * 4)
const frag = fs.readFileSync('index.frag', 'utf8')
const vert = fs.readFileSync('index.vert', 'utf8')
const shader = Shader(gl, vert, frag)

shader.bind()
shader.uniforms.iResolution = [512, 512]
shader.uniforms.iGlobalTime = 0
triangle(gl)

gl.readPixels(0, 0, 512, 512, gl.RGBA, gl.UNSIGNED_BYTE, pixels)

save(ndarray(pixels, [512, 512, 4]).transpose(1, 0, 2).step(-1, -1), 'png')
  .pipe(fs.createWriteStream('gl.png'))
