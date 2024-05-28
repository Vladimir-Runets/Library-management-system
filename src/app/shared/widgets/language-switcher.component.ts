import { Component } from '@angular/core';
import { TranslatorService } from '../../core/services/translator.service';
import { IconDefinition, faEarthEurope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  langSwitcherIcon: IconDefinition = faEarthEurope;

  constructor(public translatorService: TranslatorService){}
}