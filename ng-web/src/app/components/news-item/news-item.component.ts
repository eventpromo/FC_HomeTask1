import { Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import NewsItem from '../../models/NewsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() model: NewsItem;

  constructor(private sanitizer: DomSanitizer) {
  }

  sanitizeImg = (image: string) => this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);

  canEdit = (model: NewsItem) => !model.isExternal;;
}
