import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class LoginCustomerComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Save the token
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    );
  }
}
