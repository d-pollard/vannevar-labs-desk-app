<template>
  <div class="desk">
    <DeskBox type="in"/>
    <DeskBox type="out" />
  </div>
</template>

<script>

import DeskBox from '@/components/DeskBox'
export default {
  name: 'Desk',
  components: { DeskBox }
}
</script>

<style scoped>
  .desk {
    border: 1px solid orangered;
    height: 60vh;
  }
</style>
