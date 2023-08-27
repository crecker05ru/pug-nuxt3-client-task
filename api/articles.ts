const articles =  {
  async getArticles(){
    // const response = await useApiSSR('/bannersMain.php')
    const response = $fetch(`/`)
    return response
  },
  async getArticle(id: string){
    // const response = await useApiSSR('/bannersMain.php')
    const response = $fetch(`https://devtwit8.ru/api/v1/page/?path=/article-${id}`)
    return response
  }
}

export default articles;