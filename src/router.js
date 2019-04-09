import Vue from 'vue'
import Router from 'vue-router'
import ListaCompra from './views/ListaCompra.vue'
import ArticulosComprados from './views/ArticulosComprados.vue'
import AcercaDe from './views/AcercaDe.vue'

Vue.use(Router)

const misrutas = [{
    path: '/',
    component: ListaCompra
  },
  {
    path: '/articulos-compra',
    component: ArticulosComprados
  },
  {
    path: '/acercade',
    component: AcercaDe
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: misrutas
})