<template>
  <div id="container">
    <h3>Joulusoittolista</h3>
    <p>
      Musiikki, tuo ihana elämänilon lähde… Vaikka kiltamme defacto syyslista onkin Last Christmas variaatiot et al,
      voi vaihtelu joskus virkistää. Tiede on vihdoin löytänyt täydellisen joululaulun, joka yhdistää kaikki oleelliset
      elementit riemukkaaksi rallatukseksi:
      <a href="https://www.fi.edu/science-just-created-the-ultimate-christmas-song">Ultimaattinen joululaulu</a><br>
      Valitettavasti kyseistä biisiä ei kuitenkaan löydy spotifysta, joten tilanne oli jotenkin korjattava. S’napsin toimittajat ottivat ohjat omiin käsiinsä.
    </p>
    <p>
      Tässä onkin inkubiittien oma joululaululista! Listalle on kuratoitu 20 erilaista ja -makuista kipaletta
      jouduttamaan joulunodotusta. Tarkoituksena on, että lista olisi kiltamme jäsenten näköinen, joten toivomme
      ihmisten lisäävän itselleen tärkeitä joululauluja jatkamaan listaa. Vältetään kuitenkin kokonaisten albumien
      spämmimistä, jotta jokaisella biisillä on mahdollisuus tulla kuulluksi. 🌲🎅
    </p>
    <p>P.s. kannattaa tutustua myös listan biisien albumeihin fiiliksen mukaan!</p>
    <p>P.p.s Sisältövaroitus: Mikäli osallistut Whamageddoniin, suosittelemme varovaisuutta.</p>
    <iframe
        id="playlist"
        src="https://open.spotify.com/embed/playlist/4tPPXi84WRREjzHjoxsPHo"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media">
    </iframe>
  </div>
</template>

<script>
export default {
name: "Door7"
}
</script>

<style scoped>
h3 {
  font-size: 1.4em;
}
p {
  font-size: 1.2em;
  margin: 0.5em 0;
}
#container {
  height: 100%;
}
#playlist {
  height: 100%;
  width: 100%;
}
</style>