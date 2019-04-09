<template>
  <div class="container miestilo" id="app">
    <div class="row justify-content-center mt-5">
      <div class="col-3 text-center">
        <router-link to="/" active-class="activo" exact>
          <div class="minav rounded w-100">Inicio</div>
        </router-link>
      </div>
      <div class="col-3 text-center">
        <router-link to="/articulos-compra" active-class="activo">
          <div class="minav rounded w-100">Cesta</div>
        </router-link>
      </div>
      <div class="col-3 text-center">
        <router-link to="/acercade" active-class="activo">
          <div class="minav rounded w-100">AcercaDe</div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
    <pre>{{ $data }}</pre>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.LeerLocalStorage();
  },
  methods: {
    ...mapActions(["LeerLocalStorage"])
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
