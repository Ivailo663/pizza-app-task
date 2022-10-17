<template>
  <Container>
    <div>
      <p class="text-center mb-10 font-weight-leight text-h4">
        Select order type
      </p>
      <div class="d-flex card-container">
        <CardOrderType
          text="Delivery"
          @click="handleSetOrderType($event)"
          orderType="delivery"
        />
        <CardOrderType
          text="Self pick up"
          @click="handleSetOrderType($event)"
          orderType="Self pick up"
        />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import CardOrderType from "../components/CardOrderType.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "StepOne",
  components: {
    Container,
    CardOrderType,
  },
  computed: {
    ...mapState(["orderType"]),
  },
  methods: {
    ...mapMutations(["SET_ORDER_TYPE"]),
    handleSetOrderType(payload) {
      this.SET_ORDER_TYPE(payload);
      this.$router.push("/step-2");
    },
  },
};
</script>
