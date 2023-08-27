<template>
  <div>
    <Main v-if="data?.page_type === 'home'"/>
    <ArticleListBlock v-if="data" :data="data.body[0].data"/>
  </div>
</template>
<script setup lang="ts">
import { useArticlesStore } from '../store/articles';
const articlesStore = useArticlesStore()
const data = articlesStore.getArticles;
useHead({
  title: 'Fructus' && data.value?.meta.title,
  meta: [
    { name: 'description', content: 'content'}
  ],
})

onMounted(async () => {
const reponse = await articlesStore.setArticles()
console.log('reponse',reponse)
console.log('articlesStore.getArticles.value',articlesStore.getArticles.value)
})
</script>