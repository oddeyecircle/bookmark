import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookSearchPageRoutingModule } from './book-search-routing.module';

import { BookSearchPage } from './book-search.page';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PipesModule } from '../pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookSearchPageRoutingModule,
    PipesModule
  ],
  declarations: [BookSearchPage, SearchComponent, BookListComponent, BookDetailComponent],
  entryComponents: [BookDetailComponent]
})
export class BookSearchPageModule {}
