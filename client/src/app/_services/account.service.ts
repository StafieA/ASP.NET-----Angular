import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/User';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5000/api/';
  currenTuser = signal<User | null>(null);
  constructor() {}

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currenTuser.set(user);
        }
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.currenTuser.set(null);
  }
}
