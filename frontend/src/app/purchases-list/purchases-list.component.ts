import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'; // You'll create this service to interact with the API
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule here
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css'],
  imports: [FormsModule, RouterModule, CommonModule], // Add FormsModule here
})
export class PurchasesListComponent implements OnInit {
  purchases: any[] = [];

  constructor(private purchasesService: PurchaseService) {}

  ngOnInit() {
    this.purchasesService.getPurchases().subscribe((data) => {
      this.purchases = data;
    });
  }
  total(purchases: any) {
    return parseFloat(
      purchases.reduce((prev: any, curr: any) => {
        return prev + parseFloat(curr.price) * curr.quantity;
      }, 0)
    ).toFixed(2);
  }
  calculateTotalPrice(price: string, quantity: number): string {
    return (parseFloat(price) * quantity).toFixed(2); // Ensure it returns a string with 2 decimals
  }
}
