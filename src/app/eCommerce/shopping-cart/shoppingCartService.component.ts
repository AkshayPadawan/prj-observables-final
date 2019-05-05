import { Injectable } from "@angular/core";
import { Item } from "../LandingPage/item.model";

@Injectable()
export class shoppingCartService{
    private items : Item[] =[];

    addItemsToShoppingCart(item: Item){
    this.items.push(item);
    console.log(this.items);
    }

    getShoppingcartItems(){
        return this.items.slice();
    }

}