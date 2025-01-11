// src/app/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8000/api/categories'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  // Get all categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
