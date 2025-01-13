import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Input() carts: string[] = [];

  @Output() choice = new EventEmitter<string>();
  constructor(private router: Router) {} // Inject Router
  // Close the modal and emit the choice
  onChoice(choice: string): void {
    this.choice.emit(choice);
  }
  onCheckout() {}
}
