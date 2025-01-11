// app-routing.module.ts
import { Routes } from '@angular/router';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { TokenGuard } from './auth/token.guard';
import { AdminTokenGuard } from './auth/admintoken.guard';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DashboardGuard } from './auth/dashboardadmin.guard';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { categoryCreateComponent } from './category-create/category-create.component';
import { categoryEditComponent } from './category-edit/category-edit.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [DashboardGuard],

    children: [
      {
        path: 'purchases',
        component: PurchasesListComponent,
      },
      {
        path: 'categories/create',
        component: categoryCreateComponent,
      },
      {
        path: 'categories/edit/:id',
        component: categoryEditComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: ProductCreateComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent,
      },
    ],
  },
  {
    path: 'login-customer',
    component: LoginCustomerComponent,
    canActivate: [TokenGuard], // Appliquer le guard ici
  },
  {
    path: 'login-admin',
    component: LoginAdminComponent,
    canActivate: [AdminTokenGuard], // Appliquer le guard ici
  },
];
