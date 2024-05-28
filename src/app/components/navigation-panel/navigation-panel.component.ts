import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

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
}
