export const useApiComposable = (path: string) => {
  const config = useRuntimeConfig()
  return useFetch(path, { baseURL: config.public.apiBase });
}