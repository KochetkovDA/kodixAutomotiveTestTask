import Vue from 'vue';
import VueRouter from 'vue-router';
import page from '@/views/page.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: page,
    },
  ],
});
