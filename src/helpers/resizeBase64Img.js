export default function resizeBase64Img (base64, width, height) {
  let canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  let context = canvas.getContext('2d')
  return new Promise((resolve) => {
    let img = document.createElement('img')
    img.onload = function () {
      context.scale(width / this.width, height / this.height)
      context.drawImage(this, 0, 0)
      let fin = canvas.toDataURL()
      canvas.remove()
      img.remove()
      return resolve(fin)
    }
    img.src = base64
  })
}
