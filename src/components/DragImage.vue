<template>
  <img :class="{ highlight }" @dragstart="dragstartHandler" @dragend="dragendHandler" draggable="true" :src="src" alt="draggable image"/>
</template>

<script>
export default {
  props: {
    src: { required: true, type: String },
    location: { required: true, type: String },
    id: { required: true, type: String }
  },
  name: 'DragImage',
  data () {
    return { dragImage: null, highlight: false }
  },
  beforeMount () {
    this.dragImage = this.handleImage(this.src, Math.random() * 100)
  },
  beforeDestroy () {
    this.dragImage.remove()
  },
  methods: {
    dragstartHandler (e) {
      this.highlight = true
      let { src, location, id, dragImage } = this
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'all'
      e.dataTransfer.setDragImage(dragImage, 80, 80)
      e.dataTransfer.setData('text/plain', JSON.stringify({ src, location, id }))
      // return false
    },
    dragendHandler () {
      this.highlight = false
    },
    handleImage (src, r) {
      const div = document.createElement('div')
      div.style.width = '160px'
      div.style.height = '160px'
      div.style.position = 'fixed'
      div.style.top = '-1000000px'
      div.style.left = '-1000000px'
      div.style.border = '1px solid red'
      div.className = `element-${r}`

      div.style.backgroundImage = `url(${src})`
      div.style.backgroundSize = `cover`
      div.style.backgroundRepeat = `no-repeat`
      div.style.backgroundPosition = `center center`

      document.body.appendChild(div)
      return div
    }
  }
}
</script>

<style scoped>
  img {
    width: 160px;
    height: 160px;
    cursor: grab;
    border: 1px solid white;
    box-shadow: 0 1px 3px -2px rgba(0, 0, 0, .5);
  }
  img:active {
    cursor: grabbing;
  }
  .highlight {
    border: 1px solid red;
  }
</style>
