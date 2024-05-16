import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../core/services/library.service';
import { Book } from '../../core/interfaces/book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  books$?: Observable<Book[]>;

  constructor(private libraryService: LibraryService){}

  ngOnInit(): void {
    this.books$ = this.libraryService.getBooks;
  }
}