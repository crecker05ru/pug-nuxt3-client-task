<template lang="pug">
carousel(:items-to-show="1")
  slide(v-for="(slide, index) in slides" :key="slide") 
    img(class="app-slider__slider-image" :src="slide")
  template(#addons="{ slidesCount,currentSlide }")
    div(class="app-slider__slider-numbers") {{ currentSlide + 1 }} / {{ slidesCount }} 
    navigation
  </template>
<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const props = defineProps<{
  slides: string[];
}>();
const { slides } = props;
</script>
<style lang="scss">
.app-slider {
  &__slider-numbers {
    margin-top: 25px;
  }
  &__slider-image {
    max-width: 100%;
  }
}

.carousel__prev,
.carousel__next {
  color: #fff;
  background-color: #000;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
}
.carousel__icon {
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
}
</style>
