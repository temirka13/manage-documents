<template>
  <div class="documents-view">
    <div class="documents-view__list">
      <div class="documents-view__input-wrapper">
        <h2 class="documents-view__input-title">
          Поиск документа
        </h2>
        <UiInput
          :value="search"
          class="documents-view__input"
          placeholder="Введите ID документа"
          @input="getDocumentsWithDebounce($event.target.value)"
        />
      </div>
      <h2 class="documents-view__documents-title">
        Результаты
      </h2>
      <div class="documents-view__list-content">
        <UiLoader v-if="isLoading" />
        <template v-else>
          <p v-if="error" class="documents-view__error">
            {{ error }}
          </p>
          <p v-else-if="!documents.length">
            Ничего не найдено
          </p>
          <template v-else>
            <DocumentItem
              v-for="document in documents"
              :key="document.id"
              :document="document"
              :isActive="document.id === currentDocument?.id"
              class="documents-view__document"
              @click="handleCurrentDocumentSet(document)"
            />
          </template>
        </template>
      </div>
    </div>
    <div v-if="!currentDocument" class="documents-view__info-empty">
      <p>
        Выберите документ, чтобы посмотреть его содержиое
      </p>
    </div>
    <DocumentInfo
      v-else
      :document="currentDocument"
      @download="handleDocumentDownload"
      @delete="handleCurrentDocumentDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { UiInput, UiLoader } from '@/ui';

import DocumentItem from './components/DocumentItem/index.vue';
import DocumentInfo from './components/DocumentInfo/index.vue';
import useFetchDocuments from './composables/useFetchDocuments';
import useManageDocument from './composables/useManageDocument';
import { useSearchStore } from '@/stores/search';
import { useCurrentDocumentStore } from '@/stores/currentDocument';

defineOptions({ name: 'DocumentsView' });

const {
  documents,
  isLoading,
  error,
  getDocuments,
  getDocumentsWithDebounce,
  removeDocument,
} = useFetchDocuments();

const {
  currentDocument,
  handleCurrentDocumentSet,
  handleCurrentDocumentDelete,
  handleDocumentDownload,
} = useManageDocument(removeDocument);


const { search } = useSearchStore();

const { currentDocument: storeCurrentDocument } = useCurrentDocumentStore();


onMounted(() => {
  getDocuments(search);
  if (storeCurrentDocument) {
    handleCurrentDocumentSet(storeCurrentDocument);
  }
});

</script>

<style lang="scss" scoped src="./styles.scss" />