<template lang="pug">
div(class="cta-form__block")
  div(class="cta-form__row")
    div(class="cta-form__column")
      img(class="cta-form__image" src="../assets/images/form-image.jpg" alt="Image")
    div(class="cta-form__column")
      div(class="cta-form__form form")
        h1(class="form__title") Стань участником проекта
        div(class="form__inputs")
          input(class="form__input" placeholder="Имя" type="text")
          input(class="form__input" placeholder="Телефон" type="telephone")
          input(class="form__input" placeholder="Email" type="email")
        button(class="form__button") Подписаться
</template>
<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
const { data } = props;
</script>
<style lang="scss" scoped>
.cta-form {
  &__block {
    min-height: 446px;
    padding: 60px;
    background-color: #1b1b1b;
  }
  &__row {
    display: flex;
    column-gap: 60px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__column {
    flex: 1 1 50%;
    @media screen and (max-width: 768px) {
      flex: 1 1 100%;
    }
  }
  &__image {
    display: block;
    width: 595px;
    height: 100%;
    max-height: 326px;
    @media screen and (max-width: 1200px) {
      width: 100%;
      height: auto;
      max-height: 100%;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  &__title {
    margin-bottom: 50px;
    color: #fff;
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  &__inputs {
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__input {
    margin-bottom: 16px;
  }
  &__button {
    max-width: 260px;
  }
}
</style>
