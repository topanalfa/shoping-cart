// import vue
import Vue from 'vue';
// import vuex
import Vuex from 'vuex';
// menggunakan vuex pada vue
Vue.use(Vuex);
// import state dari file state.js
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
// export vuex berikut dengan state-nya
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
