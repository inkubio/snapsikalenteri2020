<template>
  <div id="app">
    <div v-if="!isLoaded" id="loading">
      Lataa...
    </div>
    <transition name="loading">
      <Background v-show="isLoaded" @loaded="calendarLoaded" @openDoor="openModal" @credits="creditsModal"/>
    </transition>
    <transition name="fade" mode="out-in">
      <Modal v-if="showModal"
             @close="closeModal"
             :title="this.currentTitle"
             :content="this.currentContent"
             :style-object="this.currentModalclass"
      />
    </transition>
  </div>
</template>

<script>

import Background from '@/components/Background.vue'
import Modal from "@/components/Modal";
import Credits from "@/components/Credits";
import Door1 from "@/components/Doors/Door1";
import Door2 from "@/components/Doors/Door2";
import Intro from "@/components/Intro";
import Door3 from "@/components/Doors/Door3";
import Door4 from "@/components/Doors/Door4";
import Door5 from "@/components/Doors/Door5";
import Door6 from "@/components/Doors/Door6";
import Door7 from "@/components/Doors/Door7";
import Door8 from "@/components/Doors/Door8";
import Door9 from "@/components/Doors/Door9";
import Door10 from "@/components/Doors/Door10";
import Door11 from "@/components/Doors/Door11";
import Door12 from "@/components/Doors/Door12";
import Door13 from "@/components/Doors/Door13";
import Door14 from "@/components/Doors/Door14";
import Door15 from "@/components/Doors/Door15";
import Door16 from "@/components/Doors/Door16";
import Door17 from "@/components/Doors/Door17";
import Door18 from "@/components/Doors/Door18";
import Door19 from "@/components/Doors/Door19";
import Door20 from "@/components/Doors/Door20";
import Door21 from "@/components/Doors/Door21";
import Door22 from "@/components/Doors/Door22";
import Door23 from "@/components/Doors/Door23";
import Door24 from "@/components/Doors/Door24";

export default {
  name: 'App',
  components: {
    Background,
    Modal
  },
  data () {
    return {
      showModal: false,
      currentTitle: 'Testi',
      currentContent: null,
      currentModalclass: null,
      isLoaded: false,
      doors: {
        door1: {
          title: "Luukku 1",
          content: Door1,
          openModal: true
        },
        door2: {
          title: "Luukku 2",
          content: Door2,
          openModal: true
        },
        door3: {
          title: "Luukku 3",
          content: Door3,
          openModal: true
        },
        door4: {
          title: "Luukku 4",
          content: Door4,
          openModal: true
        },
        door5: {
          title: "Luukku 5",
          content: Door5,
          openModal: true
        },
        door6: {
          title: "Luukku 6",
          content: Door6,
          openModal: false
        },
        door7: {
          title: "Luukku 7",
          content: Door7,
          openModal: true
        },
        door8: {
          title: "Luukku 8",
          content: Door8,
          openModal: true
        },
        door9: {
          title: "Luukku 9",
          content: Door9,
          openModal: true
        },
        door10: {
          title: "Luukku 10",
          content: Door10,
          openModal: true
        },
        door11: {
          title: "Luukku 11",
          content: Door11,
          openModal: true
        },
        door12: {
          title: "Luukku 12",
          content: Door12,
          openModal: true
        },
        door13: {
          title: "Luukku 13",
          content: Door13,
          openModal: false
        },
        door14: {
          title: "Luukku 14",
          content: Door14,
          openModal: true
        },
        door15: {
          title: "Luukku 15",
          content: Door15,
          openModal: true
        },
        door16: {
          title: "Luukku 16",
          content: Door16,
          openModal: true
        },
        door17: {
          title: "Luukku 17",
          content: Door17,
          openModal: true
        },
        door18: {
          title: "Luukku 18",
          content: Door18,
          openModal: true
        },
        door19: {
          title: "Luukku 19",
          content: Door19,
          openModal: true
        },
        door20: {
          title: "Luukku 20",
          content: Door20,
          openModal: false
        },
        door21: {
          title: "Luukku 21",
          content: Door21,
          openModal: true
        },
        door22: {
          title: "Luukku 22",
          content: Door22,
          openModal: true
        },
        door23: {
          title: "Luukku 23",
          content: Door23,
          openModal: true
        },
        door24: {
          title: "Luukku 24",
          content: Door24,
          openModal: true
        },
      },
      credits: {
        title: "Tekijät",
        content: Credits
      },
      intro: {
        title: null,
        content: Intro,
        modalClass: {

        }
      }
    }
  },
  mounted() {
    if (!localStorage.notFirst) {
      this.showIntro()
      localStorage.setItem('notFirst', "true")
    }
  },
  computed: {
    modalClass: function () {
      if ( window.innerWidth >= 800 ) {
        return {
          top: '20%',
          bottom: '20%',
          left: '20%',
          right: '20%'
        }
      }
      return null
    },
    introClass: function () {
      if ( window.innerWidth >= 800 ) {
        return {
          top: '40%',
          bottom: '40%',
          left: '30%',
          right: '30%'
        }
      }
      return {
        top: '32%',
        bottom: '32%',
        left: '5%',
        right: '5%'
      }
    }
  },
  methods: {
    calendarLoaded() {
      this.isLoaded = true
    },
    async openModal(id) {
      if (this.doors[id].openModal) {
        this.currentTitle = this.doors[id].title;
        this.currentContent = this.doors[id].content;
        this.currentModalclass = null
        //await new Promise(r => setTimeout(r, 200));
        this.showModal = true
      }
    },
    closeModal() {
      this.showModal = false
    },
    creditsModal() {
      this.currentTitle = this.credits.title
      this.currentContent = this.credits.content
      this.currentModalclass = this.modalClass
      this.showModal = true
    },
    showIntro() {
      this.currentTitle = this.intro.title
      this.currentContent = this.intro.content
      this.currentModalclass = this.introClass
      this.showModal = true
    }
  }
}
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-image: url("~@/assets/tausta.jpg");
  background-size: cover;
}
#loading {
  position: absolute;
  top: calc(50% - 2em);
  bottom: calc(50% - 2em);
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  font-size: 4em;
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.loading-enter-active {
  transition: opacity 3s;
}
.loading-enter {
  opacity: 0;
}
</style>
