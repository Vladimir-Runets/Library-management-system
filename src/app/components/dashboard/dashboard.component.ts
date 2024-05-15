import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibraryService } from '../../core/services/library.service';
import { Book } from '../../core/interfaces/book.interface';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  books$?: Observable<Book[]>;
  destroy$: Subject<null> = new Subject();

  constructor(private libraryService: LibraryService){}

  ngOnInit(): void {
    this.books$ = this.libraryService.getBooks$.pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}