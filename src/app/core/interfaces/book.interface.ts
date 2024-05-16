import { BookStatus } from "../enums/book-status.enum";
import { User } from "./user.interface";

export interface Book {
    imageUrl: string;
    title: string;
    genre: string;
    author: string;
    description: string;
    addedDate: Date;
    borrower?: User;
    status: BookStatus;
  }