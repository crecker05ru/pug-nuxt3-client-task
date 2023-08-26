<template lang="pug">
div(class="intro-block__reading-time") {{ data }}
  </template>
    <script setup lang="ts">
      const props = defineProps<{
      data: string
    }>()
    const {data} = props
    </script>
    <style lang="scss" scoped>
    </style>