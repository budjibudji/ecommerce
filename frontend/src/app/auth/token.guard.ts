import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Vérifier si le token existe dans localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Si le token existe, rediriger vers '/'
      this.router.navigate(['/']);
      return false; // On bloque la navigation vers la route demandée
    }

    // Si pas de token, autoriser la navigation vers la route protégée
    return true;
  }
}
