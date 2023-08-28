interface IMeta {
  title: string;
  description: string;
  slug: string;
}

export interface IIntroData {
  image: string;
  reading_time: number;
  short_description: string;
  title: string;
  views_count: number;
}

export interface IArticleIntroBlock {
  title: string;
  image: string;
  reading_time: number;
  views_count: number;
  short_description: string;
}

export interface IArticleBlock {
  title: string;
  link: string;
  image: string;
}
export interface IArticlesData {
  title: string;
  articles: IArticleBlock[];
}

interface ITextBody {
  type: string;
  id: string;
  data: string;
}

type IArticleBlocks = IArticleIntroBlock | ITextBody;

export interface IArticleBody {
  type: string;
  id: string;
  data: IArticleBlocks;
}

interface IArticlesBody {
  type: string;
  id: string;
  data: IArticlesData;
}

export interface IArticlesResponse {
  page_type: string;
  meta: IMeta;
  body: IArticlesBody[];
}
export interface IArticleResponse {
  page_type: string;
  meta: IMeta;
  body: IArticleBody[];
}

export interface IImageData {
  caption: string;
  src: string;
}
