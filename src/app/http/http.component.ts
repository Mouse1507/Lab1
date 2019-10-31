import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpSer : HttpServiceService) { }
  infoFilm:any;
  listFilm:any;
  ngOnInit() {
    this.listFilm = this.httpSer.listFilm;
    this.infoFilm = this.httpSer.infoFilm;
  }
}
