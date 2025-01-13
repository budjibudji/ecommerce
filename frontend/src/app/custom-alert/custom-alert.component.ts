import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css'],
})
export class CustomAlertComponent {
  @Output() choice = new EventEmitter<string>();
  constructor(private router: Router) {} // Inject Router
  // Close the modal and emit the choice
  onChoice(choice: string): void {
    console.log('choice', choice);
    if (choice === 'register') {
      this.router.navigate(['/register']);
    }
    if (choice === 'login') {
      this.router.navigate(['/login-customer']);
    }
    this.choice.emit(choice);
  }
}
