<template>
  <div>
    <div class="meetup-details">
      <div class="meetup-header">
        <div class="left">
          <div class="date" v-if="getMeetup[0]">
            {{ formatDate(getMeetup[0].happeningOn) }}
          </div>
          <div class="topic" v-if="getMeetup[0]">
            {{ getMeetup[0].topic }}
          </div>
        </div>
          <div class="right">
            <p>Are you going?</p>
            <div class="btns">
              <button type="submit" class="rsvp-btn">Yes</button>
              <button type="submit" class="rsvp-btn">No</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'MeetupDetails',
  computed: {
    ...mapGetters([
      'getMeetup',
    ]),
  },
  created() {
    const { meetupId } = this.$route.params;
    this.$store.dispatch('getMeetup', meetupId)
  },
  methods: {
    formatDate: (date) => {
      return moment(date).format('LLLL')
    }
  }
}
</script>

<style scoped>
  .meetup-header {
    padding: 2% 2%;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px #ccc;
  }
  .date {
    color: rgba(46,62,72,.6);
    margin-bottom: 3px;
  }
  .topic {
    font-size: 32px;
    font-weight: 0.8px;
    width: 80%;
  }
  .rsvp {
    display: flex;
    width: 20%;
    flex-direction: column;
  }
  .left {
    display: flex;
    width: 80%;
    flex-direction: column;
  }
  .right {
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btns {
    display: flex;
    flex-direction: row;
  }
  .rsvp-btn {
    padding: 10px 30px;
    margin: auto 2px;
    background: #2359af;
    color: #fff;
    border-radius: 5px;
    font-size: 0.8em;
  }
  .rsvp-btn:focus {
    outline: none;
  }
</style>


