<template lang="pug">
div(class="app")
  <Header/>
    main(class="main")
      <slot/>
  <Footer/>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.app {
  max-width: 1388px;
  padding-left: 24px;
  padding-right: 24px;
}
</style>