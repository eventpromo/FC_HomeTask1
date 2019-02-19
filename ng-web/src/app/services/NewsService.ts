import RepositoryInterface from '../repositories/RepositoryInterface';
import NewsOrgRepository from '../repositories/NewsOrgRepository';
import { HttpClient } from '@angular/common/http';
import NewsItem from '../models/NewsItem';
import { Injectable } from '@angular/core';

@Injectable()
class NewsService {
  private repository: RepositoryInterface<NewsItem>

  constructor(http: HttpClient) {
    this.repository = new NewsOrgRepository(http);
  }

  create(model: NewsItem) {
    return this.repository.create(model)
  }

  get(filter: any) {
    return this.repository.get(filter)
  }

  getById(id: String) {
    return this.repository.getById(id)
  }

  update(id: String, model: NewsItem) {
    return this.repository.update(id, model)
  }

  delete(id: String) {
    return this.repository.delete(id)
  }
}

export default NewsService;
