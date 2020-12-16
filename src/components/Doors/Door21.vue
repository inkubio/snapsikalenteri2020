<template>
  <div id="container">
    <h3>Hali 2021 esittää:</h3>
    <video controls>
      <source src="@/assets/data/video/hali21.mp4" type="video/mp4">
      Selaimesi ei tue html videoita.
    </video>
  </div>
</template>

<script>
export default {
  name: "Door21"
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
video {
  height: calc(100% - 3.2em);
}
</style>