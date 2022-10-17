<template>
  <Container>
    <v-sheet width="40%" color="transparent">
      <p class="text-center mb-10 font-weight-leight text-h4">Order details</p>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          solo
          v-model="userDetails.name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          solo
          v-model="userDetails.phoneNumber"
          :rules="phoneNumberRules"
          :counter="10"
          label="Number"
          required
        ></v-text-field>

        <v-text-field
          solo
          v-model="userDetails.address"
          :rules="addressRules"
          label="Address"
          required
        ></v-text-field>

        <v-btn
          :disabled="isActionSubmitDisabled"
          color="primary"
          @click="submit"
          block
        >
          Submit
        </v-btn>
      </v-form>
    </v-sheet>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "HomePage",
  components: {
    Container,
  },
  data: () => ({
    valid: true,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    phoneNumberRules: [
      (v) => !!v || "Number is required",
      (v) => /^0\d{9}$/.test(v) || "Not a valid number",
    ],
    addressRules: [(v) => !!v || "Address is required"],
  }),
  computed: {
    ...mapState(["userDetails"]),
    isActionSubmitDisabled() {
      const { name, phoneNumber, address } = this.userDetails;

      return !name || !phoneNumber || !address || !this.valid;
    },
  },
  methods: {
    ...mapMutations(["RESET_STATE"]),
    submit() {
      this.$refs.form.validate();

      if (this.valid) {
        this.$router.push("/step-1");
      }
    },
  },
};
</script>
