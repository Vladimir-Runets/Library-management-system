import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BookReviewComponent } from './book-review.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    BookReviewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule
  ],
  exports: [
    BookReviewComponent
  ]
})
export class BookReviewModule { }