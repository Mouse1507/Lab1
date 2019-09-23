import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechServiceService {
  chungLoai = [{
    clId: 1,
    clName: "Điện thoại di động"
  }, {
    clId: 2,
    clName: "Laptop"
  }, {
    clId: 3,
    clName: "Đồ gia dụng"
  }, {
    clId: 4,
    clName: "Phụ kiện"
  }]
  sanpham = [{
      spId: 1,
      spName: "Galaxy S10",
      spNcc: "Samsung ",
      clId: 1,
      spSl: 5,
      spSale: "5%"
    },
    {
      spId: 2,
      spName: "Apple Iphone",
      spNcc: "Apple",
      clId: 1,
      spSl: 10,
      spSale: "5%"
    },
    {
      spId: 3,
      spName: "Note 9",
      spNcc: "Samsung",
      clId: 1,
      spSl: 10,
      spSale: "15%"
    },
    {
      spId: 4,
      spName: "Asus F560U",
      spNcc: "Asus",
      clId: 2 ,
      spSl: 1,
      spSale: "25%"
    },
    {
      spId: 5,
      spName: "Lenovo Idea Pad",
      spNcc: "Lenovo",
      clId: 2,
      spSl: 4,
      spSale: "5%"
    },
    {
      spId: 6,
      spName: "Dell XPS 13",
      spNcc: "Dell",
      clId: 2,
      spSl: 100,
      spSale: "13%"
    },
    {
      spId: 7,
      spName: "Noi com dien",
      spNcc: "Aqua",
      clId: 3,
      spSl: 1,
      spSale: "5%"
    },
    {
      spId: 8,
      spName: "Bep nuong",
      spNcc: "Lavie",
      clId: 3,
      spSl: 1,
      spSale: "5%"
    },
    {
      spId: 9,
      spName: "Tai nghe",
      spNcc: "Anker",
      clId: 4,
      spSl: 10,
      spSale: "7%"
    },
    {
      spId: 10,
      spName: "Sạc du phong",
      spNcc: "Enegizer",
      clId: 4,
      spSl: 1,
      spSale: "5%"
    }
  ]
  constructor() {}
}
