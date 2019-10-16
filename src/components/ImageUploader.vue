<template>
  <form enctype="multipart/form-data" novalidate>
    <input ref="inputFile" type="file" multiple @change="addFile" accept="image/*" style="display: none">
    <button type="button" @click="openSelector">+</button>
  </form>
</template>

<script>
import Hashids from 'hashids'
const hashids = new Hashids()

export default {
  props: {
    location: {
      type: String,
      validator (value) {
        return ['inbox', 'outbox'].indexOf(value) !== -1
      }
    }
  },
  name: 'ImageUploader',
  methods: {
    openSelector () {
      this.$refs.inputFile.click()
    },
    addFile (e) {
      let newFiles = []
      let cnt = 0
      for (let i = 0; i < e.target.files.length; i++) {
        const reader = new FileReader()
        reader.onload = f => {
          newFiles.push({ src: f.target.result, id: hashids.encode(Date.now(), f.total) })
          cnt++
          if (cnt === e.target.files.length) this.$store.dispatch('files/add', { location: this.location, newFiles })
        }
        reader.readAsDataURL(e.target.files[i])
      }
    }
  }
}
</script>

<style scoped>

</style>
