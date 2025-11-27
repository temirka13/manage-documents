import { ref } from "vue";
import type { TDocument } from "@/services/types";
import { downloadTextFile } from "@/utils";

const useManageDocument = (removeDocument: (id: number) => void) => {
  const currentDocument = ref<TDocument | null>(null);

  const handleCurrentDocumentSet = (document: TDocument | null) => {
    currentDocument.value = document;
  };

  const handleCurrentDocumentDelete = (id: number) => {
    removeDocument(id)
    currentDocument.value = null;
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