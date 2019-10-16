<template>
  <img
    v-show="show"
    @dragstart="e => dragstartHandler(e)"
    draggable="true"
    :src="src"
    alt="draggable image"/>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  props: ['src', 'location', 'index'],
  name: 'DragImage',
  methods: {
    dragstartHandler (e) {
      let { src, location, index } = this
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'all'
      e.dataTransfer.setData('text/plain', JSON.stringify({ src, location, index }))
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
</style>
