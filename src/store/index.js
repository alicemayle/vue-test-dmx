import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: '',
      password: '',
      name: 'Juan Pedro',
      statistics: {
        approved: 8,
        dontAccept: 19,
        incompleted: 20,
        error: 40
      },
      tests: []
    },
    tabActive: 'all',
    showModal: false,
    testDetails: {}
  },
  getters: {
  },
  mutations: {
    setEmail(state, payload) {
      state.user.email = payload
    },
    setPassword(state, payload) {
      state.user.password = payload
    },
    setTab(state, payload) {
      state.tabActive = payload
    },
    setTests(state, payload) {
      state.user.tests = payload
    },
    setShowModal(state, payload) {
      state.showModal = !state.showModal
    },
    setTestDetails(state, payload) {
      state.testDetails = payload
    }
  },
  actions: {
    setState({ commit }, params) {
        commit(params.mut, params.value);
    },
    async getTests({ commit }) {
      try {
        // const response = await fetch("https://api.com/getTests");
        // const result = await response.json();

        const items = [
          {
            id: 1,
            fecha: "05/07/2023",
            nombre: "Ana Laura Rodriguez Leal",
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "100" },
            estatus: "approved",
          },
          {
            id: 2,
            fecha: "05/07/2023",
            nombre: "Ana Laura Rodriguez Leal",
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "45" },
            estatus: "error",
          },
          {
            id: 3,
            fecha: "05/07/2023",
            nombre: "Ana Laura Rodriguez Leal",
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "23" },
            estatus: "dont-accept",
          },
          {
            id: 4,
            fecha: "05/07/2023",
            nombre: "Ana Laura Rodriguez Leal",
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "64" },
            estatus: "incompleted",
          },
        ];

        commit("setTests", items);
      } catch (error) {
        console.log(error);
      }
    },
    async getTestDetails({ commit }, param) {
      try {
        // const response = await fetch("https://api.com/getTestDetails/".concat(param));
        // const result = await response.json();

        const item =
          {
            id: param.id,
            fecha: "05/07/2023",
            nombre: param.nombre,
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "100" },
            estatus: param.estatus,
          };

        commit("setTestDetails", item);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
