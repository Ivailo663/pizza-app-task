<template>
  <div @click="click" class="mx-5">
    <v-hover v-slot="{ hover }">
      <v-sheet
        :elevation="hover ? hoverElevation : idleElevation"
        color="lighten-5"
        class="pa-16 d-flex flex-column justify-center card"
      >
        <h1 color="indigo--text" class="text-button">{{ text }}</h1>
      </v-sheet>
    </v-hover>
  </div>
</template>

<style scope>
.card {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "CardComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    orderType: {
      type: String,
      requride: true,
    },
  },
  data: () => ({
    idleElevation: 4,
    hoverElevation: 8,
  }),
  methods: {
    click() {
      this.$emit("click", this.orderType);
    },
  },
};
</script>
