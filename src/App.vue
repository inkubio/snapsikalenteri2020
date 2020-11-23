<template>
  <div id="app">
    <Background />
  </div>
</template>

<script>

import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    Background,
  }
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
}
</style>
