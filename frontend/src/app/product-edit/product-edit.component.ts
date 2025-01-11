// src/app/product-edit/product-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class ProductEditComponent implements OnInit {
  product: any = { name: '', description: '', price: 0, category_id: null };
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(Number(productId)).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    }

    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onSubmit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService
        .updateProduct(Number(productId), this.product)
        .subscribe(
          () => {
            alert('Product updated successfully');
            this.router.navigate(['/admin/products']);
          },
          (error) => {
            console.error('Error updating product', error);
          }
        );
    }
  }
}
