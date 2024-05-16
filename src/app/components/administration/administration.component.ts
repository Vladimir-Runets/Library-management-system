import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from '../../../app/core/interfaces/book.interface';
import { LibraryService } from '../../core/services/library.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IconDefinition, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  editIcon: IconDefinition = faPenToSquare;
  deleteIcon: IconDefinition = faTrash;
  books$?: Observable<Book[]>;
  destroy$: Subject<null> = new Subject();
  displayedColumns: string[] = ['title', 'genre', 'author', 'description', 'addedDate', 'status', 'actions'];
  dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();

  constructor(private _liveAnnouncer: LiveAnnouncer, public libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getBooks$.pipe(takeUntil(this.destroy$)).subscribe(books => {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}