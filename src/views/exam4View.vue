<!-- Exam4View.vue -->
<template>
    <div>
      <div class="exam4-header">
        <h1>Exam4</h1>
        <p>{{ number1 }} * {{ number2 }} = {{ multiplicationResult }}</p>
      </div>
      <div class="exam4">
        <br>
        <input type="number" v-model="number1" />
        <br>
        <br>
        <input type="number" v-model="number2" />
        <br>
        <button @click="calculateMultiplication">Ok</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'exam4View',
    data() {
      return {
        number1: 3,
        number2: 4,
        multiplicationResult: 12,
      };
    },
    methods: {
      calculateMultiplication() {
        this.multiplicationResult = this.number1 * this.number2;
      },
      calculateAndSendResult() {
        const result = this.number1 * this.number2;
        this.multiplicationResult = result;
      },
    },
  };
  </script>
  
  <style scoped>
  .exam4-header {
    background-color: white;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .exam4 {
    background-color: limegreen; /* 나머지 부분은 흰색으로 유지 */
  }
  
  p {
    color: blue;
  }
  </style>
  