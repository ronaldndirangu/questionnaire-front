<template>
  <div>
    <Banner />
    <div class="container">
      <MeetupDetails />
      <Questions />
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Questions from '../components/Questions.vue';
import MeetupDetails from '../components/MeetupDetails.vue';

export default {
  name: 'ViewMeetup',
  components: {
    Banner,
    MeetupDetails,
    Questions
  }
}
</script>

<style scoped>
  .container {
      display: flex;
      flex-direction: column;
      position: relative;
      align-content: center;
      background: #fff;
      width: 70%;
      margin: 9% 15%;
      z-index: 5;
      position: absolute;
      top: 0;
      box-shadow: 0 8px 8px -6px rgb(209, 208, 208);
    } 
</style>



