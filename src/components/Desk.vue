<template>
  <div class="desk">
    <div class="outbox">
      <ImageUploader location="outbox" />
      <img class="box-image" v-for="(i, n) in outbox" :src="i.src" :key="`outboxImage${n}`" alt="outbox image" />
    </div>
    <div class="inbox">
      <ImageUploader location="inbox" />
      <img class="box-image" v-for="(i, n) in inbox" :src="i.src" :key="`inboxImage${n}`" alt="inbox image" />
    </div>
    <div>
      sizeof file {{JSON.stringify(files).length}} bytes
    </div>
  </div>
</template>

<script>

import ImageUploader from '@/components/ImageUploader'
export default {
  name: 'Desk',
  components: { ImageUploader },
  computed: {
    files () {
      return this.$store.state.files.list
    },
    outbox () {
      return this.files.filter(({ location }) => location === 'outbox')
    },
    inbox () {
      return this.files.filter(({ location }) => location === 'inbox')
    }
  }
}
</script>

<style scoped>
  .box-image {
    width: 60px;
    height: 60px;
  }
</style>
