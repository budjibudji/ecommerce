import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import the Router
import { CategoryService } from '../category.service'; // Adjust path as necessary
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, CustomAlertComponent],
})
export class HomeComponent implements OnInit {
  categories: any[] = []; // Store the categories
  newArrivals: any[] = []; // Store the categories
  topSellings: any[] = []; // Store the categories
  promos: any[] = []; // Store the categories
  likedItems: any[] = [];
  showAlert: boolean = false;
  currentIndex: number = 0; // For the slider

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,

    private router: Router
  ) {} // Inject Router

  ngOnInit(): void {
    this.loadCategories();
    this.loadNewArrivals();
    this.loadTopSeeling();
    this.loadPromo();
  }
  handleChoice(choice: string) {
    if (choice === 'cancel') {
      this.showAlert = false;
    }
  }

  loadPromo() {
    this.productService.getPromo().subscribe(
      (data) => {
        this.promos = data.slice(0, 4).map((product) => {
          this.loadWishlist(product.id);
          return { ...product, quantity: 1 };
        });
      },
      (error) => {
        console.error('Error loading promo:', error);
      }
    );
  }
  loadTopSeeling() {
    this.productService.getTopSelling().subscribe(
      (data) => {
        this.topSellings = data.slice(0, 4).map((product) => {
          this.loadWishlist(product.id);
          return { ...product, quantity: 1 };
        });
      },
      (error) => {
        console.error('Error loading topSellings:', error);
      }
    );
  }
  loadNewArrivals() {
    this.productService.getNewArrivals().subscribe(
      (data) => {
        this.newArrivals = data.slice(0, 4).map((product) => {
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

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.startAutoScroll(); // Start auto-scrolling after categories are loaded
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  startAutoScroll() {
    setInterval(() => {
      if (this.categories.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      }
    }, 5000); // Change slide every 5 seconds
  }

  goToCategory(id: number) {
    // Use Angular Router for navigation instead of window.location.href
    this.router.navigate(['/category', id]); // This navigates to /category/:id
  }
  getImageUrl(coverPhoto: string): string {
    // Return the full image URL, or a fallback if the image path is invalid
    if (coverPhoto) {
      return `http://localhost:8000/storage/${coverPhoto}`;
    }
    return 'http://localhost:8000/storage/default-image.jpg'; // Fallback image URL
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
}
