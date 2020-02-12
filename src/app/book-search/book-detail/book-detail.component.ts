import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookListService } from 'src/app/book-list/book-list.service';
import { Router } from '@angular/router';
import { BookListItem } from 'src/app/book-list/book-list-item.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() image: string;
  @Input() description: string;
  @Input() pages: string;
  duration: string;
  bookListItem: BookListItem;
  constructor(
    public modalController: ModalController,
    private bookListService: BookListService,
    private router: Router
  ) { }

  ngOnInit() {
    const pages = +this.pages;
    const totalTime = Math.round((pages * 2) / 60);
    this.duration = `${totalTime}H`;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onAddBook() {
    const id = new Date().getTime();
    const bookListItem = new BookListItem(
      id,
      this.title,
      this.author,
      +this.pages,
      0,
      this.image
    );
    this.dismiss();
    this.bookListService.addBook(bookListItem);
    this.router.navigate(['/book-list']);
  }


}
