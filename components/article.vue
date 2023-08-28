<template lang="pug">
div(class="article-block")
  div(class="article-block__container" v-for="(block,index) in articleData" :key="index" :class="[`block-number__${index}`]")
    <component :is="componentsMap[block.type]" :data="block.data" :index="index"/>
  </template>
<script setup lang="ts">
const componentsMap = {
  article_intro_block: resolveComponent("article-intro-block"),
  text_block: resolveComponent("text-block"),
  image_block: resolveComponent("image-block"),
  slider_block: resolveComponent("slider-block"),
  subscribe_form_block: resolveComponent("subscribe-form-block"),
  article_list_block: resolveComponent("article-list-block"),
  cta_form_block: resolveComponent("cta-form-block"),
};
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
  articleData: IArticleBody[];
}>();
const { articleData } = props;
</script>
<style lang="scss">
.article-block {
  display: flex;
  flex-direction: column;
  &__container {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
}
.block-number {
  &__0 {
    order: 0;
  }
  &__1 {
    order: 1;
  }
  &__2 {
    order: 2;
  }
  &__3 {
    order: 4;
  }
  &__4 {
    order: 5;
  }
  &__5 {
    order: 3;
  }
  &__6 {
    order: 6;
  }
  &__7 {
    order: 7;
  }
}
</style>
