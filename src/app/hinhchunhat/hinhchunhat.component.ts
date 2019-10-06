import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-hinhchunhat',
  templateUrl: './hinhchunhat.component.html',
  styleUrls: ['./hinhchunhat.component.css']
})
export class HinhchunhatComponent implements OnInit {
  hcn = {
    dai: null,
    rong: null,
    chuvi: null,
    dtich: null,
  }
  constructor() {}
  calculate() {
    this.hcn.chuvi = (this.hcn.dai * 1 + this.hcn.rong * 1) * 2;
    this.hcn.dtich = this.hcn.dai * this.hcn.rong;
  }
  ngOnInit() {}

}
