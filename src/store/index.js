import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      //console.log(state.isLogin);
    }
  },
  actions: {},
  modules: {}
});
