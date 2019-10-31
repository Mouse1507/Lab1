import {
  Component,
  OnInit
} from '@angular/core';
import {
  ShopServiceService
} from '../shop-service.service';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-guit-prod-detail',
  templateUrl: './guit-prod-detail.component.html',
  styleUrls: ['./guit-prod-detail.component.css']
})
export class GuitProdDetailComponent implements OnInit {

  constructor(private shopSer: ShopServiceService, private route: ActivatedRoute) {}
  categories: any;
  product: any;
  prodId: any;
  thisProd: any;
  quantity: number;
  ngOnInit() {
    this.categories = this.shopSer.categories;
    this.product = this.shopSer.product;
    this.quantity = 1;
    this.route.paramMap.subscribe(param => {
      this.prodId = +param.get("prodId");
    })
    this.product.forEach(element => {
      if (this.prodId == element.id) {
        this.thisProd = element;
        return
      }
    });
  }
  addCart(id,name, quantity) {
    var cart = JSON.parse(sessionStorage.getItem('cartItems'));
    var isHave = false;
    if(cart.length == 0){
      cart.push({
        prodId : id,
        name: name,
        quantity : quantity
      })
    }else {
      cart.forEach(ele => {
        if(ele.prodId == id){
          ele.quantity += quantity;
          isHave = true;
          return;
        }
      })
      if(isHave == false){
        cart.push({
          prodId : id,
          name : name,
          quantity : quantity
        })
      }
    }
    sessionStorage.setItem('cartItems',JSON.stringify(cart));
  }
}
