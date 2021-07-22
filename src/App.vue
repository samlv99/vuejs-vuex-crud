<template>
  <div id="app">
    <Navbar />
    <Products />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Products from "./components/Products.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Products,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
