import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import users from "../../../app/assets/mock/users";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loggedUser: User | null = null;
  showErrorMessage:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.isLogged = true;
      this.loggedUser = JSON.parse(userString);
    }
  }

  login(username: string, password: string): void {
    const user = users.find((user: User) => user.username === username && user.password === password); 

    if (user) {
      this.isLogged = true;
      this.loggedUser = user;
      if(user.role === "Admin"){
        this.router.navigate(['/administration'], {relativeTo: this.route});
      }
      else{
        this.router.navigate(['/dashboard'], {relativeTo: this.route});
      }
    } else {
      this.showErrorMessage = true;
    }
  }

  logOut(): void {
    this.isLogged = false;
    this.loggedUser = null;
    this.router.navigate(['/login'], {relativeTo: this.route});
  }
}