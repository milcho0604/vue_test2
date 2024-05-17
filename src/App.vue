<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/exam1">exma1</router-link> |
    <router-link to="/exam2">exma2</router-link> |
    <router-link to="/exam3">exma3</router-link> |
    <router-link to="/exam4">exma4</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
