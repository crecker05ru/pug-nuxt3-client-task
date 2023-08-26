import { defineStore} from "pinia";
import { IArticleResponse } from "types";

export const useArticleStore = defineStore('article-store', () => {
    const article = ref<IArticleResponse | undefined>()

    const setArticle = async (id: string) => {
      const response = await fetch(`https://devtwit8.ru/api/v1/page/?path=/article-${id}`)
      const data = await response.json()
      article.value = data
      return response
    }

    const getArticle = computed(() => article)

    return {setArticle ,getArticle}
})
