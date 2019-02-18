import { config } from '../../environments/environment';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export class NewsRepository implements RepositoryInterface<NewsItem> {
  constructor() {

  }

  get(): Array<NewsItem> {
    return [new NewsItem()];
  }

  getById(id: string): NewsItem {
    return new NewsItem();
  }

  create(model: NewsItem): NewsItem {
    return new NewsItem();
  }

  update(id: string, model: NewsItem): NewsItem {
    return new NewsItem();
  }

  delete(id: string): NewsItem {
    return new NewsItem();
  }

}