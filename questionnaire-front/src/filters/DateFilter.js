import moment from 'moment';
import Vue from 'vue';

const DateFilter = Vue.filter('date', (value) => {
  return moment(value).format('ll');
});

export default DateFilter;