import { Component, OnInit } from '@angular/core';
import { TechServiceService } from '../tech-service.service';

@Component({
  selector: 'app-congnghe',
  templateUrl: './congnghe.component.html',
  styleUrls: ['./congnghe.component.css']
})
export class CongngheComponent implements OnInit {

  constructor(private _techServices: TechServiceService ) { }
  chungLoai:any;
  ngOnInit() {
    this.chungLoai = this._techServices.chungLoai;
  }

}
