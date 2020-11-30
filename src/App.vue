<template>
  <div id="app">
    <div v-if="!isLoaded" id="loading">
      Loading...
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
          content: Door1
        },
        door2: {
          title: "Luukku 2",
          content: Door2
        }
      },
      credits: {
        title: "Tekijät",
        content: Credits
      }
    }
  },
  computed: {
    modalClass: function () {
      if (!( window.innerWidth <= 800 )) {
        return {
          top: '20%',
          bottom: '20%',
          left: '20%',
          right: '20%'
        }
      }
      return null
    }
  },
  methods: {
    async openModal(id) {
      this.currentTitle = this.doors[id].title;
      this.currentContent = this.doors[id].content;
      this.currentModalclass = null
      //await new Promise(r => setTimeout(r, 1000));
      this.showModal = true
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
    calendarLoaded() {
      this.isLoaded = true
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
  background-image: url("~@/assets/tausta2.jpg");
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
  transition: opacity 0.1s;
}
.loading-enter {
  opacity: 0;
}
</style>
