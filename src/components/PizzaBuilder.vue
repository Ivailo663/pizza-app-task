<template>
  <v-sheet color="lighten-5" class="pa-10" min-width="500">
    <p class="text-subtitle-2">Select your pizza size</p>
    <v-btn-toggle
      v-model="toggle_exclusive"
      mandatory
      color="success"
      max
      class="mb-5 actionsWrapper"
    >
      <v-btn
        v-for="size in sizes"
        :key="size"
        class="actionSize"
        @click="handleSetPizzaSize(size)"
      >
        {{ size }}
      </v-btn>
    </v-btn-toggle>
    <p class="text-subtitle-2">Select your ingredients (no less than 5)</p>
    <v-sheet color="grey lighten-3" class="pa-5">
      <v-btn
        v-for="ingredient in pizzaIngredients"
        :key="ingredient"
        @click="handleSetIngredient(ingredient)"
        block
        class="mb-5"
      >
        {{ ingredient }}
      </v-btn>
    </v-sheet>
  </v-sheet>
</template>

<style scoped>
.actionsWrapper {
  width: 100%;
}
.actionSize {
  flex: 1;
}
</style>

<script>
import { mapMutations, mapState } from "vuex";
import pizzaIngredients from "../pizzaIngredients";

export default {
  name: "PizzaBuilder",
  components: {},
  data: () => ({
    sizes: ["small", "medium", "large"],
    pizzaIngredients,
    toggle_exclusive: undefined,
  }),
  computed: {
    ...mapState(["pizzaSize", "ingredientWarning"]),
  },
  methods: {
    ...mapMutations(["SET_PIZZA_SIZE", "SET_INGREDIENTS", "REMOVE_INGREDIENT"]),
    handleSetPizzaSize(payload) {
      this.SET_PIZZA_SIZE(payload);
    },
    handleSetIngredient(payload) {
      this.SET_INGREDIENTS(payload);
    },
  },
};
</script>
