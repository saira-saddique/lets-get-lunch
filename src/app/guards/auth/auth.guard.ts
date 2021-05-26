import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate():
    Observable<boolean> |
    Promise<boolean> |
    boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // TODO Redirect to login
      this.router.navigate(['/']);
      return false;
    }
  }
}