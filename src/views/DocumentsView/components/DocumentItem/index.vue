<template>
  <div class="document-item">
    <img
      v-if="document.image"
      class="document-item__image"
      :src="document.image"
      :alt="document.name || 'not found'"
    >
    <img
      v-else
      class="document-item__image"
      src="@/assets/images/notFound.png"
    >
    <div
      class="document-item__info"
      :class="{ 'document-item__info-active': isActive}"
    >
      <h3 class="document-item__title">
        {{ document.name }}
      </h3>
      <p  class="document-item__size">
        12 MB
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TDocumentItemProps } from './types';

defineOptions({name: 'DocumentItem' });

withDefaults(defineProps<TDocumentItemProps>(), {
  isActive: false,
});

</script>

<style lang="scss" scoped src="./styles.scss" />