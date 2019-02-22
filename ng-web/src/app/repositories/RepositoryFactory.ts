import RepositoryInterface from '../repositories/RepositoryInterface';
import NewsOrgRepository from '../repositories/NewsOrgRepository';
import NewsRepository from '../repositories/NewsRepository';
import Sources from '../models/Sources';
import { HttpClient } from '@angular/common/http';

export default class RepositoryFactory {
  static create(http: HttpClient): RepositoryInterface<any> {
    const sItem = localStorage.getItem('source');
    const source = sItem ? Sources[Sources[sItem]] : Sources.NewsOrg;
    if (Sources.NewsOrg == source) {
      return new NewsOrgRepository(http);
    } else {
      return new NewsRepository(http);
    }
  }
}

