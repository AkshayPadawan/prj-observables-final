import { Item } from "../LandingPage/item.model";

export class shoppingCartItem{
     item: Item;
     noOfItems: number;
   constructor(item: Item,noOfItems: number ){
    this.item = item;
    this.noOfItems = noOfItems;
   }
}