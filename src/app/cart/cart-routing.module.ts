import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingCartComponent } from "../cart/shopping-cart/shopping-cart.component";

const cartRoutes: Routes = [{ path: "cart", component: ShoppingCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }
