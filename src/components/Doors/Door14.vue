<template>
  <div id="container">
    <h3>Sʸnapsin glögiresepti</h3>
    <a href="snapsi_jouluglogi_etiketti.pdf">Tulosta tästä etiketti</a>
    <video controls poster="@/assets/data/door14/snapsin_jouluglogi.png">
      <source src="@/assets/data/video/snapsi_jouluglogi.mp4" type="video/mp4">
      Selaimesi ei tue html videoita.
    </video>
  </div>
</template>

<script>
export default {
name: "Door14"
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
a {
  text-underline: none;
}

</style>