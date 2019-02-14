import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import DateFilter from '@/filters/DateFilter';

Vue.config.productionTip = false

DateFilter();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
