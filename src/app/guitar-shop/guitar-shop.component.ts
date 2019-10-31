import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../shop-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-shop',
  templateUrl: './guitar-shop.component.html',
  styleUrls: ['./guitar-shop.component.css']
})
export class GuitarShopComponent implements OnInit {

  constructor(private shopSer: ShopServiceService,private route:ActivatedRoute) { }
  categories:any;
  product:any;
  cateId:any;
  listProd:Array<any> = [];
  ngOnInit() {

    this.categories = this.shopSer.categories;
    this.product = this.shopSer.product;
    this.route.paramMap.subscribe(param => {
      this.cateId = +param.get("id");
    })
    this.product.forEach(prod => {
      if(prod.cid == this.cateId) {
        this.listProd.push(prod);
      }
    })
    if(sessionStorage.getItem('cartItems') == '' || sessionStorage.length == 0){
      sessionStorage.setItem('cartItems',JSON.stringify([]));
    }
  }

}
