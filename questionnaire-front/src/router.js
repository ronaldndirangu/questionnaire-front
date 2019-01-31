import Vue from 'vue';
import VueRouter from 'vue-router';
import Signin from '@/views/Signin.vue'
import Home from '@/views/Home.vue';
import CreateMeetup from '@/views/CreateMeetup.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/signin', 
    name: 'Signin',
    component: Signin 
  },
  { 
    path: '/meetups', 
    name: 'Home',
    component: Home 
  },
  {
    path: '/meetups/create',
    name: 'CreateMeetup',
    component: CreateMeetup
  }
];

const router = new VueRouter({
  routes
});

export default router;