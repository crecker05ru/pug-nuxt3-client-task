<template lang="pug">
div(class="article-block")
  div(class="article-block__container" v-for="(block,index) in articleData" :key=index )
    <component :is="componentsMap[block.type]" :data="block.data"/>
      div(class="article-block__inner")
        div(class="article-block__intro-block")
          h1(class="article-block__title") {{ block.title }}
          img(class="article-block__image" :src="block.image")
  </template>
  <script setup lang="ts">
  const componentsMap = {
    "article_intro_block": resolveComponent('article-intro-block'),
    "text_block": resolveComponent('text-block'),
    "image_block": resolveComponent('image-block'),
    "slider_block": resolveComponent('slider-block'),
    "subscribe_form_block": resolveComponent('subscribe-form-block'),
    "article_list_block": resolveComponent('article-list-block'),
    "cta_form_block": resolveComponent('cta-form-block'),
  }
  // import { IArticleBody } from '../types/index';
  interface IArticleIntroBlock {
  title: string;
  image: string;
  reading_time: number;
  views_count: number;
  short_description: string;
}

interface ITextBody {
  type: string;
  id: string;
  data: string;
}

type IArticleBlocks = IArticleIntroBlock | ITextBody;

  interface IArticleBody {
  type: string;
  id: string;
  data: IArticleBlocks;
}

  const props = defineProps<{
    articleData: IArticleBody[]
  }>()
  const {articleData} = props
  onMounted(() => {
    console.log('articleData.value',articleData)
    console.log('articleData[0].type',articleData[0].type)
  })
  </script>
  <style lang="scss" scoped>
  </style>