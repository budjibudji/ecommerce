import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.loginadmin(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('admin_token', response.token); // Save the token
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    );
  }
}
