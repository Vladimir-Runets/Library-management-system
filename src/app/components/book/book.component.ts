import {Input, Component} from '@angular/core';
import { Book } from "../../../app/core/interfaces/book.interface";
import { BookStatus } from "../../core/enums/book-status.enum";

@Component({
  selector: 'app-book-card',
  templateUrl: 'book.component.html',
  styleUrl: 'book.component.scss'
})
export class BookComponent{
  bookStatus = BookStatus;
  @Input() book?: Book;
}
