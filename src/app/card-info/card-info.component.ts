import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  people = {
    "name" : "Nguyễn Văn Tèo",
    "img" : "avatar.png",
    "birth" : "20-01-1999",
    "gender" : "Nam",
    "mark" : 8.5
  }
  constructor() { }

  ngOnInit() {
  }

}
