import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export class NewsRepository implements RepositoryInterface<NewsItem> {
  constructor() {

  }

  get(params): Observable<NewsItem[]> {
    return null;
  }

  getById(id: string): Observable<NewsItem> {
    return null;
  }

  create(model: NewsItem): Observable<NewsItem> {
    return null;
  }

  update(id: string, model: NewsItem): Observable<NewsItem> {
    return null;
  }

  delete(id: string): Observable<NewsItem> {
    return null;
  }

}