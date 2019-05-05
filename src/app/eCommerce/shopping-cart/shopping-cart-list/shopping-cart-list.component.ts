import { Component, OnInit } from '@angular/core';
import { Item } from '../../LandingPage/item.model';
import { shoppingCartService } from '../shoppingCartService.component';
import { eCommerceService } from '../../eCommerce.service';
import { shoppingCartItem } from '../../shopping-cart/shoppingCart.model';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  items : Item[];
  shoppingCartItem : shoppingCartItem[];
  shoppingCartItem2 : shoppingCartItem[];
    
constructor(private shoppingCartService: shoppingCartService,
            private eCommerceService: eCommerceService) { }
   
 
  ngOnInit() {
    this.items  = this.eCommerceService.getItems();
    for(let i=0;i<this.items.length;i++){
      let scItem : shoppingCartItem(this.items[i],1);
      scItem.item = this.items[i];
      scItem.noOfItems = 1;
      this.shoppingCartItem[i] = scItem;
  }
  console.log("traditional",this.shoppingCartItem);
  this.items.map(item=>{
      let scItem2 : shoppingCartItem;
      scItem2.item = item;
      scItem2.noOfItems = 1;
      this.shoppingCartItem2.push(scItem2);
  });
  console.log("modern",this.shoppingCartItem);
  console.log(this.shoppingCartItem2);
    
  }

}
