<template>
  <div class="d-flex justify-center align-center container">
    <slot></slot>
  </div>
</template>

<style scope>
.container {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
};
</script>
