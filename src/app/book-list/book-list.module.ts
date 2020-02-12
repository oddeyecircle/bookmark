import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookListPageRoutingModule } from './book-list-routing.module';

import { BookListPage } from './book-list.page';
import { BookListItemComponent } from './book-list-item/book-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookListPageRoutingModule
  ],
  declarations: [BookListPage, BookListItemComponent]
})
export class BookListPageModule {}
