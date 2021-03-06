import vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';
import { MeetupServices } from './services'

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    meetup: {},
    meetups: [],
    questions: [],
    comments: [],
    question: [],
    showModal: false,
    errors: []
  },
  mutations: {
    'GET_MEETUPS': (state, meetups) => {
      state.meetups = meetups.data;
    },
    'CREATE_MEETUP': (state, meetupBody) => {
      state.meetup = meetupBody;
    },
    'GET_MEETUP': (state, meetup) => {
      state.meetup = meetup.data;
    },
    'GET_QUESTIONS': (state, questions) => {
      state.questions = questions.data[0];
    },
    'GET_QUESTION': (state, question) => {
      state.question = question.data[0];
    },
    'GET_COMMENTS': (state, comments) => {
      state.comments = comments.data[0];
    },
    'TOGGLE_MODAL': (state) => {
      state.showModal = !state.showModal;
    },
    'UPDATE_ERRORS': (state, errors) => {
      state.errors = errors
    }
  },
  actions: {
    getMeetups: ({commit}) => {
      MeetupServices.getMeetups()
        .then(res => commit('GET_MEETUPS', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    createMeetup: ({commit}, meetupBody) => {
      MeetupServices.postMeetup(meetupBody)
        .then(res => commit('CREATE_MEETUP', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    getMeetup: ({commit}, meetupId) => {
      MeetupServices.getMeetup(meetupId)
        .then(res => commit('GET_MEETUP', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    getQuestions: ({commit}, meetupId) => {
      MeetupServices.getQuestions(meetupId)
        .then(res => commit('GET_QUESTIONS', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    getQuestion: ({commit}, { meetupId, questionId }) => {
      MeetupServices.getQuestion(meetupId, questionId)
        .then(res => commit('GET_QUESTION', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    getComments: ({commit}, {meetupId, questionId}) => {
      MeetupServices.getComments(meetupId, questionId)
        .then(res => commit('GET_COMMENTS', res.data))
        .catch(err => commit('UPDATE_ERRORS', err.response.data))
    },
    toggleModal: ({commit}) => {
      commit('TOGGLE_MODAL');
    }
  },
  getters: {
    getMeetups: state => {
      return state.meetups;
    },
    getMeetup: state => {
      return state.meetup;
    },
    getQuestions: state => {
      return state.questions;
    },
    getQuestion: state => {
      return state.question;
    },
    getComments: state => {
      return state.comments;
    },
    showModal: state => {
      return state.showModal;
    }
  }
});
