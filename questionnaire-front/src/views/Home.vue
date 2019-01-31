<template>
  <div>
      <Banner />
      <Card /> 
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Card
  },
  created() {
    this.$store.dispatch('getMeetups');
  }
}
</script>

