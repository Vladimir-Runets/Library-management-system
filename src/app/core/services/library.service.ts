import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Book } from '../../core/interfaces/book.interface';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { BOOK_STATUS } from '../../core/enums/book-status.enum';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Books } from '../../../app/assets/mock/books';
import moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { EditBookModalDialogComponent } from '../../shared/dialogs/edit-book-modal.component';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
  })
export class LibraryService {
  localStorageKey = 'localBooks';
  header: boolean = false;
  editedBookIndex!: number;
  private books: Book[] = [];
  private booksSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(Books);

  constructor(private ngxCsvParser: NgxCsvParser, public dialog: MatDialog) { 
    this.initializeBooks();
  }

  private initializeBooks(): void {
    const localBooks = localStorage.getItem(this.localStorageKey);
    if (localBooks) {
      this.books = JSON.parse(localBooks);
    } else {
      this.books = Books;
    }
    this.booksSubject$.next(this.books);
  }

  get getBooks$(): Observable<Book[]> {
    return this.booksSubject$.asObservable();
  }

  findBookById(id: string): Book | undefined {
    return this.books.find((book: Book) => book.id === id);
  }

  addBook(book: Book): void {
    book.id = uuidv4();
    this.books.push(book);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.books));
    this.booksSubject$.next(this.books);
  }

  deleteBook(book: Book): void {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.books));
    this.booksSubject$.next(this.books);
  }

  saveChanges(book: Book): void{
    this.books[this.editedBookIndex] = book;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.books));
    this.booksSubject$.next(this.books);
  }

  openEditBookDialog(book: Book): void {
    this.editedBookIndex = this.books.indexOf(book);
    this.dialog.open(EditBookModalDialogComponent, {
      data: { book}
    });
  }
  
  openAddBookDialog(): void {
    this.dialog.open(EditBookModalDialogComponent);
  }

  public exportLibraryToCSV(): void {
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false, 
      showTitle: false,
      useBom: true,
      noDownload: false,
      headers: []
    };

    const csvData = this.books.map((book: Book) => {
      const formattedDate = (moment(book.addedDate)).format('DD-MMM-YYYY HH:mm:ss');

      return {
        imageUrl: book.imageUrl,
        title: book.title,
        genre: book.genre,
        author: book.author,
        description: book.description,
        addedDate: formattedDate,
        status: book.status
      };
    });
   
    new ngxCsv(csvData, 'libraryBooks', options);
  }

  importLibraryFromCSV(fileImportInput: HTMLInputElement): void {
    const files: FileList | null = fileImportInput.files;

    if (files) {
      this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',', encoding: 'utf8' })
      .pipe(take(1)).subscribe({
        next: (result): void => {
          const books: Book[] = (result as string[]).map((item: string) => {
            return {
              id: uuidv4(),
              imageUrl: item[0],
              title: item[1],
              genre: item[2],
              author: item[3],
              description: item[4],
              addedDate: new Date(item[5]),
              status: this.getStatusByValue(item[6])
            };
          });

          this.books = books;
          localStorage.setItem(this.localStorageKey, JSON.stringify(books));
          this.booksSubject$.next(books);
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        }
      });
    }
  }

  getStatusByValue(statusValue: string): BOOK_STATUS {
    switch (statusValue) {
      case 'available':
        return BOOK_STATUS.Available;
      case 'borrowed':
        return BOOK_STATUS.Borrowed;
      case 'planned':
        return BOOK_STATUS.Planned;
      default:
        return BOOK_STATUS.Available;
    }
  }
}