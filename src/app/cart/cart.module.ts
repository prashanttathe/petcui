import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CartRoutingModule } from "./cart-routing.module";
import { OrderSummaryComponent } from './order-summary/order-summary.component';
@NgModule({
  declarations: [ShoppingCartComponent, OrderSummaryComponent],
  imports: [CommonModule,
    CartRoutingModule],
})
export class CartModule { }
