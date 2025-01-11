// src/app/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const pathname = window.location.pathname;

  const token = pathname.includes('login')
    ? ''
    : localStorage.getItem(
        pathname.includes('/admin') ? 'admin_token' : 'token'
      ); // Or fetch from your auth service

  // If token exists, clone the request and add the Authorization header
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Pass the modified request to the next handler
  return next(req);
};
