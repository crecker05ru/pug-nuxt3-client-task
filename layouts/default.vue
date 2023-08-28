<template lang="pug">
div(class="app")
  <AppHeader/>
    main(class="main app__wrapper")
      <slot/>
  <AppFooter/>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.main {
  margin-bottom: 210px;
}
</style>