<!-- Exam3View.vue -->
<template>
    <div class="exam3">
      <h1>Exam3</h1>
      <p>{{ word }}</p>
      <br>
      <input type="text" v-model="wordInput" />
      <br>
      <button @click="sendWordToParent">Ok</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Exam3View',
    data() {
      return {
        word: "world",
        wordInput: '', // 새로운 데이터 바인딩을 위한 변수 추가
      };
    },
    methods: {
      updateWord(newWord) {
        this.word = newWord;
      },
      sendWordToParent() {
        const newWord = this.wordInput; // 현재 입력된 값을 가져오기
        this.updateWord(newWord);
        this.wordInput = ''; // 입력된 값 비우기
      },
    },
  };
  </script>
  
  <style scoped>
  p {
    background-color: green;
  }
  </style>
  