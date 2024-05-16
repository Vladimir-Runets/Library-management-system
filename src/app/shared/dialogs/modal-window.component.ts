import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../../app/core/interfaces/book.interface';
import genres from '../../assets/mock/genres';
import { LibraryService } from '../../core/services/library.service';
import { BookStatus } from '../../core/enums/book-status.enum';
import { TranslatorService } from '../../core/services/translator.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowDialogComponent {
  isAddButtonClicked: boolean;
  book: Book = {
    imageUrl: '/assets/images/cover1.jpg',
    title: '',
    author: '',
    genre: '',
    description: '',
    addedDate: new Date(),
    status: BookStatus.Planned
  };
  genres: string[] = genres;

  constructor(public libraryService: LibraryService, @Inject(MAT_DIALOG_DATA) public data: { book: Book, isAddButtonClicked: boolean }, public translatorService: TranslatorService){
    this.isAddButtonClicked = data.isAddButtonClicked;
    if(!this.isAddButtonClicked){
      this.book = JSON.parse(JSON.stringify(data.book));
    }
  }
}
