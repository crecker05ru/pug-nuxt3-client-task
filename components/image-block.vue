<template lang="pug">
div(class="intro-block__reading-time") {{ data.caption }}
  img(class="intro-block__image" :src="data.src")
  </template>
  <script setup lang="ts">
  interface IImageData {
    caption: string;
    src: string;
  }
  const props = defineProps<{
    data: IImageData;
  }>();
  const { data } = props;
  </script>
  <style lang="scss" scoped></style>
  