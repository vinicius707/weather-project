import { Weather } from './../weather';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetWeatherService } from '../get-weather.service';

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

  constructor(private weatherApi: GetWeatherService) {}

  ngOnInit() {
    this.formPlace = new FormGroup({
      place: new FormControl("")
    });
  }

  getPlace(data) {
    this.place = data.place;
    let isNumber = Number(this.place);
    if(isNaN(isNumber)) {
      return this.city = this.place;
    } else {
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
