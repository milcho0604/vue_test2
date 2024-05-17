<template>
  <div class="exam1">
    <h1>exam1</h1>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "exam1View",
  data() {
    return {
      message: ""
    };
  }
}
</script>

<style scoped>
  p { background-color: green; }
</style>

