import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import the Router
import { CategoryService } from '../category.service'; // Adjust path as necessary
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-arriving',
  templateUrl: './new-arriving.component.html',
  styleUrls: ['./new-arriving.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class NewArrivingComponent implements OnInit {
  newArrivals: any[] = []; // Store the categories
  likedItems: any[] = [];

  constructor(
    private productService: ProductService,

    private router: Router
  ) {} // Inject Router

  ngOnInit(): void {
    this.loadNewArrivals();
  }

  loadNewArrivals() {
    this.productService.getNewArrivals().subscribe(
      (data) => {
        this.newArrivals = data.map((product) => {
          this.loadWishlist(product.id);
          return { ...product, quantity: 1 };
        });
      },
      (error) => {
        console.error('Error loading newArrivals:', error);
      }
    );
  }
  loadWishlist(productid: number) {
    this.productService.likedWishlistitem(productid).subscribe(
      (data: any): any => {
        console.log('ok');
        if (data) {
          return this.likedItems.push(productid);
        }
        this.likedItems = this.likedItems.filter((id) => id !== productid);
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  // Optionally handle add to cart or wishlist actions
  addToCart(productId: number, quantity: number): any {
    if (!localStorage.getItem('token'))
      return this.router.navigate(['/login-customer']);

    this.productService.addToCart(productId, quantity).subscribe(
      () => {
        alert('Product added to cart succefuly');
      },
      (error) => {
        console.error('Error adding item to cart', error);
        alert('Failed to add item to cart');
      }
    );
    // Logic to add product to cart
  }

  addToWishlist(productId: number): any {
    // Logic to add product to wishlist

    this.productService.addToWishlist(productId).subscribe(
      () => {
        alert('Product added to wishlist');
        this.loadWishlist(productId);
      },
      (error) => {
        console.error('Error adding item to wishlist', error);
        alert('Failed to add item to wishlist');
      }
    );
  }
  removeFromWishlist(productId: number): any {
    // Logic to add product to wishlist

    this.productService.removeFromWishlist(productId).subscribe(
      () => {
        alert('Product removed from wishlist');
        this.loadWishlist(productId);
      },
      (error) => {
        console.error('Error adding item to wishlist', error);
        alert('Failed to remove  item from wishlist');
      }
    );
  }
  toggleWishlist(productId: number): any {
    if (!localStorage.getItem('token'))
      return this.router.navigate(['/login-customer']);

    if (this.likedItems.includes(productId))
      return this.removeFromWishlist(productId);

    return this.addToWishlist(productId);
  }
}
