import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      apiUrl: "http://localhost/",
      username: "",
      isLoggedIn: false,
      role: "",
      table: {
        data:  [
          ['asd', 'asd'],
          ['adsd', 'cvb']
        ]
      }
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--,
      setUsername(state, { name }) { state.username = name },
      setLoggedIn(state, { logged }) { state.isLoggedIn = logged },
      setRole(state, { role }) { state.role = role },
    }
  });
  
export default store;