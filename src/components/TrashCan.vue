<template>
  <div @dragover="dragover" @drop="drop" class="trash-can">
    <h3>Trash</h3>
  </div>
</template>

<script>
export default {
  name: 'TrashCan',
  data () {
    return { modalOpen: true, location: '', id: '' }
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
          const { id, location } = this
          this.$store.dispatch('files/remove', { id, location })
          this.$swal('Deleted!', 'Your file has been deleted.', 'success')
        }
        this.location = ''
        this.id = ''
      })
    },
    dragover: e => e.preventDefault(),
    drop (e) {
      e.preventDefault()
      e.stopPropagation()
      let { location, id } = JSON.parse(e.dataTransfer.getData('text'))
      this.location = location
      this.id = id
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
