import {useApiComposable} from '../composables/useApi'
const articles = {
  async getArticles() {
    const response = await useApiComposable("/");
    return response;
  },
  async getArticle(id: string) {
    const response = await useApiComposable(`/article-${id}`);
    return response;
  },
};

export default articles;
