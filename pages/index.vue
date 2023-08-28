<template lang="pug">
div
  ArticleListBlock(v-if="data" :data="data.body[0].data")
</template>
<script setup lang="ts">
import { useArticlesStore } from '../store/articles';
const articlesStore = useArticlesStore()
const data = articlesStore.getArticles;
useHead({
  title: 'Fructus' && `${data.value?.meta.title} Page ${data.value?.meta.slug}`,
  meta: [
    { name: 'description', content: data.value?.meta.description}
  ],
})

onMounted(async () => {
const reponse = await articlesStore.setArticles()
})
</script>