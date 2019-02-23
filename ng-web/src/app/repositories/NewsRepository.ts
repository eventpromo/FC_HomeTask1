import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export default class NewsRepository implements RepositoryInterface<NewsItem> {
  private headers: HttpHeaders;
  private options: any;
  private url: string;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token') || '';
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    this.options = { headers: this.headers }
    this.url = `${config.MY_API_URL}api/news`;
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