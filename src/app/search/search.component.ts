import { Weather } from './../weather';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BroadcastSearchService } from '../broadcast-search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  place: any;
  city: string;
  postalCode: number;
  formPlace: any;

  constructor(private _broadcastService: BroadcastSearchService) {}

  ngOnInit() {
    this.formPlace = new FormGroup({
      place: new FormControl("")
    });
  }

  getPlace(data) {
    this.place = data.place;
    let isNumber = Number(this.place);
    if(isNaN(isNumber)) {
      this.city = this.place;
      this._broadcastService.getSearch(this.place)
      return this.city;

    } else {
      // TODO Chamar BroadcastService,aqui (Como mostrar number utilizando union**)
      return this.postalCode = isNumber;
    }        
  }

  searchWeather() {
    if(this.city.length != 0){
      this.weatherApi.getWeather(this.city);
    } else {
      this.weatherApi.getWeather(this.postalCode);
    }
  }
  
  clickMe(){
    this.weatherApi.sendClick();
  }

}
