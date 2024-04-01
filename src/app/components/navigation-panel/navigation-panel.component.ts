import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  showUserDropdown: boolean = false;
  showLanguageSwicherDropdown: boolean = false;

  constructor(public translate: TranslateService){}

  toggleDropdown(dropdown: string): void {
    if (dropdown === 'user') this.showUserDropdown = !this.showUserDropdown;
    else if (dropdown === 'language') this.showLanguageSwicherDropdown = !this.showLanguageSwicherDropdown;
  }
}