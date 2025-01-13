import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class RegisterCustomerComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password, this.name).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Save the token
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Register failed', error);
        alert('Register failed');
      }
    );
  }
}
