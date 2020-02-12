import { Component, OnInit } from '@angular/core';
import { ListedBook } from '../bookList.model';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { ModalController } from '@ionic/angular';
import { Book } from '../book-detail/book';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: ListedBook[] = [];
  subscription: Subscription;
  constructor(
    private searchService: SearchService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.subscription = this.searchService.bookList.subscribe((bookList: ListedBook[]) => {
      this.bookList = bookList;
    });
    this.bookList = this.searchService.getBooks();
  }

  onGetMetadata(id: string) {
    this.searchService.getMetadata(id).subscribe((response: any) => {
      const authors = response.author;
      let author: string;
      if (authors.length > 1) {
        for (const auth of authors) {
          author = auth.name._text;
          break;
        }
      } else {
        author = authors.name._text;
      }

      const book = new Book(
        id,
        response.title,
        author,
        response.image_url,
        response.year,
        response.month,
        response.day,
        response.description,
        response.pages
      );
      this.presentModal(book);
    });
  }

  async presentModal(data: Book) {
    const modal = await this.modalController.create({
      component: BookDetailComponent,
      cssClass: 'book-details-modal',
      componentProps: {
        id: data.id,
        title: data.title,
        author: data.author,
        image: data.imageUrl,
        description: data.description,
        year: data.publicationYear,
        month: data.publicationMonth,
        day: data.publicationDay,
        pages: data.numPages
      }
    });
    return await modal.present();
  }

}
