<template>
  <div>
    <Banner />
    <div class="meetup-details">
      <div class="meetup-header">
        <div class="date">
          {{ formatDate }}
        </div>
        <div class="topic" v-if="getMeetup">
          {{ getMeetup[0].topic }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'ViewMeetup',
  components: {
    Banner
  },
  computed: {
    ...mapGetters([
      'getMeetup',
    ]),
    formatDate: () => {
      return moment().format('YYYY MM DD')
    }
  },
  created() {
    const meetupId = this.$route.params.meetupId;
    this.$store.dispatch('getMeetup', meetupId)
  }
}
</script>

<style scoped>
  .meetup-details {
    display: flex;
    flex-direction: column;
    align-content: center;
    background: #fff;
    width: 70%;
    margin: 10% 15%;
    z-index: 5;
    position: absolute;
    top: 0;
  } 
  .meetup-header {
   padding: 2% 2%;
  }
</style>



