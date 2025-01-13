// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api/products'; // Update with your backend API URL
  private apiCartsUrl = 'http://localhost:8000/api/carts'; // Update with your backend API URL
  private apiWishlistsUrl = 'http://localhost:8000/api/wishlists'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getNewArrivals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/new`);
  }

  addToCart(product_id: number, quantity: number): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiCartsUrl}`, {
      product_id,
      quantity,
    });
  }
  addToWishlist(product_id: number): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiWishlistsUrl}`, {
      product_id,
    });
  }

  likedWishlistitem(product_id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiWishlistsUrl}/product/${product_id}`
    );
  }
  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiWishlistsUrl}`);
  }
  removeFromCart(id: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiCartsUrl}/${id}`);
  }
  removeFromWishlist(id: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiWishlistsUrl}/product/${id}`);
  }
  getTopSelling(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top-selling`);
  }

  getPromo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/promo`);
  }
  // Get a single product by ID
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new product
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, product);
  }

  // Update an existing product
  updateProduct(id: string = '', product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}?_method=PUT`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
