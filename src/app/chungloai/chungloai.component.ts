import { Component, OnInit } from '@angular/core';
import { TechServiceService } from '../tech-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chungloai',
  templateUrl: './chungloai.component.html',
  styleUrls: ['./chungloai.component.css']
})
export class ChungloaiComponent implements OnInit {

  constructor(private _techServices: TechServiceService ,private route:ActivatedRoute) { }
  chungLoai:any;
  clId;
  cl:any;
  ngOnInit() {
    this.chungLoai = this._techServices.chungLoai;
    
    this.route.paramMap.subscribe(param => {
      this.clId = +param.get("clId");
    })
    this.cl = this.chungLoai.find(cl => cl.clId === this.clId);
  }
}
