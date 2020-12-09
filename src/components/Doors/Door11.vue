<template>
  <div id="container">
    <h3>Rumat joulupaidat</h3>
    <p>
      Oletko aina haaveillut rumasta joulupaidasta tai eikö sinulla vain ole mitään päällepantavaa uhkaavasti
      lähestyviin pikkujouluihin? Täydellisen joulupaidan löytäminen voi olla haastavaa, sillä monet vaatekauppojen
      “joulupaidat” ovat vähän turhan ihastuttavia. Jos haluat joulupaidastasi oikeasti omannäköisesi ja ruman niin
      tee se itse! S’napsin toimittajat Anna ja Rosanna tonkivat kaapinpohjilta kaikki turhimmatkin roinat ja loihtivat
      niistä itselleen joulupaidat.
    </p>
    <div id="shirts">
      <div class="shirt">
        <img src="@/assets/data/door11/annapaita.jpg" />
        <p>
          Tässä paidassa yhdistyvät joulun lämmin hehku ja se tärkein, eli lahjat joulusukan muodossa.
          Pehmoiseen sukkaan voit kätkeä niin konvehtirasiasta viedyt marmeladisydämet kuin tuhmat viestit pukille.
        </p>
      </div>
      <div class="shirt">
        <img src="@/assets/data/door11/rosannapaita.jpg" />
        <p>
          Paidassa perinteinen lumiukko on nostanut kytkintä, jättänyt Brittien maaseudun taakseen ja muuttanut Lohjalle.
          Korona-aikaan kuuluvasti matkasta löytyy desinfioivia pyyhkeitä sekä kaulahuivi.
        </p>
      </div>
    </div>
    <p id="end">
      S’napsi kannustaakin nyt kaikkia inkubiittejä liittymään joulupaitaliikkeeseen ja askartelemaan itselleen rumat
      joulupaidat kotoa löytyvistä tarvikkeista! Postaa kauhea luomuksesi inkubiochattiin jos uskallat!!
    </p>
  </div>
</template>

<script>
export default {
name: "Door11"
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
#shirts {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;

  font-size: 0.9rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1em auto;
}
.shirt {
  flex-basis: content;
  width: 400px;
  margin: 1em auto 0 auto;
}
.shirt > p {
  margin: 0 auto;
  text-align: center;
}
img {
  width: 100%;
  max-width: 400px;
}
p {
  font-size: 1.2em;
}
</style>