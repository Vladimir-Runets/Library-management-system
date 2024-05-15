import {Input, Component} from '@angular/core';
import { Book } from "../../core/interfaces/book.interface";
import { BOOK_STATUS } from "../../core/enums/book-status.enum";

@Component({
  selector: 'app-book-card',
  templateUrl: 'book-card.component.html',
  styleUrl: 'book-card.component.scss'
})
export class BookCardComponent{
  bookStatus = BOOK_STATUS;
  @Input() book?: Book;
}
