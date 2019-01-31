import vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    meetups: [],
    errors: []
  },
  mutations: {
    'GET_MEETUPS': (state, meetups) => {
      state.meetups = meetups.data;
    },
    'UPDATE_ERRORS': (state, errors) => {
      state.errors = errors
    }
  },
  actions: {
    getMeetups: ({commit}) => {
      axios.get('http://localhost:5000/api/v1/meetups')
        .then(res => commit('GET_MEETUPS', res.data))
        .catch(err => commit('UPDATE_ERRORS', err))
    }
  },
  getters: {

  }
});
