import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule 
  ],
  exports: [
    BookComponent
  ]
})
export class BookModule { }