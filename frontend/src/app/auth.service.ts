import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiAdminUrl = 'http://localhost:8000/api/admin/login'; // Laravel backend URL
  private apiCustomerUrl = 'http://localhost:8000/api/customer/login'; // Laravel backend URL

  constructor(private http: HttpClient) {}

  loginadmin(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.apiAdminUrl, body);
  }
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.apiCustomerUrl, body);
  }
}
