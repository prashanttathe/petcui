import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShopHomeComponent } from './online-shop-home/online-shop-home.component';
import {OnlineShopRoutingModule} from './online-shop-routing.module';

@NgModule({
  declarations: [OnlineShopHomeComponent],
  imports: [
    CommonModule,
    OnlineShopRoutingModule
  ]
})
export class OnlineShopModule { }
