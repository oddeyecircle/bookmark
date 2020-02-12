import { Injectable } from '@angular/core';
import { ListedBook } from './bookList.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Book } from './book-detail/book';
import { BookListItem } from '../book-list/book-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  bookList = new Subject<ListedBook[]>();
  private books: ListedBook[] = [];
  loadedBook: Book;

  constructor(private http: HttpClient) { }

  searchBook(query: string) {
    return this.http.get(`http://localhost:5000/api/v1/books/${query}`);
  }

  setBooks(books: ListedBook[]) {
    this.books = books;
    this.bookList.next([...this.books]);
  }

  getBooks() {
    return [...this.books];
  }

  getMetadata(id: string) {
    return this.http.get(`http://localhost:5000/api/v1/book/${id}`);
  }

}
