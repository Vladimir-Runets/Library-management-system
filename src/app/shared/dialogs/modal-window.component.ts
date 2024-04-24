import { Component } from '@angular/core';
import { Book } from '../../../app/core/interfaces/book.interface';
import { BookStatus } from '../../../app/core/enums/book-status.enum';
import genres from '../../assets/mock/genres';
import { LibraryService } from '../../core/services/library.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowDialogComponent {

  constructor(private libraryService: LibraryService){}

    book: Book = {
        imageUrl: '/assets/images/newBook.png',
        title: '',
        author: '',
        genre: '',
        description: '',
        addedDate: new Date(),
        status: BookStatus.Planned
    };

    genres: string[] = genres;

    submit(book: Book): void {
      this.libraryService.addBook(book);
    }
}
