import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // <-- Import RouterModule here
import { ProductService } from '../product.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [FormsModule, RouterModule, CommonModule, CheckoutComponent], // Add FormsModule here
})
export class CartComponent implements OnInit {
  cartitems: any[] = [];
  outOfstock: any[] = [];
  exeededstock: any[] = [];
  selectedItems: any[] = []; // Array to track selected items
  showCheckout: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.productService.getCart().subscribe((data) => {
      this.cartitems = data.filter(({ product }) => product.stock > 0);
      this.outOfstock = data.filter(({ product }) => (product.stock = 0));
      this.exeededstock = data.filter(({ product,quantity }) => (product.stock > 0 && product.stock<quantity));

    });
  }
  onSelectionChange(item: any): void {
    if (item.selected) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(
        (selectedItem) => selectedItem !== item
      );
    }
  }
  removeItemFromCart(item: any) {
    this.productService.removeFromCart(item.id).subscribe(
      () => {
        this.loadItems();
        alert('Deleted');
      },
      (error) => {
        console.error('Error deleting:', error);
        alert('Failed to delete');
      }
    );
  }

  // Proceed to checkout
  proceedToCheckout(): void {
    // Pass the selected items to the checkout page
    this.showCheckout = true;
  }
  handleChoice(choice: string) {
    if (choice === 'cancel') {
      this.showCheckout = false;
    }
  }
  total(cartitems: any) {
    return parseFloat(
      cartitems.reduce((prev: any, curr: any) => {
        return (
          prev +
          parseFloat(curr.product.promo_price || curr.product.price) *
            curr.quantity
        );
      }, 0)
    ).toFixed(2);
  }
  calculateTotalPrice(price: string, quantity: number): string {
    return (parseFloat(price) * quantity).toFixed(2); // Ensure it returns a string with 2 decimals
  }
}
