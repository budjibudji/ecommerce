import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // You'll create this service to interact with the API
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule here
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  imports: [FormsModule, RouterModule, CommonModule], // Add FormsModule here
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
