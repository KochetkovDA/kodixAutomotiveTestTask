import Vue from 'vue';
import App from './App.vue';

import { store } from './store';
import router from './router';

Vue.config.devtools = true;
Vue.config.performance = true;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
