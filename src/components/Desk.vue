<template>
  <div @drop="drop" @dragover="dragover" class="desk">
    <DeskBox type="in"/>
    <DeskBox type="out" />
    <DragImage v-for="(item, i) in items" :src="item.src" location="desk" :id="item.id" :key="`desk-${item.id}`" :style="styler(item, i)" />
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
      let { src, location: oldLocation, id } = JSON.parse(e.dataTransfer.getData('text'))
      this.$store.dispatch('files/move', { oldLocation, newLocation: 'desk', id, src, x, y })
    },
    styler (item, i) {
      return { position: 'absolute', left: `${item.x - 70}px`, top: `${item.y - 70}px`, zIndex: 100 - i }
    }
  }
}
</script>

<style scoped>
  .desk {
    border: 1px solid #2c3e50;
    height: 60vh;
    z-index: 10000;
  }
</style>
