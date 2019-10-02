import {
  Component,
  OnInit
} from '@angular/core';
import {
  element
} from 'protractor';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {
  mathang = [{
      name: "nuoc ngot",
      price: 10000,
      soluong: 0,
      tong: 0,
      check: false
    },
    {
      name: "ca phe den",
      price: 12000,
      soluong: 0,
      tong: 0,
      check: false
    },
    {
      name: "thuoc la",
      price: 18000,
      soluong: 0,
      tong: 0,
      check: false
    }
  ];
  tongTien = 0;
  constructor() {}
  tongTungCai() {
    this.mathang.forEach(element => {
      if (element.soluong <= 0)
        element.soluong = 0;
      if (element.check) {
        element.tong = element.price * element.soluong;
        
      }
    })
  }
  tinhtongTien(){
    var tong = 0;
    this.mathang.forEach(element => {
      tong += element.tong;
    });
    return tong;
  }
  ngOnInit() {

  }

}
