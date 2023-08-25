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
    testDetails: {},
    filter: ''
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
    },
    setFilter(state, payload) {
      state.filter = payload
    },
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
            fecha: "06/08/2023",
            nombre: "Ana Laura Rodriguez Leal",
            celular: "+52 81 4490 7578",
            progreso: { proceso: "Oferta comercial", avance: "100" },
            estatus: "approved",
          },
          {
            id: 2,
            fecha: "01/08/2023",
            nombre: "Juan Lorenzo Elizondo",
            celular: "+52 81 2589 2479",
            progreso: { proceso: "Buró de credito", avance: "23" },
            estatus: "dont-accept",
          },
          {
            id: 3,
            fecha: "30/07/2023",
            nombre: "María Eugenia Rodríguez Rondón",
            celular: "+52 81 8576 7894",
            progreso: { proceso: "Autorización buró", avance: "64" },
            estatus: "incompleted",
          },
          {
            id: 4,
            fecha: "15/07/2023",
            nombre: "Ana Sofía Cruz Hernández",
            celular: "+52 81 2589 6754",
            progreso: { proceso: "Perfilamiento", avance: "45" },
            estatus: "error",
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
            fecha: "28/08/1985",
            rfc: "VISA79040283TA",
            nombre: param.nombre,
            celular: param.celular,
            correo: "maria.eugenia@gmail.com",
            direccion: "Calle Rio Lena 2018, Riberas de Dos Rios, Guadalupe, C.P. 64628",
            progreso: param.progreso,
            estatus: param.estatus,
            producto: "Electrónico",
            subproducto: "IMSS",
            tipoNomina: "Jubilado",
            operacion: "Crédito Nuevo",
            estado: "Nuevo León",
            banco: "Banorte",
            sucursal: "Sucursal Escobedo",
            promotor: "Pamela Cheves García (81 10375 28740)"
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
