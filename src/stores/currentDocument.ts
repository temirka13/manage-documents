import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TDocument } from '@/services/types';

export const useCurrentDocumentStore = defineStore('currentDocument', () => {
  const currentDocument = ref<TDocument | null>(null);
  
  const setCurrentDocument = (document: TDocument | null) => {
    currentDocument.value = document;
  };

  return {
    currentDocument,
    setCurrentDocument,
  };
}, { persist: true });