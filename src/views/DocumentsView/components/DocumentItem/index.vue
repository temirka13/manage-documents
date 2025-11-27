<template>
  <div class="document-item">
    <UiImg
      :src="document.image"
      :alt="document.name"
      className="document-item__image"
    />
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
import { UiImg } from '@/ui';
import type { TDocumentItemProps } from './types';

defineOptions({name: 'DocumentItem' });

withDefaults(defineProps<TDocumentItemProps>(), {
  isActive: false,
});

</script>

<style lang="scss" scoped src="./styles.scss" />