import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../core/interfaces/book.interface';
import { Genres } from '../../assets/mock/genres';
import { LibraryService } from '../../core/services/library.service';
import { BOOK_STATUS } from '../../core/enums/book-status.enum';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.scss']
})
export class EditBookModalDialogComponent {
  isEditDialog: boolean = false; 
  book: Book = {
    id: uuidv4(),
    imageUrl: '/assets/images/cover1.jpg',
    title: '',
    author: '',
    genre: '',
    description: '',
    addedDate: new Date(),
    status: BOOK_STATUS.Planned
  };
  genres: string[] = Genres;

  constructor(public libraryService: LibraryService, @Inject(MAT_DIALOG_DATA) public data: { book: Book }){
    if(this.data?.book){
      this.book = JSON.parse(JSON.stringify(this.data?.book));
      this.isEditDialog = true;
    }
  }
}
