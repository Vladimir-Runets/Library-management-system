import { Book } from "../../../app/core/interfaces/book.interface";
import { BookStatus } from "../../../app/core/enums/book-status.enum";

const books: Book[] = [
  {
    imageUrl: "/assets/images/book1.jpg",
    title: "Book 1",
    genre: "Genre 1",
    author: "Author 1",
    description: "Description of Book 1",
    addedDate: new Date(),
    status: BookStatus.Available,
  },
  {
    imageUrl: "/assets/images/book2.jpg",
    title: "Book 2",
    genre: "Genre 2",
    author: "Author 2",
    description: "Description of Book 2",
    addedDate: new Date(),
    status: BookStatus.Borrowed,
    borrower: {
      username: "Vova@gmail.com",
      password: "g1h2t34",
      lastLogged: new Date(),
      role: "user"
    },
  },
  {
    imageUrl: "/assets/images/book3.jpg",
    title: "Book 3",
    genre: "Genre 3",
    author: "Author 3",
    description: "Description of Book 3",
    addedDate: new Date(),
    status: BookStatus.Available,
  },
  {
    imageUrl: "/assets/images/book4.png",
    title: "Book 4",
    genre: "Genre 4",
    author: "Author 4",
    description: "Description of Book 4",
    addedDate: new Date(),
    status: BookStatus.Borrowed,
    borrower: {
      username: "Vladimir@gmail.com",
      password: "K1o7p9",
      lastLogged: new Date(),
      role: "user"
    },
  },
  {
    imageUrl: "/assets/images/book5.jpg",
    title: "Book 5",
    genre: "Genre 5",
    author: "Author 5",
    description: "Description of Book 5",
    addedDate: new Date(),
    status: BookStatus.Borrowed,
    borrower: {
      username: "Vlad@gmail.com",
      password: "manera123",
      lastLogged: new Date(),
      role: "user"
    },
  },
];

export default books;