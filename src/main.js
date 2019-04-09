import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//BootStrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/mi.css'

//Material Icons
import 'material-icons/iconfont/material-icons.css'

// Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')