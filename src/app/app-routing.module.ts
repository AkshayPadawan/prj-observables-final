import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { LandingPageComponent } from './eCommerce/LandingPage/LandingPage.component';
import { ItemPageComponent } from './eCommerce/item-page/item-page.component';
import { ItemPageStartComponent } from './eCommerce/item-page-start/item-page-start.component';
import { ShoppingCartComponent } from './eCommerce/shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  {path: 'eCommerceSite', component: LandingPageComponent,children:[
    {path: '', component: ItemPageStartComponent},
    {path: ':id',component: ItemPageComponent}
  ]},
  {path: 'shoppingCart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
