import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import User from '../models/User';
import { map } from 'rxjs/operators';

@Injectable()
class AuthService {
  private url: string;
  private _user: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.url = `${config.MY_API_URL}`;
    this._user = new BehaviorSubject(null);
    this._user.next(this.getUser())
  }

  get user(): Observable<User> {
    return this._user;
  }

  tokenParse(token: string): User {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  getUser(): User {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return this.tokenParse(token);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.url}login`, user).pipe(map((data: any) => {
      return this.setToken(data.token);
    }));
  }

  setToken(token: string): Observable<User> {
    localStorage.setItem('token', token);
    this._user.next(this.tokenParse(token));
    return this._user;
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}register`, user).pipe(map((data: any) => {
      return this.setToken(data.token);
    }));
  }
}

export default AuthService;
