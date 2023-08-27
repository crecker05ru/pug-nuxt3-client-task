<template lang="pug">
div(class="app")
  <Header/>
    main(class="main app__wrapper")
      <slot/>
  <Footer/>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.main {
  margin-bottom: 210px;
}
</style>