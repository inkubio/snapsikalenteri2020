<template>
  <div id="contain">
    <p id="intro">
      Fuksit 2020 toivottavat mitä parhainta joulumieltä, olkoon joulunne piparintuoksuinen, lämminhenkinen ja rauhallinen!
    </p>
    <div class="divider"/>
    <div id="expVsReality">
      <img id="expectations" src="@/assets/data/door1/1-fuksi_expectations.jpg" alt="Expectations">
      <img id="reality" src="@/assets/data/door1/2-fuksi_reality.jpg" alt="Expectations">
    </div>
    <div class="divider"/>
    <img id="joulusitsit" src="@/assets/data/door1/3.jpg" alt="Expectations">
  </div>
</template>

<script>
export default {
name: "Door1"
}
</script>

<style scoped>
.divider {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 2px;
  min-height: 2px;
  width: 80%;
  background-color: #8a8a8a;
  z-index: 5;
}
#contain {
  margin-top: 15px;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
#expVsReality {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
#expectations {
  width: 45%;
  height: auto;
}
#reality {
  width: 45%;
  height: auto;
}
#joulusitsit {
  width: 50%;
  height: auto;
}
#intro {
  font-size: 1.2em;
}
</style>