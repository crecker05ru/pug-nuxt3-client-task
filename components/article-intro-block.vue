<template lang="pug">
div(class="intro-block__inner")
 div(class="intro-block__left")
   img(class="intro-block__image" :src="data.image")
 div(class="intro-block__right")
    h1(class="intro-block__title") {{ data.title }}
    div(class="intro-block__reading-time") {{ data.reading_time }} мин время чтения
    div(class="intro-block__views-count") {{ data.views_count }}  Просмотров
    div(class="intro-block__short-description") {{ data.short_description }}
</template>
<script setup lang="ts">
import type { IIntroData } from "../types/index";
const props = defineProps<{
  data: IIntroData;
}>();
const { data } = props;
</script>
<style lang="scss" scoped>
.intro-block {
  &__inner {
    display: flex;
    column-gap: 30px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__left {
    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }
  &__right {
    width: 100%;
    max-width: 769px;
  }
  &__title {
    margin-bottom: 30px;
    color: #1b1b1b;
    font-weight: 800;
    font-size: 56px;
    line-height: 66px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 12px;
      font-size: 2rem;
      line-height: 1.2;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  &__short-description {
    color: #1b1b1b;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
  &__image {
    display: block;
    width: 100%;
    max-width: 541px;
    min-width: 400px;
    height: auto;
    min-height: 580px;
    object-fit: cover;
    border-top-right-radius: 50%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      min-width: auto;
      min-height: auto;
    }
  }

  &__reading-time {
    margin-bottom: 4px;
    color: #8d959c;
    font-size: 14px;
    line-height: 20px;
  }
  &__views-count {
    margin-bottom: 50px;
    color: #8d959c;
    font-size: 14px;
    line-height: 20px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 12px;
    }
  }
}
</style>
