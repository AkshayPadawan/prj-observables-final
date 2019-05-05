import { Component, OnInit} from '@angular/core';
import { Item } from '../item.model';
import { eCommerceService } from '../../eCommerce.service';

@Component({
    selector:'app-item-list',
    templateUrl:'./item-list.component.html',
    styleUrls:[]
})
export class ItemListComponent implements OnInit {
    items: Item[];
    constructor(private eCommerceService: eCommerceService){
    }
   
    ngOnInit(){
        this.items = this.eCommerceService.getItems();
        console.log(this.items);
    }
}