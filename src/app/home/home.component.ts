import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
