import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product =[];
  product1=[];
  product2=[];
  selectedValue:any;
  quantity = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ];
  @Input() clearCartFlag;
  errorMessage: any;
  obj={  };
  image: string;
  quantityCount: any;
  totalAmount: any;
  ShowFlag: boolean;
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.orderSummary();
  }
  orderSummary(){
    this.cartService.orderSummary().subscribe(res =>{
      if(res['cart'].length !==0){
        this.ShowFlag =true;
      this.product =res['cart'];
      this.totalAmount = res['totalAmount'];
      console.log("totalAmount",this.totalAmount);
      this.product.forEach(res=>{
        console.log("res",res);
        if(res.id ==1){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/dogfood.jpg"};
          this.product1.push(this.obj);
        
        } else if(res.id ==2){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/tonic.jpg"};
          this.product1.push(this.obj);
        
        } else if(res.id ==3){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/pedigree.jpg"};
          this.product1.push(this.obj);
        
        } else if(res.id ==4){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/velcote.jpg"};
          this.product1.push(this.obj);
        
        }else if(res.id ==5){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/mantra.jpg"};
          this.product1.push(this.obj);
        
        }else if(res.id ==6){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/ND.jpg"};
          this.product1.push(this.obj);
        
        }else if(res.id ==7){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/bits.jpg"};
          this.product1.push(this.obj);
        
        }else if(res.id ==8){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/whiskas.jpg"
          };
          this.product1.push(this.obj);
        
        }

      });
      console.log(this.product1);
    } else{
      this.ShowFlag =false;
    }
    });
  
  } 
  clearCart(value){
    console.log("clearCartFlag",value)
    this.cartService.clearCart().subscribe(res =>{
    
      console.log("abc",res)
    });
    this.orderSummary();
  }
}
