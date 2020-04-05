import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:[],
  },
  mutations: {
    DATA(state, status) {
      state.data = status;
    }
  },
  actions: {
    getData(context) {
      const url = require('./../assets/note.json');
      context.commit('DATA', url);
    }
  },
  modules: {
  }
})
