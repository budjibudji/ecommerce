import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule here
})
export class categoryCreateComponent implements OnInit {
  category = {
    name: '',
    image: null, // This will store the file object
  };
  categories: any[] = [];
  imagePreview: string | null = null; // Property for image preview

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Handle the image change and preview
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.category.image = file; // Store the file object in category object
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Set the image preview as base64 URL
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  }

  // Submit the form
  onSubmit() {
    const formData = new FormData();

    // Append category data to FormData
    formData.append('name', this.category.name);
    // Append image file if selected
    if (this.category.image) {
      formData.append('image', this.category.image);
    }

    // Send the FormData to the backend
    this.categoryService.createCategory(formData).subscribe(
      () => {
        alert('category created successfully');
        this.router.navigate(['/admin/categories']);
      },
      (error) => {
        console.error('Error creating category:', error);
        alert('Failed to create category');
      }
    );
  }
}
