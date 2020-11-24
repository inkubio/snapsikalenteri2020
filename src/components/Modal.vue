<template>
  <div id="modal">
    <h2>{{title}}</h2>
    <button @click="$emit('close')">Close</button>
    <component :is="content" />
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: String,
    content: Object
  }
}
</script>

<style scoped>
#modal {
  position: absolute;
  left: 5%;
  top: 5%;
  right: 5%;
  bottom: 5%;
  background-color: white;
  box-shadow: 0px 2px 3px 2px rgba(0,0,0,0.3);;
  z-index: 4;
}
</style>