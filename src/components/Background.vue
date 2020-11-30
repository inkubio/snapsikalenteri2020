<template>
  <div id="container">
    <img @load="onLoad" id="door1" class="door" v-bind:class="{hide: doors.door1}" src="@/assets/calendar_foreground.png" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door2" class="door" v-bind:class="{hide: doors.door2}" src="@/assets/calendar_foreground.png" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="background" src="@/assets/calendar_background.png" alt="Kiltis" >
  </div>
</template>

<script>

export default {
  name: "Background.vue",
  data () {
    return {
      doors: {
        door1: false,
        door2: false,
      },
      imagesLoaded: 0
    }
  },
  methods: {
    openDoor(event) {
      this.$set(this.doors, event.target.id, true)
      console.log(event.target.id)
      this.$emit('openDoor', event.target.id)
    },
    onLoad() {
      this.imagesLoaded++;
      if (this.imagesLoaded === 3) {
        this.$emit("loaded")
      }
    }
  },
  watch: {

  }
}
</script>

<style scoped>
#container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#container::-webkit-scrollbar { display: none; }
#background {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: auto;
  z-index: 0;
}
.door {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: auto;
  z-index: 1;
}
#door1 {
  transition: opacity 0.5s ease-in;
  clip-path: polygon(76% 6%, 22% 6%, 19% 23%, 22% 24%, 24% 22%, 66% 24%, 68% 28%, 71% 29%);


}
#door2 {
  transition: opacity 0.5s ease-in;
  clip-path: polygon(62% 27%, 70% 27%, 70% 44%, 62% 44%);

}

.hide {
  opacity: 0;
}
</style>