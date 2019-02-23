import { Component, OnInit, OnDestroy } from '@angular/core';
import AuthService from '../../services/AuthService'
import { Subscription } from 'rxjs';
import User from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.subscription = this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
