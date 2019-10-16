<template>
  <div @drop="drop" @dragover="dragover" class="desk">
    <DeskBox type="in"/>
    <DeskBox type="out" />
    <DragImage v-for="(item, i) in items" :src="item.src" location="desk" :index="i" :key="`desk-${i}`" :style="styler(item, i)" />
  </div>
</template>

<script>
import DeskBox from '@/components/DeskBox'
import DragImage from '@/components/DragImage'

export default {
  name: 'Desk',
  components: { DeskBox, DragImage },
  computed: {
    items () {
      return this.$store.state.files.list.desk
    }
  },
  methods: {
    dragover: e => e.preventDefault(),
    drop (e) {
      e.preventDefault()
      e.stopPropagation()
      let { x, y } = e
      let { src, location: oldLocation, index: oldIndex } = JSON.parse(e.dataTransfer.getData('text'))
      this.$store.dispatch('files/move', { oldLocation, newLocation: 'desk', oldIndex, src, x, y })
    },
    styler (item, i) {
      return { position: 'absolute', left: `${item.x - 70}px`, top: `${item.y - 70}px`, zIndex: 100 - i }
    }
  }
}
</script>

<style scoped>
  .desk {
    border: 1px solid orangered;
    height: 60vh;
    overflow: hidden;
    z-index: 10000;
  }
</style>
