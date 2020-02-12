import { Injectable } from '@angular/core';
import { BookListItem } from './book-list-item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  bookList = new Subject<BookListItem[]>();
  private books: BookListItem[] = [];
  constructor() { }

  addBook(bookListItem: BookListItem) {
    this.books.push(bookListItem);
    this.bookList.next([...this.books]);
    this.storeBooks();
  }

  getBooks() {
    if (localStorage.getItem('books').length > 0) {
      this.books = JSON.parse(localStorage.getItem('books'));
      return [...this.books];
    }
  }

  storeBooks() {
    localStorage.setItem('books', JSON.stringify([...this.books]));
  }

  updateBook(id: number, currentPage: number) {
    const book = this.books.find(x => x.id == id);
    book.currentPage = currentPage;
    this.bookList.next([...this.books]);
    this.storeBooks();
  }

  deleteBook(id: number) {
    const book = this.books.indexOf(this.books.find(x => x.id == id));
    this.books.splice(book, 1);
    this.bookList.next([...this.books]);
    this.storeBooks();
  }
}
