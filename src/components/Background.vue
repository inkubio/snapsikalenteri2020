<template>
  <div id="container">
    <img @load="onLoad" id="door1" class="door" v-bind:class="{hide: doors.door1}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door2" class="door" v-bind:class="{hide: doors.door2}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door3" class="door" v-bind:class="{hide: doors.door3}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door4" class="door" v-bind:class="{hide: doors.door4}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door5" class="door" v-bind:class="{hide: doors.door5}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door6" class="door" v-bind:class="{hide: doors.door6}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door7" class="door" v-bind:class="{hide: doors.door7}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door8" class="door" v-bind:class="{hide: doors.door8}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door9" class="door" v-bind:class="{hide: doors.door9}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door10" class="door" v-bind:class="{hide: doors.door10}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door11" class="door" v-bind:class="{hide: doors.door11}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door12" class="door" v-bind:class="{hide: doors.door12}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door13" class="door" v-bind:class="{hide: doors.door13}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door14" class="door" v-bind:class="{hide: doors.door14}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door15" class="door" v-bind:class="{hide: doors.door15}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door16" class="door" v-bind:class="{hide: doors.door16}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door17" class="door" v-bind:class="{hide: doors.door17}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door18" class="door" v-bind:class="{hide: doors.door18}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door19" class="door" v-bind:class="{hide: doors.door19}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door20" class="door" v-bind:class="{hide: doors.door20}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door21" class="door" v-bind:class="{hide: doors.door21}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door22" class="door" v-bind:class="{hide: doors.door22}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door23" class="door" v-bind:class="{hide: doors.door23}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">
    <img @load="onLoad" id="door24" class="door" v-bind:class="{hide: doors.door24}" src="@/assets/calendar_foreground.jpg" alt="Kiltis" @click="openDoor($event)">


    <img @load="onLoad" id="background" src="@/assets/calendar_background.jpg" alt="Kiltis" >
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
        door3: false,
        door4: false,
        door5: false,
        door6: false,
        door7: false,
        door8: false,
        door9: false,
        door10: false,
        door11: false,
        door12: false,
        door13: false,
        door14: false,
        door15: false,
        door16: false,
        door17: false,
        door18: false,
        door19: false,
        door20: false,
        door21: false,
        door22: false,
        door23: false,
        door24: false,
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
      if (this.imagesLoaded >= 25) {
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
  transition: opacity 0.5s ease-in;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: auto;
  z-index: 1;
}
#door1 {
  clip-path: polygon(76% 0, 74% 17%, 57% 22%, 27% 24%, 21% 25%, 19% 23%, 20% 20%, 20% 14%, 19% 0);
}
#door2 {
  clip-path: polygon(62% 27%, 70% 27%, 70% 44%, 62% 44%);

}
#door3 {
  clip-path: polygon(43% 30%, 50% 30%, 50% 41%, 43% 41%);
}
#door4 {
  clip-path: polygon(72% 56%, 79% 56%, 79% 83%, 71% 81%);
}
#door5 {
  clip-path: polygon(30% 57%, 37% 55%, 38% 64%, 31% 66%);
}
#door6 {
  clip-path: polygon(21% 52%, 26% 52%, 26% 64%, 20% 64%);
}
#door7 {
  clip-path: polygon(24% 81%, 29% 85%, 28% 96%, 21% 94%);
}
#door8 {
  clip-path: polygon(60% 75%, 73% 86%, 71% 99%, 58% 96%);
}
#door9 {
  clip-path: polygon(20% 0, 20% 20%, 19% 24%, 19% 27%, 19% 40%, 0 40%, 0 0);
}
#door10 {
  clip-path: polygon(43% 63%, 46% 68%, 46% 76%, 41% 76%, 39% 75%, 39% 63%);
}
#door11 {
  clip-path: polygon(39% 46%, 49% 46%, 48% 60%, 40% 60%);
}
#door12 {
  clip-path: polygon(75% 10%, 82% 4%, 83% 21%, 76% 26%);
}
#door13 {
  clip-path: polygon(31% 29%, 37% 29%, 37% 38%, 31% 38%);
}
#door14 {
  clip-path: polygon(34% 66%, 36% 69%, 35% 80%, 27% 80%, 28% 66%);
}
#door15 {
  clip-path: polygon(16% 61%, 21% 69%, 11% 78%, 5% 73%);
}
#door16 {
  clip-path: polygon(84% 79%, 94% 81%, 94% 89%, 84% 89%);
}
#door17 {
  clip-path: polygon(37% 75%, 44% 76%, 43% 80%, 43% 84%, 35% 84%, 35% 77%);
}
#door18 {
  clip-path: polygon(78% 37%, 89% 37%, 89% 48%, 78% 47%);
}
#door19 {
  clip-path: polygon(79% 65%, 92% 65%, 93% 81%, 80% 80%);
}
#door20 {
  clip-path: polygon(46% 68%, 51% 65%, 53% 66%, 58% 64%, 61% 83%, 45% 83%);
}
#door21 {
  clip-path: polygon(13% 42%, 21% 41%, 21% 59%, 12% 59%);
}
#door22 {
  clip-path: polygon(83% 20%, 93% 12%, 94% 29%, 84% 35%);
}
#door23 {
  clip-path: polygon(78% 49%, 88% 49%, 88% 60%, 78% 60%);
}
#door24 {
  clip-path: polygon(55% 54%, 55% 63%, 51% 66%, 49% 64%, 46% 66%, 43% 61%, 48% 56%);
}

.hide {
  opacity: 0;
}
</style>