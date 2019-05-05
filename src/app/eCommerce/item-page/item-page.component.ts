import { Component, OnInit } from '@angular/core';
import { Item } from '../LandingPage/item.model';
import { ActivatedRoute, Params } from '@angular/router';
import { eCommerceService } from '../eCommerce.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { shoppingCartService } from '../shopping-cart/shoppingCartService.component';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item: Item;
  id: number;

  constructor(private route : ActivatedRoute,
    private eComService: eCommerceService,
    private shoppingcartService: shoppingCartService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = params['id'];
        this.item = this.eComService.getItem(this.id);
      }
    );
  }

  addToCart(){
    console.log(this.item);
    this.shoppingcartService.addItemsToShoppingCart(this.item);
  }

}
