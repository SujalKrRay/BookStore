import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'comp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService:CartService){}

  getCart(){
    return this.cartService.get();
  }
}
