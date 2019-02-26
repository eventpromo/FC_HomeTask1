import { Input, Output, Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import AuthService from '../../services/AuthService'
import Sources from '../../models/Sources';
import { Subscription } from 'rxjs';
import User from 'src/app/models/User';

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.scss']
})
export class NewsPanelComponent implements OnInit, OnDestroy {
  @Input() sourceId: Sources;
  @Output() onChanged = new EventEmitter();

  sourceControl = new FormControl();
  sources: any[];
  source: any = {};
  onlyMy: boolean = false;
  query: string = '';
  user: User = null;
  subscription: Subscription;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.auth.user.subscribe((user) => {
      this.user = user;
    });
    this.sources = [{
      id: Sources.NewsOrg,
      name: 'News Org'
    }, {
      id: Sources.MyApi,
      name: 'My Api'
    }];
    this.source = this.sources.find(item => item.id == this.sourceId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSourceChanged = $event => this.changed();

  onQueryChanged = $event => this.changed();

  onOnlyMyChanged = $event => this.changed();

  changed() {
    this.onChanged.emit({
      source: this.source.id,
      onlyMy: this.onlyMy,
      query: this.query,
    });
  }

  displayFn = option => option ? option.name : '';
}
