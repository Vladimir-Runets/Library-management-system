import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loggedUser: User | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.isLogged = true;
      this.loggedUser = JSON.parse(userString);
    }
  }

  login(username: string, password: string): void {
    this.isLogged = true;
    this.loggedUser = { username, password, lastLogged: new Date()};
    this.router.navigate(['/dashboard'], {relativeTo: this.route});
    localStorage.setItem('user', JSON.stringify(this.loggedUser));
  }

  logOut(): void {
    this.isLogged = false;
    this.loggedUser = null;
    this.router.navigate(['/login'], {relativeTo: this.route});
    localStorage.removeItem('user');
  }
}
