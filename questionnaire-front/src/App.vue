<template>
  <div id="app">
    <Nav v-if="!['Signin', 'Signup'].includes($route.name)"/>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
<style>
  body {
    margin: 0;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
</style>
