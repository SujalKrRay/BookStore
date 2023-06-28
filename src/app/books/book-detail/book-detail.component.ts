import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'comp-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() book: Book={} as Book;
  isInCart:boolean=false;

  constructor(private cartService:CartService){ }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
