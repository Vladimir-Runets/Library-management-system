import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { User } from '../../../app/core/interfaces/user.interface';
import { USER_ROLE } from "../../core/enums/user-role.enum";

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent{
  userIcon = faUser;

  constructor(public loginService: LoginService, private router: Router){}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  isAdminIn(): boolean{
    const isAdminIn = localStorage.getItem(this.loginService.localStorageKey);
    const user: User | null = isAdminIn ? JSON.parse(isAdminIn) : null;
    return user?.role === USER_ROLE.Admin || this.loginService.loggedUser?.role === USER_ROLE.Admin;
  }
}
