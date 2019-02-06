<template>
  <div class="create-meetup">
    <h2 class="heading">Create Event</h2>
    <form class="form-meetup">
      <div class="input-group">
        <label class="input-label" for="topic">Event Topic</label>
        <input class="text-input" v-model="topic" type="text" name="topic" placeholder="Give a short distinct topic">
      </div>
      <div class="input-group">
        <label class="input-label" for="location">Location</label>
        <input class="text-input" v-model="location" type="text" name="location" placeholder="Search for venue or address">
      </div>
      <div class="input-group">
        <label class="input-label" for="date">Date</label>
        <date-pick
          v-model="happeningOn"
          :pickTime="true"
          :format="'YYYY-MM-DD HH:mm'"
        ></date-pick>
      </div>
      <div class="input-group">
        <label class="input-label" for="image">Image</label>
        <div class="upload-file">
          <button class="upload-btn">Click to upload an image</button>
          <input class="file-input" type="file" name="image">
        </div>
      </div>
      <div>
        <SubmitArea v-on:createMeetup="createMeetup" />
      </div>
    </form>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import SubmitArea from '../components/SubmitArea.vue';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: "CreateMeetup",
  components: {
    DatePick,
    SubmitArea
  },
  data() {
    return {
      topic: '',
      location: '',
      happeningOn: '',
      image: ''
    }
  },
  methods: {
    createMeetup() {
      const data = {
        topic: this.topic,
        location: this.location,
        happeningOn: this.happeningOn,
        images: [this.image]
      }
      this.$store.dispatch('createMeetup', data);
    }
  }
}
</script>

<style>
  .create-meetup {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 1% 20%;
  }
  .heading {
    background: #004cc7;
    color: #fff;
    width: 100%;
    padding: 15px 15px;
    border-radius: 5px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    margin: 20px 0px;
  }
  .text-input {
    width: 100%;
    padding: 15px 10px;
    margin: 2px 0px;
    border: solid 1px #ccc;
    border-radius: 2px;
    font-size: 0.8em;
  }
  .text-input:focus {
    outline: none;
    border: solid 1px #004cc7;
  }
  .date-text {
    width: 100%;
  }
  .upload-file {
    position: relative;
  }
  .upload-btn {
    margin: 2px 0;
    padding: 2% 4%;
    font-size: 0.8em;
    background: none;
    border: solid 1px #ccc;
    border-radius: 5px;
    color: #004cc7;
  }
  .file-input {
    position: absolute;
    background: none;
    top: 0;
    left: 0;
    height: 55px;
    width: 210px;
    opacity: 0;
  }
  .vdpComponent.vdpWithInput {
    display: flex;
    flex-wrap: wrap;
    width: 25.5%;
  }
  .vdpComponent.vdpWithInput>input {
    width: 100%;
    padding: 12px 10px;
    margin: 2px 0px;
    border: solid 1px #ccc;
    border-radius: 5px;
    font-size: 1.2em;
  }
  .vdpComponent.vdpWithInput>input:focus {
    outline: none;
    border: solid 1px #004cc7;
  }
</style>
