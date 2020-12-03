<template>
  <div id="container">
    <h3>Ännien luukku</h3>
    <p style="font-weight: bold">N+1 tapaa nauttia itsenäisyyspäivänä</p>
    <p style="font-style: italic">eli Tuntematon sotilas -juomapeli</p>
    <div id="options">
      <h4 style="width: 100%">Huikka, kun</h4>
      <ul>
        <li>Jotain räjähtää</li>
        <li>Kuvaan tulee tankki</li>
        <li>Joku puhuu venäjää</li>
        <li>Hahmo haavoittuu</li>
        <li>Hahmo kuolee</li>
        <li>Lähtökäskystä purnataan</li>
        <li>Konekiväärin kantamisesta purnataan</li>
        <li>Lammiosta puhutaan paskaa</li>
        <li>Rokka tekee jotain Rokkamaista</li>
      </ul>
    </div>
    <div id="huom">
      <p style="font-style: italic">Harkinnanvaraisia lisäsääntöjä, joilla illanvietto on takuulla onnistunut.</p>
      <p style="font-style: italic">Huom.! Ei suositella kellekään.</p>
    </div>
    <p><span style="font-weight: bold">Sarjatuli</span> - Vesiputous, kun kuuluu konekiväärin ääni</p>
    <p><span style="font-weight: bold">Suun pesu</span> - Huikka, kun joku sanoo perkele</p>
    <p><span style="font-weight: bold">Lentävä lähtö</span> - Kolme shottia, kun kuulet Finlandian</p>
    <p><span style="font-weight: bold">Omstart</span> - Katso 2017-versio perään samoilla säännöillä.</p>
    <p><span style="font-weight: bold">Omstart Tilttaamaan</span> - Katso 2017-versio perään samoilla säännöillä,
      plus vesiputous aina kun Robin on kuvassa.</p>
  </div>
</template>

<script>
export default {
  name: "Door5"
}
</script>

<style scoped>
#container {
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}
#options {
  margin: 20px 0;
}
#huom {
  margin: 15px 0;
}
h3 {
  font-size: 1.4em;
}
p {
  font-size: 1.2em;
}
h4 {
  font-size: 1.3em;
}
ul {
  align-self: center;
  list-style: none;
  font-size: 1.2em;
  padding: 0;
}

</style>