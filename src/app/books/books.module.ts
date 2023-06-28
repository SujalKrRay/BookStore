import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent
  ],
  providers: [
    BooksService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
