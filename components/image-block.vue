<template lang="pug">
div(class="image-block__inner")
  img(class="image-block__image" :src="data.src" :alt="data.caption")
  div(v-if="data.caption" class="image-block__caption") Caption {{ data.caption }}
  </template>
<script setup lang="ts">
import type { IImageData } from "types";
const props = defineProps<{
  data: IImageData;
}>();
const { data } = props;
</script>
<style lang="scss" scoped>
.image-block {
  &__image {
    margin-bottom: 15px;
    width: 100%;
    height: auto;
    max-height: 550px;
    object-fit: cover;
    border-top-right-radius: 50%;
  }
  &__caption {
    max-width: 200px;
    color: #8d959c;
    margin-left: auto;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
