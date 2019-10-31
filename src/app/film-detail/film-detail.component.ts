import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private http : HttpClient) { }
  film:any;
  ngOnInit() {
    const url = this.route.snapshot.paramMap.get('url');
    this.getFilmById(url).subscribe(data => {
      this.film = data;
    })
  }
  getFilmById(url : string){
    return this.http.get(url);
  }
}
