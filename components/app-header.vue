<template lang="pug">
header(class="header")
  div(class="header__inner app__wrapper")
    NuxtLink(to='/')
      img(src="../assets/images/logo.svg" alt="Test Blog" class="header__logo")
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header {
  min-height: 40px;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 28px;
    padding-bottom: 25px;
  }
  &__logo {
    display: block;
  }
}
</style>
