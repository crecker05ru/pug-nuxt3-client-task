<template lang="pug">
div(class="image-block__inner")
  img(class="image-block__image" :src="data.src" :alt="data.caption")
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
  <style lang="scss" scoped>
  .image-block {
    &__image {
      margin-bottom: 155px;
      width: 100%;
      height: auto;
      max-height: 550px;
      object-fit: cover;
      border-top-right-radius: 50%;
    }
  }
  </style>
  