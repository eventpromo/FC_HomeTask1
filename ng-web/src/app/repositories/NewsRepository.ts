import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export default class NewsRepository implements RepositoryInterface<NewsItem> {
  private headers: HttpHeaders;
  private options: any;
  private url: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNzA0OGVmYTdjNGQ3YWVlOGY4MWM0NiIsIm5hbWUiOiJUZXN0IFRlc3QiLCJlbWFpbCI6InNlcmhpb0BnbWFpbC5jb20iLCJpYXQiOjE1NTA4NjI1NzV9.AJtz6iGHDH6WGcCfJZ6fj5uaeoCNwJ5RxId9RSVEzts',
    });
    this.options = { headers: this.headers }
    this.url = `${config.MY_API_URL}news`;
  }

  get(params: any): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.url, this.options).pipe(map((data: any) => {
      return data.map(item => {
        const news = new NewsItem();
        news.author = item.author;
        news.date = item.date;
        news.description = item.description;
        news.image = item.image;
        news.subTitle = item.subTitle;
        news.title = item.title;
        return news;
      });
    }));
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