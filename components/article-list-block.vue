<template lang="pug">
div(class="articles")
  div(v-if="route.path !== '/'" class="articles__same-articles") {{ data.title }}
  ul(class="articles__list")
    li(v-for="(article,index) in data.articles.slice(0,3)" :key="index")
      div(class="article")
        div(class="article__inner")
          img(class="article__image" :src="article.image")
          p(class="article__title") {{article.title}}
          a(class="article__link" :href="article.link") Читать
  </template>
<script setup lang="ts">
import type { IArticlesData } from 'types';
const props = defineProps<{
  data: IArticlesData;
}>();
const route = useRoute();
const { data } = props;
</script>
<style lang="scss" scoped>
.articles {
  &__list {
    display: flex;
    column-gap: 30px;
  }
  &__same-articles {
    margin-bottom: 50px;
    font-weight: 800;
    font-size: 34px;
    line-height: 46px;
  }
}
.article {
  &__image {
    display: block;
    max-width: 100%;
    min-width: 427px;
    margin-bottom: 20px;
    height: auto;
    max-height: 320px;
    object-fit: cover;
  }
  &__title {
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;

    @supports (-webkit-line-clamp: 2) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 164px;
    height: 46px;
    color: #fff;
    background-color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    transition: background-color linear 0.25s;
    &:hover {
      background-color: #3657d3;
    }
  }
}
</style>
