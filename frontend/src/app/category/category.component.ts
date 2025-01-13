import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
  RouterStateSnapshot,
} from '@angular/router'; // Import the Router
import { CategoryService } from '../category.service'; // Adjust path as necessary
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, CustomAlertComponent],
})
export class CategoryComponent implements OnInit {
  category = {
    id: '',
    cover_photo: '',
    image: '',
    name: '',
    description: '',
    products: [] as any[],
  };

  likedItems: any[] = [];
  showAlert: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,

    private router: Router,
    private route: ActivatedRoute
  ) {} // Inject Router
  handleChoice(choice: string) {
    if (choice === 'cancel') {
      this.showAlert = false;
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((queryParams) => {
      this.loadCategory();
    });
  }

  loadCategory() {
    this.categoryService
      .getCategoryById(this.route.snapshot.paramMap.get('id') as string)
      .subscribe(
        (data) => {
          this.category = {
            ...data,
            products: data.products.map((product: any) => {
              this.loadWishlist(product.id);
              return { ...product, quantity: 1 };
            }),
          };
        },
        (error) => {
          console.error('Error loading promo:', error);
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
  getImageUrl(coverPhoto: string): string {
    // Return the full image URL, or a fallback if the image path is invalid
    if (coverPhoto) {
      return `http://localhost:8000/storage/${coverPhoto}`;
    }
    return 'http://localhost:8000/storage/default-image.jpg'; // Fallback image URL
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
