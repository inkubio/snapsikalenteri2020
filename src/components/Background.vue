<template>
  <div id="container">
    <img id="door1" class="door" v-bind:class="{hide: doors.door1}" src="@/assets/advent-calendar.jpg" alt="Kiltis" @click="openDoor($event)">
    <img id="door2" class="door" v-bind:class="{hide: doors.door2}" src="@/assets/advent-calendar.jpg" alt="Kiltis" @click="openDoor($event)">
    <img id="background" src="@/assets/background1.jpg" alt="Kiltis" >
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
    }
  },
  methods: {
    openDoor(event) {
      this.$set(this.doors, event.target.id, true)
      console.log(event.target.id)
      this.$emit('openDoor', event.target.id)
    }
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
  clip-path: inset(48% 72% 33% 16%);
}
#door2 {
  transition: opacity 0.5s ease-in;
  clip-path: inset(31% 47% 49% 41%);
}

.hide {
  opacity: 0;
}
</style>