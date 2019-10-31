import {
  Component,
  OnInit
} from '@angular/core';
import {
  ShopServiceService
} from '../shop-service.service';
@Component({
  selector: 'app-guit-cart',
  templateUrl: './guit-cart.component.html',
  styleUrls: ['./guit-cart.component.css']
})
export class GuitCartComponent implements OnInit {

  constructor(private shopSer: ShopServiceService) {}
  cartItems = [];
  product = [];
  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    this.product = this.shopSer.product;
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
  updateCart() {
    this.cartItems.forEach((cart, index) => {
      if (cart.quantity == 0) {
        this.cartItems.splice(index, 1);
      }
    })
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
