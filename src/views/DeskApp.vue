<template>
  <div>
    <h3>Minimalist Desktop App</h3>
    <Desk />
    <TrashCan />
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
