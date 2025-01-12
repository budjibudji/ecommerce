import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import the Router
import { CategoryService } from '../category.service'; // Adjust path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  categories: any[] = []; // Store the categories
  currentIndex: number = 0; // For the slider

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {} // Inject Router

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.startAutoScroll(); // Start auto-scrolling after categories are loaded
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  startAutoScroll() {
    setInterval(() => {
      if (this.categories.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      }
    }, 5000); // Change slide every 5 seconds
  }

  goToCategory(id: number) {
    // Use Angular Router for navigation instead of window.location.href
    this.router.navigate(['/category', id]); // This navigates to /category/:id
  }
  getImageUrl(coverPhoto: string): string {
    // Return the full image URL, or a fallback if the image path is invalid
    if (coverPhoto) {
      return `http://localhost:8000/storage/${coverPhoto}`;
    }
    return 'http://localhost:8000/storage/default-image.jpg'; // Fallback image URL
  }
}
