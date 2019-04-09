<template>
  <div class="text-center">
    <small>
      <slot></slot>
    </small>
    <div id="barraprogreso" class="progress mt-2" style="height: 25px;">
      <div
        v-show="miPorcentaje > 0"
        class="progress-bar"
        role="progressbar"
        v-bind:style="{ 'width' : miporcentajetantoporcien }"
        v-bind:aria-valuenow="miPorcentaje"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{ miPorcentaje }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-barra-progreso",
  // props: {
  //   msg: String
  // },
  props: ["porcentaje"],
  mounted() {
    console.log("El porcentaje es: " + this.porcentaje);
  },
  updated() {
    console.log("El porcentaje ahora es: " + this.porcentaje);
  },
  computed: {
    miPorcentaje() {
      return this.porcentaje;
    },
    miporcentajetantoporcien() {
      return this.porcentaje.toString() + "%";
    }
  }
};
</script>
