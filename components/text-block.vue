<template lang="pug">
div(class="text-block__block") 
  div(class="text-block__inner" v-html="data") 
  </template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
const { data } = props;
</script>
<style lang="scss">
.text-block {
  &__block {
    display: flex;
    justify-content: center;
  }
  &__inner {
    max-width: 884px;
    color: #1b1b1b;
    font-size: 18px;
    line-height: 26px;
    h2 {
      margin-bottom: 50px;
      color: #1b1b1b;
      font-size: 34px;
      font-weight: 800;
      line-height: 46px;
    }
    p {
      margin-bottom: 20px;
    }
    blockquote {
      position: relative;
      padding-left: 116px;
      &::before {
        content: url("../assets//images/quotes-left.svg");
        position: absolute;
        left: 0;
      }

      p {
        font-weight: 300;
        font-size: 18px;
        font-style: italic;
      }
      footer {
        color: #8d959c;
      }
    }
    ul {
      li {
        margin-left: 115px;
      }
    }
  }
}
</style>
