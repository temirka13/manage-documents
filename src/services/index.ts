import useFetch from "@/api/useFetch";
import type { TDocument } from "./types";
import { httpMethods } from "@/api/types";

export const fetchDocuments = (search: string) => useFetch<TDocument[]>({
  url: '/user/docs',
  method: httpMethods.GET,
  query: { search },
});