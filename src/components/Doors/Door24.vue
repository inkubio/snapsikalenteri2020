<template>
  <div id="container">
    <h3>Hyvää joulua!</h3>
    <p>
      Haluamme toivottaa koko S’napsin puolesta oikein rauhallista ja turvallista joulua, sekä mahtavaa uutta vuotta
      2021!
    </p>
    <p id="paatoimittaja">- Päätoimittajat 2020 Sofia & Vilma</p>
    <img src="@/assets/data/door24/Joulukuva1.png" />
  </div>
</template>
<script>
export default {
  name: "Door24"
}
</script>

<style scoped>
h3 {
  font-size: 1.4em;
  margin-bottom: 1em;
  text-align: center;
}

p {
  font-size: 1.2em;
  margin: 1em auto;
  width: 100%;
  max-width: 600px;
}
img {
  max-width: 100%;
}
</style>