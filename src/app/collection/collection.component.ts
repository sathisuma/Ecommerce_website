import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit{

  categories: any[] = [];
 
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.categories = this.cartService.getCategories();
  }

}
