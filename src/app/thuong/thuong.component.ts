import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thuong',
  templateUrl: './thuong.component.html',
  styleUrls: ['./thuong.component.css']
})
export class ThuongComponent implements OnInit {
  cn = {
    ten: "",
    luong: null,
    gioitinh: 'nam',
    tuoi: '1',
    thuong: null,
    rate : null,
  };
  constructor() { }
  thuong() {
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
    this.cn.thuong = (this.cn.luong*1)*this.cn.rate;
    if(this.cn.gioitinh == "nu"){
      this.cn.thuong += 200000;
    }
  }
  ngOnInit() {
  }

}
