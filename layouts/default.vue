<template lang="pug">
div(class="app")
  <AppHeader/>
    main(class="main app__wrapper")
      <slot/>
  <AppFooter/>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.main {
  margin-bottom: 210px;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
}
</style>
