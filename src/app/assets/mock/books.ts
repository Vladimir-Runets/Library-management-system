import { Book } from "../../../app/core/interfaces/book.interface";
import { BOOK_STATUS } from "../../../app/core/enums/book-status.enum";
import { v4 as uuidv4 } from 'uuid';

export const Books: Book[] = [
  {
    id: uuidv4(),
    imageUrl: "/assets/images/book1.jpg",
    title: "Book 1",
    genre: "romance",
    author: "Author 1",
    description: "Description of Book 1",
    addedDate: new Date(),
    status: BOOK_STATUS.Available,
  },
  {
    id: uuidv4(),
    imageUrl: "/assets/images/book2.jpg",
    title: "Book 2",
    genre: "mystery",
    author: "Author 2",
    description: "Description of Book 2",
    addedDate: new Date(),
    status: BOOK_STATUS.Borrowed,
    borrower: {
      id: uuidv4(),
      username: "Vova@gmail.com",
      password: "g1h2t34",
      lastLogged: new Date(),
      role: "user"
    },
  },
  {
    id: uuidv4(),
    imageUrl: "/assets/images/book3.jpg",
    title: "Book 3",
    genre: "scienceFiction",
    author: "Author 3",
    description: "Description of Book 3",
    addedDate: new Date(),
    status: BOOK_STATUS.Available,
  },
  {
    id: uuidv4(),
    imageUrl: "/assets/images/book4.png",
    title: "Book 4",
    genre: "fantasy",
    author: "Author 4",
    description: "Description of Book 4",
    addedDate: new Date(),
    status: BOOK_STATUS.Borrowed,
    borrower: {
      id: uuidv4(),
      username: "Vladimir@gmail.com",
      password: "K1o7p9",
      lastLogged: new Date(),
      role: "user"
    },
  },
  {
    id: uuidv4(),
    imageUrl: "/assets/images/book5.jpg",
    title: "Book 5",
    genre: "crime",
    author: "Author 5",
    description: "Description of Book 5",
    addedDate: new Date(),
    status: BOOK_STATUS.Borrowed,
    borrower: {
      id: uuidv4(),
      username: "Vlad@gmail.com",
      password: "manera123",
      lastLogged: new Date(),
      role: "user"
    },
  },
];