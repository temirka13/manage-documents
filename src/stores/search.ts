import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const search = ref<string>('');
  
  const setSearch = (value: string) => {
    search.value = value;
  };

  return {
    search,
    setSearch,
  };
}, { persist: true });