import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(public http: Http) { }

  loadFurniture(catid) {
    return this.http.get('http://localhost:8081/api/category/' + catid + '/furniture');
  }
}
