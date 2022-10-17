<template>
  <Container>
    <v-sheet color="lighten-5" class="pa-10" min-width="800">
      <p class="text-subtitle-2">Your pizza</p>
      <v-sheet color="grey lighten-3" class="pa-5 mb-4">
        <LabeledText label="order type" :text="orderType" />
        <LabeledText label="size" :text="pizzaSize" />
        <LabeledText label="ingredients" :text="ingredients" />
      </v-sheet>

      <p class="text-subtitle-2">Order details</p>
      <v-sheet color="grey lighten-3" class="pa-5 mb-6">
        <LabeledText label="name" :text="userDetails.name" />
        <LabeledText label="number" :text="userDetails.phoneNumber" />
        <LabeledText label="address" :text="userDetails.address" />
      </v-sheet>
      <v-btn block class="mb-5" color="primary" @click="handleSubmit"
        >Order</v-btn
      >
    </v-sheet>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import LabeledText from "../components/LabeledText.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "StepThree",
  components: {
    Container,
    LabeledText,
  },
  computed: {
    ...mapState([
      "selectedIngredients",
      "pizzaSize",
      "orderType",
      "userDetails",
    ]),
    ingredients() {
      return this.selectedIngredients.toString();
    },
  },
  methods: {
    ...mapActions(["submitOrder"]),
    handleSubmit() {
      const body = {
        ingredients: this.selectedIngredients,
        size: this.pizzaSize,
        orderType: this.orderType,
        userDetails: this.userDetails,
      };

      this.submitOrder(body);
    },
  },
};
</script>
