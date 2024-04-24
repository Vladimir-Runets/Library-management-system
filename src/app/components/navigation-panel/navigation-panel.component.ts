import { Component } from '@angular/core';
import { TranslatorService } from '../../core/services/translator.service';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { User } from '../../../app/core/interfaces/user.interface';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent{
  userIcon = faUser;

  constructor(public translatorService: TranslatorService, public loginService: LoginService, private router: Router){}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  isAdminIn(): boolean{
    const isAdminIn = localStorage.getItem(this.loginService.localStorageKey);
    const user: User | null = isAdminIn ? JSON.parse(isAdminIn) : null;
    return user?.role === 'Admin' || this.loginService.loggedUser?.role === 'Admin';
  }
}
