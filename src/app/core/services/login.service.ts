import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { USER_ROLE } from "../../core/enums/user-role.enum";
import { Users } from "../../../app/assets/mock/users";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  loggedUser: User | null = null;
  showErrorMessage:boolean = false;
  localStorageKey = 'loggedInUser';

  constructor(private router: Router, private route: ActivatedRoute) {}

  login(username: string, password: string): void {
    const user = Users.find((user: User) => user.username === username && user.password === password); 

    if (user) {
      this.isLogged = true;
      this.loggedUser = user;
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
      if(user.role === USER_ROLE.Admin){
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
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(['/login'], {relativeTo: this.route});
  }
}