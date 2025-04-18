import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
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
