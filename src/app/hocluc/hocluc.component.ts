import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-hocluc',
  templateUrl: './hocluc.component.html',
  styleUrls: ['./hocluc.component.css']
})
export class HoclucComponent implements OnInit {
  sv = {
    ten: "",
    ngaysinh: "",
    gioitinh: "nam",
    diem: 0,
    hocluc: "",
  }
  constructor() {}
  xeploai() {
    if (this.sv.diem >= 5) {
      this.sv.hocluc = "Dau";
      document.getElementById("hocluc").style.backgroundColor = "lightgreen";
    } else {
      this.sv.hocluc = "Rot";
      document.getElementById("hocluc").style.backgroundColor = "lightcoral";
    }
  }
  ngOnInit() {}

}
