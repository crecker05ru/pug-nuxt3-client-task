<template lang="pug">
div(class="subscribe-form__block")
      div(class="subscribe-form__left")
        p(class="subscribe-form__title") Подпишись на рассылку
      div(class="subscribe-form__right")
        input(class="subscribe-form__input" placeholder="Email" type="email")
        button(class="subscribe-form__button") Подписаться
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
const { data } = props;
</script>
<style lang="scss" scoped>
.subscribe-form {
  &__block {
    display: flex;
    align-items: center;
    background-color: #1b1b1b;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 100px;
  }
  &__title {
    color: #fff;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
  }
  &__input {
    margin-right: 37px;
    width: 100%;
    max-width: 353px;
    font-size: 18px;
    line-height: 26px;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #8d959c;
    transition: border-bottom linear 0.25s;
    &:focus {
      border-bottom: 1px solid #3657d3;
    }
    &::placeholder {
      color: #8d959c;
    }
  }
  &__left {
    flex: 1 1 auto;
  }
  &__right {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
  }
}
</style>
