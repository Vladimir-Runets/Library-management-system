import { Component } from '@angular/core';
import { TranslatorService } from '../../core/services/translator.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

  constructor(public translatorService: TranslatorService){}
}