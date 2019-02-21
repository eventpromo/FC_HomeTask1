import { Input, Component, OnChanges, SimpleChange } from '@angular/core';
import NewsItem from '../../models/NewsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnChanges {
  @Input() model: NewsItem;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {

    }
  }
}
