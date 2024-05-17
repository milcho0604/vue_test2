<template>
    <div class="exam2">
      <h1>exam2</h1>
      <input type="text" v-model="num1" />
      <br>
      <br>
      <input type="text" v-model="num2" />
      <br>
    <p> {{num1}} + {{num2}} = {{ total }} </p>  
    </div>
  </template>
  <script>
  export default {
    name: "exam2View",
    data() {
      return {
        num1: 3,
        num2: 4
      };
    },
    computed:  {
        total() {
          return this.num1 * this.num2;
        }
  }
};
  </script>
  
  <style scoped>
   p { background-color: green; }
  </style>
  
  