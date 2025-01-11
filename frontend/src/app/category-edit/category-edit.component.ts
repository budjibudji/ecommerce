import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule here
})
export class categoryEditComponent implements OnInit {
  category = {
    name: '',
    image: null, // This will store the file object
  };
  categories: any[] = [];
  imagePreview: string | null = null; // Property for image preview

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const catgoryId = this.route.snapshot.paramMap.get('id');
    if (catgoryId) {
      this.categoryService.getCategoryById(Number(catgoryId)).subscribe(
        (data) => {
          this.category = data;
          if (data.image) {
            fetch(`http://localhost:8000/storage/${data.image}`)
              .then((response) => response.blob()) // Convert the response to a Blob
              .then((blob) => {
                const file = new File([blob], 'image', { type: blob.type });

                // Now `file` is a File object, which you can upload or use
                //@ts-ignore
                this.category.image = file;

                // For example, you can display the image preview in an <img> element
                this.imagePreview = URL.createObjectURL(file);
              })
              .catch((error) => {
                console.error('Error fetching image:', error);
              });
          }
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    }

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

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
    this.categoryService
      .updateCategory(
        this.route.snapshot.paramMap.get('id') as string,
        formData
      )
      .subscribe(
        () => {
          alert('category editd successfully');
          this.router.navigate(['/admin/categories']);
        },
        (error) => {
          console.error('Error creating category:', error);
          alert('Failed to edit category');
        }
      );
  }
}
