/**
 * @author Vitaliy Fedoriv
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OnlineShopHomeComponent } from './online-shop-home/online-shop-home.component';


const onlineShopRoutes: Routes = [
  {path: 'onlineShop', component: OnlineShopHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(onlineShopRoutes)],
  exports: [RouterModule]
})

export class OnlineShopRoutingModule {
}
