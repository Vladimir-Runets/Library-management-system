import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Book } from '../../core/interfaces/book.interface';
import { LibraryService } from '../../core/services/library.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss'],
})
export class BookReviewComponent implements OnInit{
  id!: string;
  book!: Book;
     
  constructor(private route: ActivatedRoute, public libraryService: LibraryService){}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      const foundBook: Book | undefined = this.libraryService.findBookById(this.id);
      if (foundBook) {
        this.book = foundBook;
      }
    });
  }
}