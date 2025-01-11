import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private apiUrl = 'http://localhost:8000/api/purchases'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  // Get all categories
  getPurchases(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get a single category by its ID

  // Error handler (can be expanded for more sophisticated error handling)
}
