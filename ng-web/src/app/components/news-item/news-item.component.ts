import { Input, Component, OnInit } from '@angular/core';
import NewsItem from '../../models/NewsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() model: NewsItem;

  ngOnInit() {

  }

}
