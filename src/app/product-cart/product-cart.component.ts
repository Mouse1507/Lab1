import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartPD = [
    {
      "id" : "pd100",
      "name" : "laptop",
      "price" : 30000,
      "quantity" : 1,
    },
    {
      "id" : "pd101",
      "name" : "mobile",
      "price" : 54000,
      "quantity" : 1,
    },
    {
      "id" : "pd102",
      "name" : "television",
      "price" : 22000,
      "quantity" : 2,
    },
    {
      "id" : "pd103",
      "name" : "headphone",
      "price" : 1300,
      "quantity" : 2,
    },

  ]
  constructor() { }

  ngOnInit() {
  }
  tongTien(){
    let sum=0;
    this.cartPD.forEach(function(c){
      sum+= c.price*c.quantity;
    })
    return sum;
  }
  bonus(item) {
    item.quantity++;
  }
  minus(item){
    if(item.quantity<=0)
      item.quantity=0;
    else{
      item.quantity--;
    }
  }
  
}
