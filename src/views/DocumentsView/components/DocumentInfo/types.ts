import type { TDocument } from "@/services/types";

export type TDocumentInfoProps = {
  document: TDocument,
};

export type TDocumentInfoEmits = {
  (event: 'download', document: TDocument): void,
  (event: 'delete', id: number): void,
};