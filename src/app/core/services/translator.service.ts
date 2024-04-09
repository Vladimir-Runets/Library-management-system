import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
  
@Injectable({providedIn: 'root'})
export class TranslatorService{

    language?: string;

    constructor(private translate: TranslateService){
        this.language = translate.defaultLang;
    }

    onLanguageChange(value: string){
        this.translate.use(value);
    }

    getTranslation(key: string): string {
        return this.translate.instant(key);
    }
}