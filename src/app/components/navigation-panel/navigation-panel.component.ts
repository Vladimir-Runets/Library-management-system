import { Component } from '@angular/core';
import { TranslatorService } from '../../core/services/translator.service';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent{
  userIcon = faUser;

  constructor(public translatorService: TranslatorService, public loginService: LoginService){}
}
