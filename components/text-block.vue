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
    width: 100%;
    color: #1b1b1b;
    font-size: 18px;
    line-height: 26px;
    h2 {
      margin-bottom: 50px;
      color: #1b1b1b;
      font-size: 34px;
      font-weight: 800;
      line-height: 46px;
      @media screen and (max-width: 768px) {
        margin-bottom: 18px;
        font-size: 1.5rem;
        line-height: 1.2;
      }
    }
    p {
      margin-bottom: 20px;
    }
    blockquote {
      position: relative;
      padding-left: 116px;
      @media screen and (max-width: 768px) {
        padding-left: 60px;
        margin: 1rem;
      }
      &::before {
        content: url("../assets//images/quotes-left.svg");
        position: absolute;
        left: 0;
        width: 80px;
        height: 70px;
        @media screen and (max-width: 768px) {
          width: 40px;
          height: 40px;
        }
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
        @media screen and (max-width: 1200px) {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
