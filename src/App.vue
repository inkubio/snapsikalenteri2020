<template>
  <div id="app">
    <Background @openDoor="openModal"/>
    <transition name="fade" mode="out-in">
      <Modal v-if="showModal"
             @close="closeModal"
             :title="this.currentTitle"
             :content="this.currentContent"
      />
    </transition>
  </div>
</template>

<script>

import Background from '@/components/Background.vue'
import Modal from "@/components/Modal";
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
      doors: {
        door1: {
          title: "Luukku 1",
          content: Door1
        },
        door2: {
          title: "Luukku 2",
          content: Door2
        }
      }
    }
  },
  methods: {
    async openModal(id) {
      console.log("Works", id)
      this.currentTitle = this.doors[id].title;
      this.currentContent = this.doors[id].content;
      await new Promise(r => setTimeout(r, 1000));
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
