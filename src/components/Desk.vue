<template>
  <div @drop="drop" @dragover="dragover" class="desk" id="desk">
    <DeskBox type="in"/>
    <DeskBox type="out" />
    <template v-if="ready">
      <DragImage
        v-for="(item, i) in items"
        :src="item.src"
        :id="item.id"
        :key="`desk-${item.id}`"
        location="desk"
        :style="styler(item, i)" />
    </template>
  </div>
</template>

<script>
import DeskBox from '@/components/DeskBox'
import DragImage from '@/components/DragImage'
import { boundedElementStyle } from '@/helpers/positionDimension'

export default {
  name: 'Desk',
  components: { DeskBox, DragImage },
  computed: {
    items () {
      return this.$store.state.files.list.desk
    }
  },
  mounted () {
    this.ready = true
  },
  data () {
    return {
      ready: false
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
      return boundedElementStyle(item, i)
    }
  }
}
</script>

<style scoped>
  .desk {
    border: 1px solid #2c3e50;
    height: 60vh;
    position: relative;
    z-index: 1000;
  }
</style>
