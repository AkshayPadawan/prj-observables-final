import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/eCommerce/LandingPage/item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() item : Item;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }

}
