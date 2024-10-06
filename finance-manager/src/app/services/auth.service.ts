import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'authToken'; // Onde o token JWT será armazenado

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user, httpOptions);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, httpOptions).pipe(
        tap((response: any) => {
            if (response.token) {
                this.setToken(response.token); // Armazenar o token
            }
        })
    );
}

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
