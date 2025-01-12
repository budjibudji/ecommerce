import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css',
})
export class LayoutHomeComponent {
  isDropdownOpen = false;
  isMobileMenuOpen = false;
  isProfileDropdownOpen: boolean = false;

  categories: any[] = []; // Define the categories array

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch categories from the service
    this.categoryService.getCategories().subscribe((categories: any[]) => {
      this.categories = categories; // Populate the categories array with data
    });
  }

  // Toggle the dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close the dropdown if the user clicks outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const dropdown = document.getElementById('categories-dropdown');
    const button = document.getElementById('categories-button');
    if (dropdown && button) {
      if (
        !dropdown.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        this.isDropdownOpen = false;
      }
    }
  }
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Replace 'authToken' with the actual key for your token
  }
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
  // Toggle the mobile menu
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  // Logout method
  logout() {
    // Clear localStorage (or sessionStorage, depending on your implementation)
    localStorage.removeItem('token'); // Adjust the key if needed

    // Redirect to login page
    this.router.navigate(['/login-customer']); // Adjust the path to your actual login route
  }
}
