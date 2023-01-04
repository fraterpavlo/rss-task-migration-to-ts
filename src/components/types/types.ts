// GENERAL
export type VoidCallbackType <T> = (data: T) => void;

export type TObjWithStringKeys = {
  [prop: string]: string;
}

// loader.ts
export interface IOptionsInConstructorOfLoader {
  apiKey?: string,
};

export interface IGetRespFirstParam {
  endpoint: string,
  options?: {sources?: string}
}


// export interface ISourcesData {
//   category: string,
//   country: string,
//   description: string,
//   id: string,
//   language: string,
//   name: string,
//   url: string,
// } 
// export interface IDataFromFetchInCallback {
//   sources: ISourcesData[],
//   status: string
// }

// news.ts
export interface IDrawDataInNews {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: {id: string, name: string},
  title: string,
  url: string,
  urlToImage: string,
}

// appView.ts 
export interface IDrawNewsData {
  articles: IDrawDataInNews[],
  status: string,
  totalResults: number
}
export interface IDrawSourcesData {
  sources: ISource[],
  status: string
}

//sources.ts
export enum EnumSourceCategory {
  general = "general",
  business = "business",
  technology = "technology",
  sports = "sports",
  entertainment = "entertainment",
  health = "health",
  science = "science",
}

export interface ISource {
  category: EnumSourceCategory,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string,
}

// export type DrawDataInSources = ISource[]




