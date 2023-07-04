import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?username=${username}&password=${password}`).pipe(
      tap((res) => {
        if (res.length > 0) {
          this.isLoggedIn = true;
          localStorage.setItem('currentUser', JSON.stringify(res[0]));
        } else {
          this.isLoggedIn = false;
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
