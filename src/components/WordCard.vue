<script>
// export deafult {
    
// }
</script>

<template>
  <div
    class="card"
    v-for="word in shuffledWords"
    v-bind:class="{ correct: word.correct }"
  >
    <p class="word">{{ word.word_a }}</p>
    <input
      v-if="!word.correct"
      type="text"
      v-model="word.answer"
      v-on:keyup.enter="checkAnswer(word)"
    />
    <p v-else class="correctAnswer">{{ word.answer }}</p>
  </div>
</template>

<!-- scoped isolate our style to only this component -->
<style scoped></style>
