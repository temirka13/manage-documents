import { ref } from "vue";
import type { TDocument } from "@/services/types";
import { downloadTextFile } from "@/utils";
import { useCurrentDocumentStore } from "@/stores/currentDocument";

const useManageDocument = (removeDocument: (id: number) => void) => {
  const currentDocument = ref<TDocument | null>(null);

  const {
    currentDocument: storeCurrentDocument,
    setCurrentDocument,
  } = useCurrentDocumentStore();

  const handleCurrentDocumentSet = (document: TDocument | null) => {
    currentDocument.value = document;
    if (document?.id !== storeCurrentDocument?.id) {
      setCurrentDocument(document);
    }
  };

  const handleCurrentDocumentDelete = (id: number) => {
    removeDocument(id)
    currentDocument.value = null;
    setCurrentDocument(null);
  };

  const handleDocumentDownload = (document: TDocument) => {
    const fileContent = `Название: ${document.name}\nОписание: ${document.description}\nКартинка: ${document.image || 'Отсутствует'}`;

    downloadTextFile(document.name, fileContent);
  };

  return {
    currentDocument,
    handleCurrentDocumentSet,
    handleCurrentDocumentDelete,
    handleDocumentDownload,
  };
};

export default useManageDocument;