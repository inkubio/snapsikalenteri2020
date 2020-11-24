<template>
  <div id="modal">
    <div id="container">
      <nav id="nav">
        <h2>{{title}}</h2>
        <span @click="$emit('close')">╳</span>
      </nav>
      <component :is="content" />
    </div>
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
#container {
  margin: 1em;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>