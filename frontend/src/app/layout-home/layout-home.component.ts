import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css',
})
export class LayoutHomeComponent {
  constructor(private router: Router) {}

  // Logout method
  logout() {
    // Clear localStorage (or sessionStorage, depending on your implementation)
    localStorage.removeItem('admin_token'); // Adjust the key if needed

    // Redirect to login page
    this.router.navigate(['/login-admin']); // Adjust the path to your actual login route
  }
}
