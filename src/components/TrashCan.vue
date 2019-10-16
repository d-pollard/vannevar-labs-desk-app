<template>
  <div @dragover="dragover" @drop="drop" class="trash-can">
    <h3>Trash</h3>
  </div>
</template>

<script>
export default {
  name: 'TrashCan',
  data () {
    return { modalOpen: true, location: '', index: 0 }
  },
  methods: {
    deleteConfirmation () {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(({ value }) => {
        if (value) {
          const { index, location } = this
          this.$store.dispatch('files/remove', { index, location })
          this.$swal('Deleted!', 'Your file has been deleted.', 'success')
        }
        this.location = ''
        this.index = 0
      })
    },
    dragover: e => e.preventDefault(),
    drop (e) {
      e.preventDefault()
      e.stopPropagation()
      let { location, index } = JSON.parse(e.dataTransfer.getData('text'))
      this.location = location
      this.index = index
      this.deleteConfirmation()
    }
  }
}
</script>

<style scoped>
  .trash-can {
    border: 1px solid red;
    margin-top: 10px;
  }
</style>
