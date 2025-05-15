<script>
export default {
  data() {
    return {
      // To do - put inside json
      words: [
        {
          word_a: "hola",
          word_b: "hello",
          hint: "greeting",
          answer: "",
          correct: false,
        },
        {
          word_a: "uno",
          word_b: "one",
          hint: "number",
          answer: "",
          correct: false,
        },
        {
          word_a: "gris",
          word_b: "grey",
          hint: "color",
          answer: "",
          correct: false,
        },
      ],

      correctCount: 0,
      completed: false,
    };
  },

  computed: {
    shuffledWords() {
      return this.words.sort(() => 0.5 - Math.random());
    },

    wordCount() {
      return this.words.length;
    },
  },

  watch: {
    correctCount() {
      if (this.correctCount == this.wordCount) {
        this.completed = true;
      }
    },
  },

  methods: {
    checkAnswer(word) {
      word.correct = word.word_b = word.answer;

      if (word.correct) {
        this.correctCount++;
      }
    },
  },
};
</script>

<template>
  <h1>Flashword</h1>

  <p v-if="completed">Good work! You have completed all the words</p>
  <p v-else>You have answered {{ correctCount }} of out {{ wordCount }}</p>

  <div id="cards">
   
  </div>
</template>

<style>
[v-cloak] {
    display: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    margin-top: 60px;
}

#cards {
    justify-content: center;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 30px;
}

.card {
    background-color: #E8F0FF;
    border-radius: 5px;
    padding: 10px 0;
    font-size: 25px;
}

input[type=text] {
    border: 0;
    font-size: 25px;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 5px;
    width: 80%;
}

.word {
    font-weight: bold;
}

.correctAnswer {
    padding: 0;
    margin: 0;
}

.correct {
    color: #0f5132;
    background-color: #d1e7dd;
}

#correctCount {
    font-size: 20px;
    margin: 10px;
    font-weight: bold;
    padding: 10px;
}

#completed {
    font-size: 20px;
    font-weight: bold;
    color: #0f5132;
    padding: 10px;
    margin: 10px;
}
</style>
