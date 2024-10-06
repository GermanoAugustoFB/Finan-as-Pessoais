import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user, httpOptions);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user, httpOptions);
  }

  addTransaction(transaction: any, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(`${this.apiUrl}/transactions`, transaction, { headers });
  }

  getTransactions(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/transactions`, { headers });
  }
}
