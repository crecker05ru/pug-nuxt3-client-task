<template lang="pug">
div(class="cta-form__block") {{ data }}
    </template>
    <script setup lang="ts">
    const props = defineProps<{
      data: string;
    }>();
    const { data } = props;
    </script>
    <style lang="scss" scoped></style>