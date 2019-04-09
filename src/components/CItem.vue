<template>
  <div>
    <div
      v-bind:class="['text-left', 'alert', 'alert-success', 'no-seleccionable', elemento.estado ? 'opacidad' : '']"
    >
      <i class="material-icons align-middle">list</i>
      <b>{{ elemento.articulo }}</b>&nbsp;
      <span class="badge badge-primary">{{ elemento.cantidad }}</span>&nbsp;
      <span
        style="padding: 10px;  background-color: orange; border-radius: 10%"
      >{{ elemento.prioridad }}</span>
      <span id="identificador" style="display: none">{{ elemento.id }}</span>
      <i
        v-on:click="EliminarItem(elemento)"
        class="material-icons align-middle float-right iconosclick"
      >delete</i>
      <i
        v-on:click="CambiarColorItem(elemento)"
        v-bind:class="['iconosclick', 'material-icons', 'align-middle' , 'float-right' , elemento.estado
            ? 'mired' : 'iconos' ]"
      >check_circle</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["elemento"],
  updated() {
    console.log(this.elemento);
  },
  methods: {
    EliminarItem() {
      this.$emit("eliminar");
    },
    CambiarColorItem() {
      this.$emit("cambiar");
    }
  }
};
</script>