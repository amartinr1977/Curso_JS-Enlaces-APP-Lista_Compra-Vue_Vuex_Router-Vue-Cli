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
    },
    longitudLista(state) {
      let longitud = state.listado.length
      return longitud === null ? 0 : longitud
    },
    longtiudHechas(state) {
      let longitud = state.listado.filter((item) => item.estado).length
      return longitud === null ? 0 : longitud
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
    },
    AgregarLocalStorage(state) {
      localStorage.setItem('listado', JSON.stringify(state.listado))
    },
    LeerLocalStorage(state) {
      if ("listado" in localStorage)
        state.listado = JSON.parse(localStorage.getItem('listado'))
      else
        state.listado = []
    }
  },
  actions: {
    Eliminar(context, item) {
      context.commit('Eliminar', {
        item
      })
    },
    AgregarLocalStorage({
      commit,
      state
    }) {
      commit('AgregarLocalStorage')
    },
    LeerLocalStorage({
      commit,
      state
    }) {
      commit('LeerLocalStorage')
    }

  }
})