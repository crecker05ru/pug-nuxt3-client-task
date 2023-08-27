<template lang="pug">
div(class="slider-block" v-if="data")
  app-slider(:slides="data")
</template>
  <script setup lang="ts">
  const props = defineProps<{
    data: string[];
  }>();
  const { data } = props;
  </script>
<style lang="scss" scoped>
</style>
  