<template>
  <div class="desk-box">
  <div class="desk-box-controls">
    <template v-if="boxType === 'inbox'">
      <ImageUploader :location="boxType" />
    </template>
    <template v-else>
      <button>clear</button>
    </template>
  </div>
  <DeskBoxPhotoStack :box-type="boxType" :items="items"/>
</div>
</template>

<script>
import ImageUploader from '@/components/ImageUploader'
import DeskBoxPhotoStack from '@/components/DeskBoxPhotoStack'
export default {
  components: { DeskBoxPhotoStack, ImageUploader },
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['in', 'out'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    boxType () {
      return `${this.type}box`
    },
    items () {
      return this.$store.state.files.list[this.boxType]
    }
  },
  name: 'DeskBox',
  methods: {

  }
}
</script>

<style scoped>
  .desk-box {
    position: relative;
    height: 220px;
    border: 1px solid blue;
    display: inline-block;
    width: 220px;
  }

  .desk-box-controls {
    margin-bottom: 10px;
  }
</style>
