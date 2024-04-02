import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit{
  showUserDropdown: boolean = false;
  showLanguageSwicherDropdown: boolean = false;
  userIcon = faUser;
  language?: string;

  constructor(public translate: TranslateService){}

  ngOnInit(){
    this.language = this.translate.defaultLang;
  }

  onLanguageChange(value: string){
    this.translate.use(value);
  }
}