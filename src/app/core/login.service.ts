import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  isLogged = false;
  loggedUser: User | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("NgOnInit");
    const userString = localStorage.getItem('user');
    try {
      if (userString) {
        console.log("User has logged");
        this.isLogged = true;
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
  }

  login(username: string, password: string): void {
    this.isLogged = true;
    this.loggedUser = { username, password, lastLogged: new Date()};
    this.router.navigate(['/dashboard'], {relativeTo: this.route});
    localStorage.setItem('user', JSON.stringify(this.loggedUser));
    const userString = localStorage.getItem('user');
    try {
      if (userString) {
        console.log("JSON parsed");
        console.log(JSON.parse(userString));
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
    console.log("User logged");
  }

  logOut(): void {
    this.isLogged = false;
    this.loggedUser = null;
    this.router.navigate(['/login'], {relativeTo: this.route});
    localStorage.removeItem('user');
    console.log("User unlogged");
  }
}