import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listado: []
  },
  getters: {
    listadoHechas(state) {
      return state.listado.filter((item) => item.estado)
    }
  },
  mutations: {
    Eliminar(state, {
      item
    }) {
      let indice = state.listado.indexOf(item)
      state.listado.splice(indice, 1)
    },
    CambiarColor(state, item) {
      //item.estado = !item.estado;
      let indice = state.listado.indexOf(item)
      state.listado[indice].estado = !state.listado[indice].estado
    }
  },
  actions: {
    Eliminar(context, item) {
      context.commit('Eliminar', {
        item
      })
    }

  }
})