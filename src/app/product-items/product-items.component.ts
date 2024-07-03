import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit{

  products: any[] = [];
  categories : any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.categories = this.cartService.getCategories();
    // this.loadProducts(this.categories[0]);
    this.products = this.cartService.getRandomProducts();
  }

  loadProducts(categoryName: string) {
    this.products = [];
    this.products = this.cartService.getProducts(categoryName);
  }
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
