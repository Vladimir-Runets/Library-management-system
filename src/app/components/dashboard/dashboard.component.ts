import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../core/services/library.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  books = this.libraryService.getStarterBooks();

  constructor(private libraryService: LibraryService){}

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
}