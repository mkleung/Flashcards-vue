// Define the options of our application
const FlashWord = {
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
      return this.words.sort(() => .5 - Math.random());
    },

    wordCount(){
      return this.words.length;
    }
  },

  watch: {
    correctCount() {
      if (this.correctCount == this.wordCount){
        this.completed = true;
      }
 
    }
  },

  methods: {
    checkAnswer(word){
      word.correct = word.word_b = word.answer;

      if (word.correct){
        this.correctCount++;
      }

    }
  },
};

// Create a new Vue instance using our options
const app = Vue.createApp(FlashWord).mount("#app");
