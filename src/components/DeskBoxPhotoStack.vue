<template>
  <div class="photo-stack">
    <DragImage v-for="item in items" :src="item.src" :location="boxType" :id="item.id" :key="`${boxType}-${item.id}`" />
  </div>
</template>
<script>
import DragImage from '@/components/DragImage'
export default {
  name: 'DeskBoxPhotoStack',
  components: { DragImage },
  props: {
    boxType: {
      required: true,
      type: String
    },
    items: {
      required: true,
      type: Array
    }
  }
}
</script>
<style scoped>
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
    box-shadow: 0 1px 3px -2px rgba(0, 0, 0, .5);
    transition: all 0.3s ease-out;
  }

  .photo-stack img:nth-child(1) {
    z-index: 999;
  }

  .photo-stack img:nth-child(2) {
    transform: rotate3d(0, 0, 1, 3deg);
  }

  .photo-stack img:nth-child(3) {
    transform: rotate3d(0, 0, 1, -3deg);
  }

  .photo-stack img:nth-child(4) {
    transform: rotate3d(0, 0, 1, 2deg);
  }

  .photo-stack:hover img:nth-child(1) {
    transform: scale(1.02);
  }

  .photo-stack:hover img:nth-child(2) {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  .photo-stack:hover img:nth-child(3) {
    transform: translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  .photo-stack:hover img:nth-child(4) {
    transform: translate3d(2%, -5%, 0) rotate3d(0, 0, 1, 2deg);
  }

  .photo-stack:hover img:nth-child(5) {
    transform: translate3d(-5%, -2%, 0) rotate3d(0, 0, 1, 2deg);
  }
</style>
