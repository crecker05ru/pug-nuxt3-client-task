<template lang="pug">
div(class="article")
  Article(v-if="data" :articleData="data.body") 
</template>
<script setup lang="ts">
import { useArticleStore } from '../store/article';

const route = useRoute();
const articleStore = useArticleStore()
const data = computed(() => articleStore.getArticle.value) ;

useHead({
  title: 'Article' && `${data.value?.meta.title} Page ${data.value?.meta.slug}` ,
  meta: [
    { name: 'description', content: data.value?.meta.description }
  ],
})

onMounted(async () => {
  const response = await articleStore.setArticle(route.params.id as string)
})
</script>