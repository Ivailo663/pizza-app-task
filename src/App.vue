<template>
  <v-app class="top-container">
    <router-view></router-view>
  </v-app>
</template>

<style scoped>
.top-container {
  min-height: 100vh;
  background-color: #f5e0bc;
}
</style>

<script>
export default {
  name: "App",
};
</script>
