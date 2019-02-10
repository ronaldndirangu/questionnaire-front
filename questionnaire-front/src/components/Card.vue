<template>
  <div class="row">
    <div class="card" v-for="meetup in getMeetups" v-bind:key="meetup._id" @click="getMeetup(meetup._id)">
      <div class="image">
        <img src="../assets/meetup.jpg" alt="">
      </div>
      <div class="body"> 
        <div class="left">
          <div class="date">
            {{ date }}
          </div>
        </div>
        <div class="right">
          <div class="title">
            {{ meetup.topic }}
          </div>
          <div class="location">
            <i class="fas fa-map-marker-alt"></i>
            {{ meetup.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Card",
  computed: {
    ...mapGetters([
      'getMeetups',
    ])
  },
  methods: {
    getMeetup(meetupId) {
      this.$router.push(`/meetups/${meetupId}`);
    }
  },
  data() {
    return {
      date: 'SAT, APR 6'
    }
  }
}
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    border: solid 2px #ccc;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin: 10px -50px 10px 80px;
    box-shadow: 0 8px 6px -6px rgb(209, 208, 208);
    cursor: pointer;
  }
  .body {
    display: flex;
    margin-top: 5px;
    margin-left: 5px;
    color: #004cc7;
  }
  .left {
    flex-basis: 30%;
  }
  .right{
    flex-basis: 70%;
  }
  .title {
    color: rgb(37, 37, 37);
    padding-bottom: 5px;
  }
  img {
    height: 200px;
    width: 300px;
  }
</style>


