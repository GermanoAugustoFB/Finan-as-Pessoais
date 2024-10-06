import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable  } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  addTransaction(transaction: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token || ''}` });
    return this.http.post(`${this.apiUrl}/transactions`, transaction, { headers });
  }

  getTransactions(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/transactions`, { headers });
  }
}