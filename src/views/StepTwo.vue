<template>
  <Container>
    <div>
      <p class="text-center mb-10 font-weight-leight text-h4">
        Build your perfect pizza
      </p>
      <Alert v-if="ingredientWarning">
        <p class="text-subtitle-1 ma-0 red--text">
          You already have
          <span class="font-weight-bold">{{ duplicatedIngredient }}</span>
          added!
        </p>
      </Alert>
      <div class="d-flex flex-wrap align-start justify-center contentWrapper">
        <PizzaBuilder />
        <PizzaPreview />
      </div>
    </div>
  </Container>
</template>

<style scoped>
.contentWrapper {
  gap: 16px;
}
</style>

<script>
import Container from "../components/Container";
import Alert from "../components/Alert";
import PizzaBuilder from "../components/PizzaBuilder";
import PizzaPreview from "../components/PizzaPreview";
import pizzaIngredients from "../pizzaIngredients";
import { mapState } from "vuex";

export default {
  name: "StepTwo",
  components: {
    Container,
    Alert,
    PizzaBuilder,
    PizzaPreview,
  },
  data: () => ({
    sizes: ["small", "medium", "large"],
    pizzaIngredients,
    toggle_exclusive: undefined,
  }),
  computed: {
    ...mapState(["ingredientWarning", "duplicatedIngredient"]),
  },
  methods: {
    submit() {
      this.$router.push("/step-3");
    },
  },
};
</script>
