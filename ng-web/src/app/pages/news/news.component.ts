import { Component, Input, OnInit } from '@angular/core';
import NewsService from '../../services/NewsService';
import AuthService from '../../services/AuthService';
import NewsItem from '../../models/NewsItem';
import Sources from '../../models/Sources';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  source: Sources | string;
  @Input() public items: NewsItem[];

  constructor(private service: NewsService, private auth: AuthService) {
    const user = auth.getUser();
    if (user != null) {
      const sItem = localStorage.getItem('source');
      this.source = sItem ? Sources[Sources[sItem]] : Sources.NewsOrg;
    } else {
      this.source = Sources.NewsOrg;
    }
  }

  getNews(filter = {}) {
    this.service.get(filter)
      .subscribe((data: NewsItem[]) => {
        this.items = data;
      }, error => console.log(error));
  }

  ngOnInit() {
    this.getNews();
  }

  onControlPanelChanged(panel) {
    localStorage.setItem('source', panel.source);
    this.getNews({ q: panel.query });
  }
}
