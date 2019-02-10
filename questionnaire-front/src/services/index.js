import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token;


export class MeetupServices {
  static getMeetups() {
    return axios.get('http://localhost:5000/api/v1/meetups')
  }
  static postMeetup(meetupBody) {
    return  axios.post('http://localhost:5000/api/v1/meetups', meetupBody);
  } 
  static getMeetup(meetupId) {
    return axios.get(`http://localhost:5000/api/v1/meetups/${meetupId}`);
  }
  static getQuestions(meetupId) {
    return axios.get(`http://localhost:5000/api/v1/meetups/${meetupId}/questions`)
  }
}
