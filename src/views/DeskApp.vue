<template>
  <div>
    <h3>Minimalist Desk App</h3>
    <Desk />
    <div style="position: fixed">
      <TrashCan />
    </div>
  </div>
</template>

<script>
import Desk from '@/components/Desk'
import TrashCan from '@/components/TrashCan'
export default {
  name: 'DesktopApp',
  components: { TrashCan, Desk }
}
</script>

<style scoped>

</style>
