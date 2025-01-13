import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class CheckoutComponent {
  address: string = '';
  phone_number: string = '';
  @Input() carts: any[] = [];

  @Output() choice = new EventEmitter<string>();
  constructor(private router: Router, private productService: ProductService) {} // Inject Router
  // Close the modal and emit the choice
  onChoice(choice: string): void {
    this.choice.emit(choice);
  }
  onCheckout() {
    this.productService
      .validateCart(
        this.carts?.map(({ id }) => id),
        this.address,
        this.phone_number
      )
      .subscribe(
        () => {
          alert('Order created');
          this.router.navigate(['/purchases']);
        },
        (error) => {
          console.error('Error creating order:', error);
          alert('Failed to create order');
        }
      );
    console.log(this.address, this.phone_number, this.carts);
  }
}
