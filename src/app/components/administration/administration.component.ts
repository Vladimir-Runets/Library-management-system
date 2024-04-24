import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from '../../../app/core/interfaces/book.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowDialogComponent } from '../../shared/dialogs/modal-window.component';
import { LibraryService } from '../../core/services/library.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { BookStatus } from '../../core/enums/book-status.enum';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['title', 'genre', 'author', 'description', 'addedDate', 'status', 'actions'];
  dataSource = new MatTableDataSource(this.libraryService.getStarterBooks());
  header: boolean = false;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private libraryService: LibraryService, private ngxCsvParser: NgxCsvParser) {}

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe(books => {
      this.dataSource = new MatTableDataSource(books);
    });
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('fileImportInput') fileImportInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openAddBookDialog() {
    this.dialog.open(ModalWindowDialogComponent);
  }

  exportLibraryToCSV(): void {
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false, 
      showTitle: false,
      useBom: true,
      noDownload: false,
      headers: ['imageUrl', 'title', 'genre', 'author', 'description', 'addedDate', 'status']
    };

    const csvData = this.dataSource.data.map((book: Book) => {
      return {
        imageUrl: book.imageUrl,
        title: book.title,
        genre: book.genre,
        author: book.author,
        description: book.description,
        addedDate: book.addedDate,
        status: this.getStatusValue(book.status)
      };
    });
   
    new ngxCsv(csvData, 'libraryBooks', options);
  }

  getStatusValue(status: BookStatus): string {
    switch (status) {
      case BookStatus.Available:
        return 'В наличии';
      case BookStatus.Borrowed:
        return 'Занята';
      case BookStatus.Planned:
        return 'Планируется';
      default:
        return '';
    }
  }
  
  importLibraryFromCSV(): void {
    const files: FileList | null = this.fileImportInput?.nativeElement.files;

    if (files) {
      this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',', encoding: 'utf8' })
      .pipe().subscribe({
        next: (result): void => {
          console.log('Result', result);
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        }
      });
    }
  }

  getStatusByValue(statusValue: string): BookStatus {
    switch (statusValue) {
      case 'В наличии':
        return BookStatus.Available;
      case 'Занята':
        return BookStatus.Borrowed;
      case 'Планируется':
        return BookStatus.Planned;
      default:
        return BookStatus.Available;
    }
  }

  editBook() {}

  deleteBook(book: Book) {
    const index = this.dataSource.data.indexOf(book);
    this.dataSource.data.splice(index, 1);
    localStorage.setItem(this.libraryService.localStorageKey, JSON.stringify(this.dataSource.data));
    this.dataSource._updateChangeSubscription(); 
  }
}