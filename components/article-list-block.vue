<template lang="pug">
div(class="articles")
  div {{ data.title }}
  ul(class="articles__list")
    li(v-for="(article,index) in data.articles" :key="index")
      //- <ArticleListBlock :articleData="article"/>
      div(class="article")
        div(class="article__inner")
          p(class="article__title") {{article.title}}
          a(class="article__link" :href="article.link") Читать
          img(class="article__image" :src="article.image")
  </template>
  <script setup lang="ts">
  interface IArticleBlock {
  title: string
  link: string
  image: string
}

interface IArticlesData {
  title: string
  articles: IArticleBlock[]
}
const props = defineProps<{
  data: IArticlesData
}>()
const {data} = props
//   const articles = ref([
// {
// "title": "Мир динамичного 3D Цифрового Искусства",
// "link": "/article-1",
// "image": "https://devtwit8.ru/img/p1.png"
// },
// {
// "title": "Есть над чем задуматься: небо темнеет",
// "link": "/article-2",
// "image": "https://devtwit8.ru/img/p2.png"
// },
// {
// "title": "Мелочь, а приятно: чистосердечное признание облегчает душу",
// "link": "/article-3",
// "image": "https://devtwit8.ru/img/p3.png"
// },
// {
// "title": "Очевидцы сообщают, что слышали старческий скрип Амстердама",
// "link": "/article-4",
// "image": "https://devtwit8.ru/img/p4.png"
// },
// {
// "title": "Британские «ученые» заявили, что обереги никого не защитили",
// "link": "/article-5",
// "image": "https://devtwit8.ru/img/p5.png"
// },
// {
// "title": "Есть над чем задуматься: частокол на границе починят",
// "link": "/article-6",
// "image": "https://devtwit8.ru/img/p6.png"
// }])
  </script>
  <style lang="scss" scoped>
  .articles {
    background-color: rgb(127, 127, 255);
  }
  </style>