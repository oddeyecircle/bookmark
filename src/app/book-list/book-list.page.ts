import { Component, OnInit, OnChanges } from '@angular/core';
import { BookListItem } from './book-list-item.model';
import { BookListService } from './book-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  bookList: BookListItem[];
  subscription: Subscription;
  constructor(private bookListService: BookListService) { }

  ngOnInit() {
    this.subscription = this.bookListService.bookList.subscribe((bookList: BookListItem[]) => {
      this.bookList = bookList;
    });
    this.bookList = this.bookListService.getBooks();
  }

  ionViewWillEnter() {
    // this.bookList = this.bookListService.getBooks();
  }

}
