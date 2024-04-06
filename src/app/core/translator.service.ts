import { Injectable } from "@angular/core";
import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
  
@Injectable({providedIn: 'root'})
export class TranslatorService implements OnInit{
  
    language?: string;

    constructor(public translate: TranslateService){}

    ngOnInit(){
        this.language = this.translate.defaultLang;
    }

    onLanguageChange(value: string){
        this.translate.use(value);
    }
}