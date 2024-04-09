import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (loginService.isLogged) {
    router.navigate(['/dashboard']);
    return false;
  } else {
    return true;
  }
};