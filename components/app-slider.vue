<template lang="pug">
carousel(:items-to-show="1")
  slide(v-for="(slide, index) in slides" :key="slide") 
    img(:src="slide")
  template(#addons="{ slidesCount,currentSlide }")
    div(class="app-slider__slider-numbers") {{ currentSlide + 1 }} / {{ slidesCount }} 
    navigation
  </template>
    <script setup lang="ts">
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
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
}

  .carousel__prev,
  .carousel__next {
    color: #fff;
      background-color: #000;
      &:hover {
        color: #fff;
        background-color: #000;
      }
  }
  </style>
    