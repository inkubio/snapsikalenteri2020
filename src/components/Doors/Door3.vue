<template>
  <div id="container">
    <h3>
      3. Vuosikurssin luukku
    </h3>
    <iframe :src="url" frameborder="0" allow="encrypted-media;"></iframe>
  </div>
</template>

<script>
export default {
  name: "Door3",
  data() {
    return {
      url: "https://emil.fi/p/inku18luukku/",
    }
  }
}
</script>

<style scoped>
#container{
  width: 100%;
  height: 100%;
}
iframe {
  width: 95%;
  height: 97%;
}
</style>