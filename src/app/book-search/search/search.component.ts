import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListedBook } from '../bookList.model';
import { SearchService } from '../search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  bookList: ListedBook[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.emptyBookList();
  }

  onSubmit(form: NgForm) {
    const query = form.value.query;
    if (query.length < 1) {
      return false;
    }
    this.emptyBookList();
    this.searchService.searchBook(query).subscribe((response: any) => {
      for (const result of response) {
          const book: ListedBook = {
          id: result.best_book.id._text,
          title: result.best_book.title._text,
          image_url: result.best_book.image_url._text,
          author: result.best_book.author.name._text
        };
          this.bookList.push(book);
      }
      this.searchService.setBooks(this.bookList);
    });
  }

  private emptyBookList() {
    this.bookList = [];
    this.searchService.setBooks(this.bookList);
  }

}
