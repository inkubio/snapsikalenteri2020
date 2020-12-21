<template>
  <div id="container">
    <h3>Laita vaik S'napsi esittää: Tonttu</h3>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rK2PS9wvIbc" frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "Door22"
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
h3 {
  font-size: 1.4em;
}
iframe {
  height: calc(100% - 3.2em);
  width: auto;
}
</style>