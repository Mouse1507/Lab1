import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  infoFilm:any;
  listFilm:any;
  url = 'https://swapi.co/api/films/';
  constructor(private http : HttpClient) {
    this.getAllFilm().subscribe(data => {
      this.infoFilm = data;
      this.listFilm = this.infoFilm.results;
    })
   }
   getAllFilm() {
    return this.http.get(this.url);
  }
}
