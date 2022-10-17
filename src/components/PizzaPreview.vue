<template>
  <v-sheet class="pa-10">
    <p class="text-h5">Your pizza so far</p>

    <LabeledText label="size" :text="pizzaSize" />

    <p class="text-subtitle-2">Your ingredients</p>
    <v-sheet color="grey lighten-3" class="pa-5 mb-5">
      <div v-if="selectedIngredients.length">
        <v-btn
          v-for="(selectedIngredient, index) in selectedIngredients"
          :key="selectedIngredient"
          @click="handleRemoveIngredient(selectedIngredient, index)"
          block
          class="mb-5"
        >
          {{ selectedIngredient }}

          <v-icon size="20" class="ml-2">mdi-close-circle-outline</v-icon>
        </v-btn>
      </div>
      <p v-else>You have no ingredients</p>
    </v-sheet>
    <v-btn
      block
      class="mb-5"
      color="primary"
      :disabled="selectedIngredients.length < 5"
      @click="submit"
      >Continue to checkout</v-btn
    >
  </v-sheet>
</template>

<script>
import LabeledText from "../components/LabeledText.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "PizzaPreview",
  components: {
    LabeledText,
  },
  computed: {
    ...mapState(["selectedIngredients", "pizzaSize"]),
  },
  methods: {
    ...mapMutations(["REMOVE_INGREDIENT"]),
    handleRemoveIngredient(selectedIngredient, index) {
      this.REMOVE_INGREDIENT({ index, selectedIngredient });
    },
    submit() {
      this.$router.push("/step-3");
    },
  },
};
</script>
