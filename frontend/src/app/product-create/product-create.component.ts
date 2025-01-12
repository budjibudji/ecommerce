import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule here
})
export class ProductCreateComponent implements OnInit {
  product = {
    name: '',
    description: '',
    price: 0,
    category_id: '',
    stock: 0,
    image: null, // This will store the file object
    promo_price: undefined,
  };
  categories: any[] = [];
  imagePreview: string | null = null; // Property for image preview

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Handle the image change and preview
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.product.image = file; // Store the file object in product object
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Set the image preview as base64 URL
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  }

  // Submit the form
  onSubmit() {
    const formData = new FormData();

    // Append product data to FormData
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('category_id', this.product.category_id.toString());
    formData.append('stock', this.product.stock.toString());

    // Append image file if selected
    if (this.product.promo_price) {
      formData.append('promo_price', this.product.promo_price);
    }
    if (this.product.image) {
      formData.append('image', this.product.image);
    }

    // Send the FormData to the backend
    this.productService.createProduct(formData).subscribe(
      () => {
        alert('Product created successfully');
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        console.error('Error creating product:', error);
        alert('Failed to create product');
      }
    );
  }
}
