import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  cartCount: number = 0;
  cart: any[] = [];

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.getCartCountObservable().subscribe(count => {
      this.cartCount = count;
    });
    
  }

}
