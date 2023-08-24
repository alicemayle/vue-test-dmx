import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      email: '',
      password: '',
    }
  },
  getters: {
  },
  mutations: {
    setEmail(state, payload) {
      state.form.email = payload
    },
    setPassword(state, payload) {
      state.form.password = payload
    }
  },
  actions: {
    setState({ commit }, params) {
        commit(params.mut, params.value);
    }
  },
  modules: {
  }
})
