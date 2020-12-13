<template>
  <div id="container">
    <h3>Last Christmas Nokkahuiluversio</h3>
    <iframe
        src="https://www.youtube-nocookie.com/embed/Wr1HySeEIe4"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
name: "Door15"
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