import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../book-list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss'],
})
export class BookListItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('image') image: string;
  // tslint:disable-next-line: no-input-rename
  @Input('title') title: string;
  // tslint:disable-next-line: no-input-rename
  @Input('author') author: string;
  // tslint:disable-next-line: no-input-rename
  @Input('currentPage') currentPage: number;
  // tslint:disable-next-line: no-input-rename
  @Input('totalPages') totalPages: number;
  // tslint:disable-next-line: no-input-rename
  @Input('id') id: number;
  progress: number;
  newPageCount: number;
  updateMode = false;
  constructor(
    private bookListService: BookListService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.progress = this.calculateProgress();
  }

  calculateProgress() {
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    const progress = currentPage * 100 / totalPages / 100;
    return progress;
  }

  onBookUpdate(id: number) {
    this.bookListService.updateBook(id, this.currentPage);
    this.updateMode = false;
    this.progress = this.calculateProgress();
  }

  onDeleteBook(id: number) {
    this.presentAlertConfirm(id);
  }

  async presentAlertConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Remove book?',
      message: `If you remove ${this.title} you will lose all your progress. Are you sure?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.bookListService.deleteBook(id);
          }
        }
      ]
    });
    await alert.present();
  }

}
