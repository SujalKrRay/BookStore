import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from './books.service';

@Component({
  selector: 'comp-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  
  constructor(private booksService:BooksService){
    this.books=this.booksService.getBooks();
  }
  books: Book[] = [];

  isShowing: boolean = true;

}
