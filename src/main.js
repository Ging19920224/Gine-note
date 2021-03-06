import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'jquery';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
