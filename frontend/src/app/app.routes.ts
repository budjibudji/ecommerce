// app-routing.module.ts
import { Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { TokenGuard } from './auth/token.guard';
import { AdminTokenGuard } from './auth/admintoken.guard';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DashboardGuard } from './auth/dashboardadmin.guard';

export const routes: Routes = [
  {
    path: 'admin/products',
    component: ProductsListComponent,
    canActivate: [DashboardGuard],
  },
  {
    path: 'admin/products/create',
    component: ProductCreateComponent,
    canActivate: [DashboardGuard],
  },
  {
    path: 'admin/products/edit/:id',
    component: ProductEditComponent,
    canActivate: [DashboardGuard],
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
