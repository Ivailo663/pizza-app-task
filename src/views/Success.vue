<template>
  <Container>
    <div class="d-flex flex-column">
      <v-icon class="mb-2" size="100" color="green lighten-1">
        mdi-check-circle-outline
      </v-icon>
      <p class="text-center mb-10 font-weight-leight text-h4">
        Order placed successfuly!
      </p>
      <v-btn @click="startOver"> Start over </v-btn>
    </div>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import { mapMutations } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Success",
  components: {
    Container,
  },
  beforeDestroy() {
    this.RESET_STATE();
  },
  methods: {
    ...mapMutations(["RESET_STATE"]),
    startOver() {
      this.$router.push("/");
    },
  },
};
</script>
