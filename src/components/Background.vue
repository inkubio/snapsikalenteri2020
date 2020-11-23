<template>
  <div id="container">
    <img id="background" src="@/assets/background.jpg" alt="Kiltis" >
  </div>
</template>

<script>
export default {
name: "Background.vue"
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#container::-webkit-scrollbar { display: none; }
#background {
  left: 0;
  top: 0;
  height: 100vh;
  width: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>