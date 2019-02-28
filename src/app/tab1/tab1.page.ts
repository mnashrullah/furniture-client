import { Component } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  categorySelected: any;
  furnitureList: any;
  constructor(public furnitureService: FurnitureService) {
    this.loadFurniture();
  }
  loadFurniture() {
    this.furnitureService.loadFurniture(this.categorySelected).subscribe((response: Response) => {
      let data = response.json();
      for (let elem of data) {
        elem.images = elem.images.split(',');
      }
      this.furnitureList = data;
    });
  }
}
