<template>
  <div>
      <Banner :message="message" />
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
  },
  data() {
    return {
      message: "Crowd source questions for your meetup"
    }
  }
}
</script>

