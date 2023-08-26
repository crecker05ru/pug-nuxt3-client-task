<template lang="pug">
div(class="intro-block__reading-time") slider 
  img(v-for="(image,index) in data" :key="index" :src="image")
  </template>
  <script setup lang="ts">

  const props = defineProps<{
    data: string[];
  }>();
  const { data } = props;
  </script>
  <style lang="scss" scoped></style>
  