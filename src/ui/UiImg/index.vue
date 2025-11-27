<template>
  <img
    v-if="src"
    :class="className"
    :src="src"
    :alt="alt"
  >
  <img
    v-else
    :class="className"
    src="@/assets/images/notFound.png"
  >
</template>

<script setup lang="ts">
import type { TImgProps } from './types';


defineOptions({ name: 'UiImg' });

withDefaults(defineProps<TImgProps>(), {
  alt: 'not found',
});

</script>

<style lang="scss" scoped src="./styles.scss" />