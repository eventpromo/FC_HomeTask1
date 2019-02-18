import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export class ConfigService {
  constructor() { }
}

export class NewsOrgRepository implements RepositoryInterface<NewsItem> {
  private headers: Headers;

  constructor(private http: HttpClient) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': config.NEWS_ORG_API_KEY
    });

    this.http = new Http();
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