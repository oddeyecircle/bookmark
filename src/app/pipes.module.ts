import { NgModule } from '@angular/core';
import { BookTitleTrimPipe } from './book-title-trim.pipe';

@NgModule({
    declarations: [ BookTitleTrimPipe ],
    exports: [ BookTitleTrimPipe ]
})

export class PipesModule {}
