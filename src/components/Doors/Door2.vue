<template>
  <div id="container">
    <h2>Inkubion tupsujen heijastintupsut</h2>
    <a href="luukku2.pdf" target="_blank">avaa pdf</a>
    <nav>
      <button @click="setTab(1)" :class="{active: tab==1}">
        Heijastintupsu
      </button>
      <button @click="setTab(2)" :class="{active: tab==2}">
        Pörröinen heijastintupsu
      </button>
    </nav>
    <div v-if="tab == 1" id="tupsu">
        <h3>Tarviset</h3>
      <p>heijastinkangasta, (jotain muuta venymätöntä kangasta), kangasliimaa, sakset, lankaa tai narua sekä
        avainrenkaan tai yritysbrunssilta kerätyn sponsoriheijastimen kiinnitysosan</p>
      <img src="@/assets/data/door2/Kuva1.jpg"/>
      <h3>Työvaiheet:</h3>
      <p>1. Leikkaa heijastinkankaasta ohuehkoja, noin 10 sentin paksuisia suikaleita.</p>
      <p>2. Leikkaa mistä tahansa venymättömästä kankaasta 2 hieman pidempää suikaletta. Liimaa  heijastinsuikaleet
        toiseen pidemmistä suikaleista. Liimaa heijastinsuikaleiden päälle toinen suikale.
        Paina kankaat tiiviisti yhteen ja anna kuivua.
      </p>
      <img src="@/assets/data/door2/Kuva2.jpg"/>
      <p>3. Kierrä kuivunut heijastinsuikalelevy rullalle. Kiinnitä rullan pää liimalla.
        Leikkaa heijastinkankaasta hieman leveämpi suikale ja liimaa tupsun yläosan ympärille. </p>
      <div id="step4">
        <img src="@/assets/data/door2/Kuva3.jpg"/>
        <img src="@/assets/data/door2/Kuva4.jpg"/>
      </div>
      <p>4. Halutessasi hapsuta tupsua lisää.</p>
      <img src="@/assets/data/door2/Kuva5.jpg"/>
      <p>5. Kiinnitä lanka ja avainrengas.</p>
      <p>6. Kiinnitä reppuun, takkiin tai haalareihin ja näy pimeässä.</p>
      <img src="@/assets/data/door2/Kuva6.jpg"/>
    </div>
    <div v-if="tab == 2" id="porrotupsu">
      <img src="@/assets/data/door2/kuva_tupsut1.jpg"/>
      <h3>Tarviset:</h3>
      <p>Neulelankaa valitsemassasi värissä, heijastinkangasta tai heijastinlankaa, sakset,
        lemppari pakastepizzasi pahvin, kynän </p>
      <h3>Työvaiheet:</h3>
      <p>
        1. Ota suosikkipakastepizzasi laatikko ja leikkaa siitä kaksi identtistä puolikaaren muotoista palaa.
        Mitä kapeampi kaari, sitä tuuheampi tupsustasi todennäköisesti tulee.
        Leikkaa neulelangasta noin 30 cm pituinen pätkä (kolme, jos haluat tehdä letin).
        Tästä tulee tupsusi kiinnityslanka.
      </p>
      <img src="@/assets/data/door2/kuva_tupsut2.jpg"/>
      <p>
        2. Ota pahvinpalat ja aseta kiinnityslanka niiden väliin.
        Ota lankakerä ja ala kierittämään lankaa kahden pahvinpalan ympäri, niin,
        että kiinnityslanka jää pahvinpalojen väliin.
      </p>
      <img src="@/assets/data/door2/kuva_tupsut3.jpg"/>
      <p>
        3. Jatka langan kierittämistä. Jos haluat tupsustasi monivärisen, vaihda lankaa joillakin kierroksilla.
        Leikkaa heijastinkankaasta pitkiä ohuita suikaleita ja kieritä niitä lankakerrosten väliin.
        Jatka kunnes lankaa on tarpeeksi: mitä enemmän kerroksia, sitä tuuheampi tupsu.
        Kerroksia tulisi kuitenkin olla sen verran että lankoja pääsee leikkaamaan saksilla.
      </p>
      <p>
        4. Kun lankakerroksia on tarpeeksi, katkaise lanka. Ota sakset ja pujota ne pahvien väliin.
        Leikkaa langat poikki puolikaaren ulkoreunaa pitkin, mutta varo leikkamasta kiinnityslankaa.
        Kiristä kiinnityslankaa välillä, jotteivät langanpätkät lähde karkuun.
      </p>
      <img src="@/assets/data/door2/kuva_tupsut4.jpg"/>
      <p>
        5. Poista pahvinpalat ja solmi kiinnityslanka mahdollisimman tiukasti.
        Halutessasi voit trimmata tupsua tasaisemmaksi.
      </p>
      <p>
        6. Tadaa, tupsu on valmis!
      </p>
      <img src="@/assets/data/door2/kuva_tupsut5.jpg"/>
    </div>
  </div>

</template>

<script>
export default {
  name: "Door2",
  data () {
    return {
      tab: 1
    }
  },
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  h3 {
    font-size: 1.5em;
  }
  p {
    width: 70%;
    font-size: 1.2em
  }
}
#tupsu {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#porrotupsu {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  text-align: center;
}
#step4 {
  display: flex;
  width: 100%;
  justify-content: center;
}
img {
  padding: 5px;
  width: 45%;
  max-width: 300px;
}
button {
  margin: 10px;
  width: 200px;
  height: 30px;
  background: none;
  color: inherit;
  font: inherit;
  outline: inherit;
  border: 2px solid green;
  border-radius: 10px;
  padding: 0;
}

.active {
  background-color: green;
}
</style>