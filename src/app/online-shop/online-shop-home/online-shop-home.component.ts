import { Component, OnInit } from '@angular/core';
import { OnlineShopService } from '../online-shop.service';

@Component({
  selector: 'app-online-shop-home',
  templateUrl: './online-shop-home.component.html',
  styleUrls: ['./online-shop-home.component.css']
})
export class OnlineShopHomeComponent implements OnInit {
  product: any[];
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
  errorMessage: any;
  obj={  };
  image: string;
  quantityCount: any;

  constructor( private onlineShopService: OnlineShopService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.onlineShopService.getProducts().subscribe(res =>{
      console.log(res);
      this.product =res;
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
          this.product2.push(this.obj);
        
        }else if(res.id ==6){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/ND.jpg"};
          this.product2.push(this.obj);
        
        }else if(res.id ==7){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/bits.jpg"};
          this.product2.push(this.obj);
        
        }else if(res.id ==8){
          this.obj={
            id:res.id,
            name:res.name,
            amount:res.amount,
            image :"http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/assets/images/whiskas.jpg"
          };
          this.product2.push(this.obj);
        
        }

      });
      console.log(this.product1);
  
    });
  } 
  addtoCart(val){
    let objAddtoCart={
      "amount":val.amount,
      "currency": "€",
      "id": val.id,
      "name": val.name,
      "quantity":  this.quantityCount 
    }
    console.log("Added to Cart",objAddtoCart)
    this.onlineShopService.addtoCart(objAddtoCart).subscribe(res =>{
      console.log("responseAdd to cart",res);
    });
  }
  myFunction(val){
    this.quantityCount = val.target.value;
    console.log("val",val.target.value);
  }
}
