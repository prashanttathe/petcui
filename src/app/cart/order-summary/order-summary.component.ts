import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  totalAmount: any;
  clearCartFlag:string;
  @Output() clearCartFlagEmit = new EventEmitter<string>();
  productCart=[];
  productlength: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderSummary();
  }
  orderSummary(){
    this.cartService.orderSummary().subscribe(res =>{
      this.productCart =res['cart'];
      this.productlength =this.productCart.length;
      this.totalAmount = res['totalAmount'];
      console.log("abc",this.totalAmount)
    });
  }
  clearCart(){
    this.clearCartFlag ="true";
    this.clearCartFlagEmit.emit(this.clearCartFlag);
    this.cartService.clearCart().subscribe(res =>{
     
      console.log("abc",res)
    });
     
  }
}
