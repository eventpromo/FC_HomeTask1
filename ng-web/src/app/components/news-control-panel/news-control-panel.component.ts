import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import Sources from '../../models/Sources';

@Component({
  selector: 'app-news-control-panel',
  templateUrl: './news-control-panel.component.html',
  styleUrls: ['./news-control-panel.component.scss']
})
export class NewsControlPanelComponent implements OnInit {
  @Output() onChanged = new EventEmitter();

  sourceControl = new FormControl();
  sources: any[];
  source: any = {};

  ngOnInit() {
    
    this.sources = [{
      id: Sources.NewsOrg,
      name: 'News Org'
    }, {
      id: Sources.MyApi,
      name: 'My Api'
    }];
  }

  onSourceChanged = $event => {
    this.source = $event.option.value;
    this.onChanged.emit(this.source);
  };

  displayFn = option => option ? option.name : '';
}
