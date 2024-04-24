import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../../core/interfaces/book.interface';
import books from '../../../app/assets/mock/books';

@Injectable({
    providedIn: 'root'
  })
export class LibraryService {
  private booksSubject: Subject<Book[]> = new Subject<Book[]>();
  private books: Book[] = [];
  localStorageKey = 'localBooks';

  constructor() { 
    const localBooks = localStorage.getItem(this.localStorageKey);
    if (localBooks) {
      this.books = JSON.parse(localBooks);
    } else {
      this.books = books;
    }
    this.booksSubject.next(this.books);
  }

  getStarterBooks(): Book[]{
    return this.books;
  }

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  addBook(book: Book): void {
    this.books.push(book);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.books));
    this.booksSubject.next(this.books);
  }
}