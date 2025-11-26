import type { FetchOptions } from "./types";

const API_HOST = import.meta.env.VITE_API_URL;

const buildUrl = (url: string, query?: Record<string, string | number | boolean>): string => {
  if (!query) return url;

  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};

const useFetch = <TResponse>(options: FetchOptions): Promise<TResponse> => {
  const { url, method, query } = options;

  return new Promise(async (resolve, reject) => {
    try {
      const fullUrl = `${API_HOST}${url}`;
      const urlWithQuery = buildUrl(fullUrl, query);
      
      const response = await fetch(urlWithQuery, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData: TResponse = await response.json();
      resolve(responseData);
    } catch (err) {
      reject(err);
    }
  });
};

export default useFetch;