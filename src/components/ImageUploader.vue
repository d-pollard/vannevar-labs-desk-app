<template>
  <form enctype="multipart/form-data" novalidate>
    <input ref="inputFile" type="file" multiple @change="addFile" accept="image/*" class="input-file">
    <button type="button" @click="openSelector">+</button>
  </form>
</template>

<script>
import resizeBase64Img from '@/helpers/resizeBase64Img'

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
      for (let i = 0; i < e.target.files.length; i++) {
        const reader = new FileReader()
        reader.onload = f => {
          // noinspection JSUnresolvedVariable
          resizeBase64Img(f.target.result, 60, 60).then(src => {
            this.$store.dispatch('files/addNewFile', { location: this.location, src })
          })
        }
        reader.readAsDataURL(e.target.files[i])
      }
    }
  }
}
</script>

<style scoped>
  .input-file {
    display: none;
  }
</style>
