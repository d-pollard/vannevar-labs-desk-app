<template>
  <div :class="`desk-box ${boxType}`" @drop="drop">
    <div class="desk-box-controls">
      <template v-if="boxType === 'inbox'">
        <ImageUploader :location="boxType" />
      </template>
      <template v-else>
        <button @click="clear">clear</button>
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
    drop (e) {
      e.preventDefault()
      e.stopPropagation()
      let { boxType: newLocation } = this
      let { src, location: oldLocation, id } = JSON.parse(e.dataTransfer.getData('text'))
      this.$store.dispatch('files/move', { oldLocation, newLocation, id, src })
    },
    clear () {
      let pluralize = (cnt, word) => cnt > 1 ? `${cnt} ${word}s` : `${cnt} ${word}`
      if (this.items.length) {
        this.$swal({
          target: document.body,
          title: 'Are you sure?',
          text: `You'll be removing ${pluralize(this.items.length, 'item')} from your ${this.boxType}!`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(({ value }) => {
          if (value) this.$store.dispatch('files/clear', this.boxType)
        })
      }
    }
  }
}
</script>

<style scoped>
  .desk-box {
    position: relative;
    height: 220px;
    border-bottom: 1px solid #2c3e50;
    display: inline-block;
    width: 220px;
    z-index: 1000;
    background: #42b983;
  }
  .inbox {
    float: left;
    border-right: 1px solid #2c3e50;
  }
  .outbox {
    float: right;
    border-left: 1px solid #2c3e50;
  }
  .outbox:after {
    clear: both;
  }
  .desk-box-controls {
    margin-bottom: 10px;
  }
</style>
