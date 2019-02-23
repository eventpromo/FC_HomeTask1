export default class NewsItem {
  id?: string;
  title: string;
  subTitle?: string;
  image: string;
  description: string;
  date: Date;
  author: string;
  externalUrl?: string;

  constructor() {
  }

  get isExternal() {
    return !!this.externalUrl;
  }

  get isInternal() {
    return !this.isExternal;
  }
};