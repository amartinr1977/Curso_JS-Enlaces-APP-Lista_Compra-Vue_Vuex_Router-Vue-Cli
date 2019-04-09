<template>
  <div class="col-12">
    <div class="row cabecera justify-content-center mt-5" id="cabecera">
      <h1 id="titulo1">
        <i class="material-icons" style="font-size: 1em">shopping_cart</i>
        {{ titulo }}
      </h1>
    </div>
    <form id="formulario">
      <div id="botones" class="row container form-group">
        <div class="col-5">
          <input
            type="text"
            v-model="articulo"
            id="articulo"
            class="form-control"
            placeholder="Indica un Articulo a comprar"
          >
        </div>
        <div class="col-3">
          <input
            type="number"
            v-model="cantidad"
            class="form-control"
            id="cantidad"
            placeholder="Cantidad"
          >
        </div>
        <div class="col-2">
          <select class="form-control" v-model="prioridad" id="prioridad">
            <option value="Baja" selected>Baja</option>
            <option value="Alta">Alta</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>
        <div class="col-2">
          <button
            id="agregar"
            class="btn btn-primary form-control"
            v-bind:disabled="permitir"
            v-on:click.prevent="Agregar"
          >Añadir</button>
        </div>
      </div>
    </form>

    <div id="listacompra" class="listacompra rounded">
      <template v-if="longitudLista === 0">
        <div class="alert alert-danger">
          <i class="material-icons align-middle">list</i> No hay Articulos que comprar
        </div>
      </template>
      <template v-else>
        <CItem
          v-for="(item,index) in listado"
          v-bind:key="index"
          v-bind:elemento="item"
          v-on:eliminar="Eliminar(item)"
          v-on:cambiar="CambiarColor(item)"
        ></CItem>
      </template>
    </div>
    <CBarraProgreso v-bind:porcentaje="Porcentaje">Porcentaje de Compras Realizadas</CBarraProgreso>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import CBarraProgreso from "../components/CBarraProgreso";
import CItem from "../components/CItem";
export default {
  name: "listacompra",
  components: { CBarraProgreso, CItem },
  data() {
    return {
      titulo: "Carrito de la Compra con Vue.js!!",
      articulo: "",
      cantidad: 0,
      permitir: false,
      prioridad: "Baja",
      //listado: [],
      contenido: ""
    };
  },
  watch: {
    listado: function(OldValue, NewValue) {
      this.AgregarLocalStorage();
      console.log("Listado Modificado ...");
    },
    listadoHechas() {
      this.AgregarLocalStorage();
      console.log("ListadoHechas Modificado ...");
    }
  },
  methods: {
    Agregar() {
      let elemento = {
        articulo: this.articulo,
        cantidad: this.cantidad,
        prioridad: this.prioridad,
        estado: false,
        id: Math.random()
          .toString()
          .substring(2, 9)
      };
      this.listado.push(elemento);
      console.log(this.listado);
      this.Resetear();
    },
    Resetear() {
      this.articulo = "";
      this.prioridad = "Baja";
      this.cantidad = 0;
    },
    /* Eliminar(item) {
            indice = this.listado.indexOf(item)
            this.listado.splice(indice, 1)
        }, */
    /* CambiarColor(item) {
      item.estado = !item.estado;
    }, */
    ...mapMutations(["CambiarColor"]),
    ...mapActions(["Eliminar", "AgregarLocalStorage", "LeerLocalStorage"])
  },
  computed: {
    ...mapState(["listado"]),
    ...mapGetters(["listadoHechas", "longitudLista", "longtiudHechas"]),
    ComprasHechas() {
      //return this.listado.filter(elemento => elemento.estado);
      return this.listadoHechas;
    },
    Porcentaje() {
      let porcentaje = 0;
      if (this.longitudLista != 0) {
        porcentaje = ((this.longtiudHechas * 100) / this.longitudLista).toFixed(
          2
        );
      }
      return porcentaje;
    },
    PorcentajeTantoPorCien() {
      return this.Porcentaje.toString() + "%";
    }
  }
};
</script>

<style>
</style>