import { Input, Component, OnInit } from '@angular/core';
import NewsItem from '../../models/NewsItem';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  public items: Array<NewsItem> = [];

  ngOnInit() {
  }

}
