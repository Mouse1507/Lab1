import { Component, OnInit } from '@angular/core';

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
    rate : null,
  };
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
    this.cn.thuong = this.cn.thuong*100/100;
    
  }
  constructor() { }

  ngOnInit() {
  }

}
