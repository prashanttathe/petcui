import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineShopHomeComponent } from './online-shop-home/online-shop-home.component';
import {OnlineShopRoutingModule} from './online-shop-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OnlineShopHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    OnlineShopRoutingModule
  ]
})
export class OnlineShopModule { }
