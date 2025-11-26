export type FetchOptions = {
  url: string;
  method: string;
  query?: Record<string, string | number | boolean>;
};

export enum httpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
};