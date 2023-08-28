import { defineStore } from "pinia";
import { IArticlesResponse } from "types";

export const useArticlesStore = defineStore("articles-store", () => {
  const articles = ref<IArticlesResponse | undefined>();

  const setArticles = async () => {
    const response = await fetch("https://devtwit8.ru/api/v1/page/?path=/");
    const data = await response.json();
    articles.value = data;
    return response;
  };

  const getArticles = computed(() => articles);

  return { setArticles, getArticles };
});
