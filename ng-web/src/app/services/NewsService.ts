import RepositoryInterface from '../repositories/RepositoryInterface';
import RepositoryFactory from '../repositories/RepositoryFactory';
import { HttpClient } from '@angular/common/http';
import NewsItem from '../models/NewsItem';
import { Injectable } from '@angular/core';

@Injectable()
class NewsService {
  constructor(private http: HttpClient) {
  }

  get repository(): RepositoryInterface<NewsItem> {
    return RepositoryFactory.create(this.http);
  }

  create(model: NewsItem) {
    return this.repository.create(model)
  }

  get(filter: any) {
    return this.repository.get(filter)
  }

  getById(id: string) {
    return this.repository.getById(id)
  }

  update(id: string, model: NewsItem) {
    return this.repository.update(id, model)
  }

  delete(id: string) {
    return this.repository.delete(id)
  }
}

export default NewsService;
