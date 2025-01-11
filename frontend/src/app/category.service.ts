import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  // Get a single category by its ID
  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${categoryId}`);
  }

  // Create a new category
  createCategory(categoryData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, categoryData);
  }

  // Update an existing category
  updateCategory(categoryId: number, categoryData: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/${categoryId}?_method=PUT`,
      categoryData
    );
  }

  // Delete a category
  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${categoryId}`);
  }

  // Error handler (can be expanded for more sophisticated error handling)
}
