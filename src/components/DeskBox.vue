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
    <div class="photo-stack">
      <img v-for="(i, n) in items" :key="`${boxType}Image${n}`" :src="i.src" alt="box image" />
    </div>
  </div>
</template>

<script>
import ImageUploader from '@/components/ImageUploader'
export default {
  components: { ImageUploader },
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
      return this.$store.state.files.list.filter(({ location }) => location === this.boxType)
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

  .photo-stack {
    position: relative;
    margin: auto;
    width: 160px;
    height: 160px;
  }
  .photo-stack img {
    width: 160px;
    height: 160px;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid white;
    box-shadow: 0 1px 3px -2px rgba(0,0,0,.5);
    transition: all 0.3s ease-out;
  }
  .photo-stack img:nth-child(1) {
    z-index: 999;
  }
  .photo-stack img:nth-child(2) {
    transform: rotate3d(0,0,1,3deg);
  }
  .photo-stack img:nth-child(3) {
    transform: rotate3d(0,0,1,-3deg);
  }
  .photo-stack img:nth-child(4) {
    transform: rotate3d(0,0,1,2deg);
  }

  .photo-stack:hover img:nth-child(1) {
    transform: scale(1.02);
  }
  .photo-stack:hover img:nth-child(2) {
    transform: translate3d(10%, 0, 0) rotate3d(0,0,1,3deg);
  }
  .photo-stack:hover img:nth-child(3) {
    transform: translate3d(-10%, 0, 0) rotate3d(0,0,1,-3deg);
  }
  .photo-stack:hover img:nth-child(4) {
    transform: translate3d(2%, -5%, 0) rotate3d(0,0,1,2deg);
  }
  .photo-stack:hover img:nth-child(5) {
    transform: translate3d(-5%, -2%, 0) rotate3d(0,0,1,2deg);
  }
</style>
