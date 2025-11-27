import { ref } from "vue";
import { fetchDocuments } from "@/services";
import type { TDocument } from "@/services/types";
import { debounce } from "@/utils";
import { useSearchStore } from "@/stores/search";

const useFetchDocuments = () => {
  const documents = ref<TDocument[]>([])

  const isLoading = ref<boolean>(false);

  const error = ref<string>('');
  
  const { setSearch } = useSearchStore();

  const getDocuments = (search: string = '') => {
    setSearch(search);

    if (!search) {
      documents.value = [];
      return;
    }

    isLoading.value = true;

    fetchDocuments(search)
      .then((response: TDocument[]) => {
        documents.value = response;
      })
      .catch((e: string) => {
        error.value = e;
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const removeDocument = (id: number) => {
    documents.value = documents.value.filter((document: TDocument) => document.id !== id);
  };

  const getDocumentsWithDebounce = debounce(getDocuments, 500);

  return {
    documents,
    isLoading,
    error,
    getDocuments,
    getDocumentsWithDebounce,
    removeDocument,
  };
};

export default useFetchDocuments;