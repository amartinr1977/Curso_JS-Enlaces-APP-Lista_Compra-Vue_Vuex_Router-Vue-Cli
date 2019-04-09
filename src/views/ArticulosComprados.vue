<template>
  <div class="col-12">
    <div class="row cabecera justify-content-center mt-5" id="cabecera">
      <div class="col-12">
        <h1 id="titulo1">
          <i class="material-icons" style="font-size: 1em">shopping_cart</i>
          {{ titulo }}
          <span class="badge badge-success">{{Longitud}}</span>
        </h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <CItem
          v-for="(item,index) in listadoHechas"
          v-bind:key="index"
          v-bind:elemento="item"
          v-on:eliminar="Eliminar(item)"
          v-on:cambiar="CambiarColor(item)"
        ></CItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import CItem from "../components/CItem";
export default {
  components: { CItem },
  data() {
    return {
      titulo: "Artículos Comprados: "
      //listado: listado
    };
  },
  updated() {
    console.log(this.listadoHechas);
  },
  watch: {
    longtiudHechas(lActual, lAnterior) {
      //alert("Has eliminado un elemento ...");
      this.$swal({
        type: "question",
        title: "Oops...",
        text:
          'Tu carrito ha pasado de terner "' +
          lAnterior +
          '" productos, a tener ahora "' +
          lActual +
          '" productos',
        footer: "<a href>Para más información</a>"
      });
    }
  },
  computed: {
    ...mapState(["listado"]),
    ...mapGetters(["listadoHechas", "longtiudHechas"]),
    /* ArticulosCompradosYa() {
            return this.listado.filter((item) => item.estado)
        }, */
    Longitud() {
      //return this.ArticulosCompradosYa.length
      return this.listadoHechas.length;
    }
  },
  methods: {
    ...mapMutations(["CambiarColor"]),
    ...mapActions(["Eliminar"])
  }
};
</script>
    