import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from '../../../app/core/interfaces/book.interface';
import { LibraryService } from '../../core/services/library.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  books$?: Observable<Book[]>;
  displayedColumns: string[] = ['title', 'genre', 'author', 'description', 'addedDate', 'status', 'actions'];
  dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();

  constructor(private _liveAnnouncer: LiveAnnouncer, public libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getBooks.subscribe(books => {
      this.dataSource.data = books;
    });
  }

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
}