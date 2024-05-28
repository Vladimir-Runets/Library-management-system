import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookCardComponent } from './book-card.component';
import { TranslationPipeModule } from '../../pipes/translate.pipe.module';

@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    TranslationPipeModule 
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookCardModule { }