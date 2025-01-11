import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'; // You'll create this service to interact with the API
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule here
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  imports: [FormsModule, RouterModule, CommonModule], // Add FormsModule here
})
export class CategoriesListComponent implements OnInit {
  categories: any[] = [];

  constructor(private caregorieService: CategoryService) {}

  ngOnInit() {
    this.caregorieService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.caregorieService.deleteCategory(id).subscribe(() => {
        this.categories = this.categories.filter(
          (category) => category.id !== id
        );
      });
    }
  }
}
