import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import RepositoryInterface from './RepositoryInterface';
import NewsItem from '../models/NewsItem';

export default class NewsOrgRepository implements RepositoryInterface<NewsItem> {
  private headers: HttpHeaders;
  private options: any;
  private url: string;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': config.NEWS_ORG_API_KEY,
    });
    this.options = { headers: this.headers }
    this.url = `${config.NEWS_ORG_API_URL}everything`;
  }

  searchUrl = (params = {}) => Object.entries(params).map((item) => {
    const [key, value] = item;
    return { key, value };
  }).reduce((accumulator, { key, value }) => `${accumulator}${key}=${value}`, `${this.url}?`);

  get(params): Observable<NewsItem[]> {
    if (!params.q) {
      return new Observable<NewsItem[]>(null);
    }
    const url = this.searchUrl(params);
    return this.http.get<NewsItem[]>(url, this.options).pipe(map((data: any) => {
      return data.articles.map(item => {
        const news = new NewsItem();
        news.author = item.author;
        news.date = item.date;
        news.description = item.description;
        news.image = item.urlToImage;
        news.subTitle = item.subTitle;
        news.title = item.title;
        news.externalUrl = item.url;
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