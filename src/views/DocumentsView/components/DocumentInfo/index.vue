<template>
  <div class="document-info">
    <div class="document-info__image-wrapper">
      <img
        v-if="document.image"
        class="document-info__image"
        :src="document.image"
        :alt="document.name || 'not found'"
      >
      <img
        v-else
        class="document-info__image"
        src="@/assets/images/notFound.png"
      >
    </div>
    <div class="document-info__info">
      <h3 class="document-info__title">
        {{ document.name }}
      </h3>
      <div class="document-info__buttons">
        <UiButton @click="$emit('download', document)">
          Скачать
        </UiButton>
        <UiButton
          @click="$emit('delete', document.id)"
          :type="EButtonType.danger"
          :disabled="!document.image"
        >
          Удалить
        </UiButton>
      </div>
      <h3 class="document-info__title">
        Описание
      </h3>
      <p class="document-info__description">
        {{ document.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '@/ui/UiButton/index.vue';
import { EButtonType } from '@/ui/UiButton/types';
import type { TDocumentInfoEmits, TDocumentInfoProps } from './types';

defineOptions({name: 'DocumentInfo' });

defineProps<TDocumentInfoProps>();

defineEmits<TDocumentInfoEmits>();

</script>

<style lang="scss" scoped src="./styles.scss" />