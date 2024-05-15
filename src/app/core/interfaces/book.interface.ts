import { BOOK_STATUS } from "../enums/book-status.enum";
import { User } from "./user.interface";

export interface Book {
    id: string;
    imageUrl: string;
    title: string;
    genre: string;
    author: string;
    description: string;
    addedDate: Date;
    borrower?: User;
    status: BOOK_STATUS;
  }