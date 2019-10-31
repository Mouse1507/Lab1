import {
  Component,
  OnInit
} from '@angular/core';
import {
  ShopServiceService
} from '../shop-service.service';

@Component({
  selector: 'app-guit-checkout',
  templateUrl: './guit-checkout.component.html',
  styleUrls: ['./guit-checkout.component.css']
})
export class GuitCheckoutComponent implements OnInit {

  constructor(private shopSer: ShopServiceService) {}
  cartItems = [];
  product = [];
  categories:any;
  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    this.product = this.shopSer.product;
    this.categories = this.shopSer.categories;
  }
  total(price, quantity) {
    return price * quantity;
  }
  getPrice(id) {
    var price = 0;
    this.product.forEach(ele => {
      if (ele.id == id) {
        price = ele.price;
      }
    });
    return price;
  }
  subTotal() {
    var subTo: number = 0;
    var subToItems = document.querySelectorAll('.total');
    subToItems.forEach(sub => {
      subTo += parseFloat(sub.innerHTML);
    })
    return subTo;
  }
}
