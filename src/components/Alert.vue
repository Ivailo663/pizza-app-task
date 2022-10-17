<template>
  <v-alert color="red lighten-4">
    <p class="text-body-1 ma-0">
      <slot></slot>
    </p>
  </v-alert>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Snackbar",
};
</script>
