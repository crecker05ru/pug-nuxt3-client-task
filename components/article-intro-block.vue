<template lang="pug">
div(class="intro-block__reading-time") {{ data.reading_time }}
  div(class="intro-block__short-description") {{ data.short_description }}
  h1(class="intro-block__title") {{ data.title }}
  div(class="intro-block__views-count") {{ data.views_count }}
  img(class="intro-block__image" :src="data.image")
</template>
<script setup lang="ts">
interface IIntroData {
  image: string;
  reading_time: number;
  short_description: string;
  title: string;
  views_count: number;
}
const props = defineProps<{
  data: IIntroData;
}>();
const { data } = props;
</script>
<style lang="scss" scoped></style>
