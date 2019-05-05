import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { LandingPageComponent } from './eCommerce/LandingPage/LandingPage.component';
import { ItemComponent } from './eCommerce/LandingPage/item-list/item/item.component';
import { ItemListComponent } from './eCommerce/LandingPage/item-list/item-list.component';
import { eCommerceService } from './eCommerce/eCommerce.service';
import { ItemPageComponent } from './eCommerce/item-page/item-page.component';
import { ItemPageStartComponent } from './eCommerce/item-page-start/item-page-start.component';
import { ShoppingCartComponent } from './eCommerce/shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './eCommerce/shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { AddressItemComponent } from './eCommerce/shopping-cart/address-item/address-item.component';
import { shoppingCartService } from './eCommerce/shopping-cart/shoppingCartService.component';
import { ShoppingCartItemComponent } from './eCommerce/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LandingPageComponent,
    ItemListComponent,
    ItemComponent,
    ItemPageComponent,
    ItemPageStartComponent,
    ShoppingCartComponent,
    ShoppingCartListComponent,
    AddressItemComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService,
     eCommerceService, shoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
