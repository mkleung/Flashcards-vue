// Define the options of our application
const FlashWord = {
  data() {
    return {
      wordA: "hola",
      wordB: "hello",
      answer: "",
      correct: null,
      showFeedback: false,

      image: null,
      imageAlt: null,

      hasError: false,
    };
  },

  methods: {
    checkAnswer() {
      if (this.answer == "") {
        this.hasError = true;
        return;
      }

      this.hasError = false;
      this.correct = this.wordB == this.answer;

      if (this.correct) {
        this.image = "correct";
        this.imageAlt = "green";
      } else {
        this.image = "incorrect";
        this.imageAlt = "red";
      }
      this.showFeedback = true;
    },

    reset() {
      (this.answer = ""), (this.correct = null), (this.showFeedback = false);
    },
  },
};

// Create a new Vue instance using our options
const app = Vue.createApp(FlashWord).mount("#app");
