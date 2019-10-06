import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-kiemloi',
  templateUrl: './kiemloi.component.html',
  styleUrls: ['./kiemloi.component.css']
})
export class KiemloiComponent implements OnInit {
  cn = {
    ten: "",
    luong: null,
    gioitinh: 'nam',
    tuoi: '1',
    thuong: null,
    rate: null,
  };
  errorTen: boolean;
  errorLuong: boolean;
  success: boolean;
  thuong() {
    if(this.cn.ten == ""){
      this.success = false;
      this.errorTen = true;
    }else {
      this.success = true;
      this.errorTen = false;
    }
    if(this.cn.luong < 2000000){
      this.success = false;
      this.errorLuong = true;
    }else {
      this.success = true;
      this.errorLuong = false;
    }
    if(this.cn.ten == "" || this.cn.luong < 2000000){
      this.success = false;
    }else {
      this.success = true;
    }
    if (this.success == true) {
      switch (this.cn.tuoi) {
        case "1":
          this.cn.rate = 0.07;
          break;
        case "2":
          this.cn.rate = 0.1;
          break;
        case "3":
          this.cn.rate = 0.15;
          break;
      }
      this.cn.thuong = (this.cn.luong * 1) * this.cn.rate;
      if (this.cn.gioitinh == "nu") {
        this.cn.thuong += 200000;
      }
      this.cn.thuong = this.cn.thuong * 100 / 100;
    }


  }
  constructor() {}

  ngOnInit() {}

}
