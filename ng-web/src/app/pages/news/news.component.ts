import { Component, Input, OnInit } from '@angular/core';
import NewsService from '../../services/NewsService';
import NewsItem from '../../models/NewsItem';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  @Input() public items: NewsItem[];

  constructor(private service: NewsService) {

  }

  getNews() {
    this.service.get({q: 'test'})
    .subscribe((data: NewsItem[]) => {
      this.items = data;
    }, error => console.log(error));
  }

  ngOnInit() {
    this.getNews();
  }

  onControlPanelChanged(source) {
    localStorage.setItem('source', source.id);
    this.getNews();
  }
}
