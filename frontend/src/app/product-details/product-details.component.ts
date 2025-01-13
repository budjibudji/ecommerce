import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service'; // Assuming you have a ProductService to fetch product data
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, CustomAlertComponent],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  likedItems: any[] = [];
  showAlert: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((queryParams) => {
      this.loadProduct();
    });
  }

  loadProduct() {
    this.productService
      .getProductById(this.route.snapshot.paramMap.get('id') as string)
      .subscribe(
        (data) => {
          this.product = {
            ...data,
            quantity: 1,
          };
          this.loadWishlist(this.product.id);
        },
        (error) => {
          console.error('Error loading product:', error);
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
    if (!localStorage.getItem('token')) {
      this.showAlert = true;
      return;
    }

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
    if (!localStorage.getItem('token')) {
      this.showAlert = true;
      return;
    }

    if (this.likedItems.includes(productId))
      return this.removeFromWishlist(productId);

    return this.addToWishlist(productId);
  }
  handleChoice(choice: string) {
    if (choice === 'cancel') {
      this.showAlert = false;
    }
  }
}
