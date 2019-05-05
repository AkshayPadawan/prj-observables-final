import { Detail } from "../shared/Detail.model";
import { Item } from "./LandingPage/item.model";
import { Injectable } from "@angular/core";
import { shoppingCartService } from "./shopping-cart/shoppingCartService.component";
@Injectable()
export class eCommerceService{
    private items: Item[] =[
        new Item(
            0,
            'Titan v1','Quartz titan watches',
            'https://rukminim1.flixcart.com/image/832/832/jh80ia80/watch/h/w/q/1773sl02-titan-original-imaf5akcjz7gkqcb.jpeg?q=70',
            '1500',
            new Detail('Quartz',
            'Titan Sellers',
             'Leather')
        ),
        new Item(1,
            'Casio v1','Casio Best watches',
            'https://www.notebookcheck.net/fileadmin/_processed_/7/5/csm_gshockconnectedred_66a3777d65.jpg',
            '2000',
            new Detail('Plastic','Casio Sellers',
            'Black Plastic')
        )
        ];

        constructor(private scService :shoppingCartService){

        }
        getItems(){
            return this.items.slice();
        }

        getItem(index: number){
            return this.items[index];
        }

        addItemsToShoppingCart(item: Item){
            this.scService.addItemsToShoppingCart(item);
        }

}