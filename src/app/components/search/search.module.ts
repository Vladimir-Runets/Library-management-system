import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }