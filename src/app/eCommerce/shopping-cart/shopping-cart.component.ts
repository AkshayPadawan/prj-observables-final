import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/Address.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private address : Address[] ;

 
  ngOnInit() {
    
  }

}
