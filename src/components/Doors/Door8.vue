<template>
  <div id="container">
    <h3>Jouluresepti – Fudge</h3>
    <video controls>
      <source src="@/assets/data/video/Fudge2.mp4" type="video/mp4">
      Selaimesi ei tue video tagia
    </video>
  </div>
</template>

<script>
export default {
  name: "Door8"
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
h3 {
  font-size: 1.4em;
}
p {
  font-size: 1.2em;
}
video {
  height: calc(100% - 2.3em);
}


</style>