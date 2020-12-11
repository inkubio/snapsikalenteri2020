<template>
  <div id="modal" class="modal" :style="styleObject">
    <div id="modal-container">
      <header id="nav">
        <h2>{{title}}</h2>
        <span @click="$emit('close')">╳</span>
      </header>
      <div id="content">
        <component :is="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: String,
    content: Object,
    styleObject: Object
  },
  mounted() {
    document.addEventListener('keydown', this.closeModal)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.closeModal)
  },
  methods: {
    closeModal(event) {
      if (event.key === 'Escape') {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
#modal {
  position: absolute;
  box-shadow: 0px 2px 3px 2px rgba(0,0,0,0.3);;
  z-index: 4;
}
.modal {
  left: 5%;
  top: 5%;
  right: 5%;
  bottom: 5%;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
}
#modal-container {
  padding: 1em;
  height: calc(100% - 2em);
}
#nav {
  display: flex;
  height: 4%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#content {
  height: 96%;
  overflow-y: scroll;
}
#content::-webkit-scrollbar {
  display: none;
}
</style>