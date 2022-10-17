<template>
  <div class="d-flex align-center">
    <p class="text-subtitle-2 font-weight-bold mr-2">
      {{ label | capitalize }}:
    </p>
    <p class="text-caption">{{ text | uppercase }}</p>
  </div>
</template>

<script>
export default {
  name: "LabeledText",
  props: {
    label: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
