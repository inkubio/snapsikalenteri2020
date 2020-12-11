<template>
  <div id="container">
    <div id="topic">
      <h3>Sʸnapsi testasi Zoom-pikkujoulut</h3>
      <p>Testaa sinä S’napsin Zoom-pikkujoulujen tuotokset. Pelin nimihän on piirrä ja arvaa. Arvaatko?</p>
    </div>
    <div id="pic1" class="guesses">
      <div>
        <input v-model="g1" id="g1">
        <button @click="guess1">Arvaa!</button>
        <p>{{ans1}}</p>
      </div>
      <img src="@/assets/data/door12/1.png">
    </div>
    <div id="pic2" class="guesses">
      <div>
        <input v-model="g2" id="g2">
        <button @click="guess2">Arvaa!</button>
        <p>{{ans2}}</p>
      </div>
      <img src="@/assets/data/door12/2.png">
    </div>
    <div id="pic3" class="guesses">
      <div>
        <input v-model="g3" id="g3">
        <button @click="guess3">Arvaa!</button>
        <p>{{ans3}}</p>
      </div>
      <img src="@/assets/data/door12/3.png">
    </div>
    <div id="pic4" class="guesses">
      <div>
        <input v-model="g4" id="g4">
        <button @click="guess4">Arvaa!</button>
        <p>{{ans4}}</p>
      </div>
      <img src="@/assets/data/door12/4.png">
    </div>
    <div id="pic5" class="guesses">
      <div>
        <input v-model="g5" id="g5">
        <button @click="guess5">Arvaa!</button>
        <p>{{ans5}}</p>
      </div>
      <img src="@/assets/data/door12/5.png">
    </div>
    <div id="pic6" class="guesses">
      <div>
        <input v-model="g6" id="g6">
        <button @click="guess6">Arvaa!</button>
        <p>{{ans6}}</p>
      </div>
      <img src="@/assets/data/door12/6.png">
    </div>
    <div id="pic7" class="guesses">
      <div>
        <input v-model="g7" id="g7">
        <button @click="guess7">Arvaa!</button>
        <p>{{ans7}}</p>
      </div>
      <img src="@/assets/data/door12/7.png">
    </div>
    <p>
      Sait ratkaistua {{right}}/7
    </p>
  </div>
</template>

<script>
export default {
  name: "Door12",
  data () {
    return {
      g1: '',
      ans1: '',
      g2: '',
      ans2: '',
      g3: '',
      ans3: '',
      g4: '',
      ans4: '',
      g5: '',
      ans5: '',
      g6: '',
      ans6: '',
      g7: '',
      ans7: '',
    }
  },
  mounted() {
    document.getElementById('g1').addEventListener('keydown', this.guess1)
    document.getElementById('g2').addEventListener('keydown', this.guess2)
    document.getElementById('g3').addEventListener('keydown', this.guess3)
    document.getElementById('g4').addEventListener('keydown', this.guess4)
    document.getElementById('g5').addEventListener('keydown', this.guess5)
    document.getElementById('g6').addEventListener('keydown', this.guess6)
    document.getElementById('g7').addEventListener('keydown', this.guess7)
  },
  beforeDestroy() {
    document.getElementById('g1').removeEventListener('keydown', this.guess1)
    document.getElementById('g2').removeEventListener('keydown', this.guess2)
    document.getElementById('g3').removeEventListener('keydown', this.guess3)
    document.getElementById('g4').removeEventListener('keydown', this.guess4)
    document.getElementById('g5').removeEventListener('keydown', this.guess5)
    document.getElementById('g6').removeEventListener('keydown', this.guess6)
    document.getElementById('g7').removeEventListener('keydown', this.guess7)
  },
  computed: {
    right: function () {
      let total = 0;
      for (let i=1; i<=7;i++) {
        if (this['ans' + i] === 'Oikein!') {
          total++
        }
      }
      return total
    }
  },
  methods: {
    guess(event, ans, guess, out) {
      if (event.type === 'click') {
        event.key = 'Enter'
      }
      if (event.key === 'Enter') {
        if (guess.toLowerCase() === ans) {
          this[out] = 'Oikein!'
        } else {
          this[out] = 'Yritä uudelleen!'
        }
      }
    },
    guess1(event) {
      this.guess(event,'biopallo', this.g1, 'ans1')
    },
    guess2(event) {
      this.guess(event, 'last christmas', this.g2, 'ans2')
    },
    guess3(event) {
      this.guess(event, 'apoptoosi', this.g3, 'ans3')
    },
    guess4(event) {
      this.guess(event, 'mycurses', this.g4, 'ans4')
    },
    guess5(event) {
      this.guess(event, 'negatiivisia ioneja', this.g5, 'ans5')
    },
    guess6(event) {
      this.guess(event, 'ok mt', this.g6, 'ans6')
    },
    guess7(event) {
      this.guess(event, 'maikki', this.g7, 'ans7')
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 1.4em;
}
p {
  font-size: 1.2em;
}
#topic {
  max-width: 600px;
  margin: 0 auto 1em;
}
.guesses {
  border-top: 2px solid #575757;
  max-width: 600px;
  padding: 0.7em;
  margin: auto;
}
.guesses > img {
  max-width: 600px;
  width: 100%;
}
</style>