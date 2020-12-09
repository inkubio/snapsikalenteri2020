<template>
  <div id="container">
    <h3>Sʸnapsin joulusnapsi</h3>
    <a href="snapsi_joulusnapsi_etiketti.pdf">Tulosta tästä etiketti</a>
    <video controls poster="@/assets/data/door10/snapsin_joulusnapsi.png">
      <source src="@/assets/data/video/snapsi_joulusnapsi_valmis.mp4" type="video/mp4">
      Selaimesi ei tue html videoita.
    </video>
  </div>
</template>

<script>
export default {
name: "Door10"
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
video {
  height: calc(100% - 3.2em);
}
a {
  text-underline: none;
}

</style>