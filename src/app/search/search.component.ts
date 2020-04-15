import { Component, OnInit } from '@angular/core';
import {GetWeatherService } from '../get-weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string = "value"

  staticElements = [
    {
      cidade: "São Paulo",
      temperatura: "27°c"
    },
    {
      cidade: "Rio de Janeiro",
      temperatura: "40°c"
    },
    {
      cidade: "Rio Grande do Sul",
      temperatura: "17°c"
    },
    {
      cidade: "Mato Grosso",
      temperatura: "22°c"
    },
    {
      cidade: "Amazonas",
      temperatura: "30°c"
    },
    {
      cidade: "Acre",
      temperatura: "38°c"
    },
  ]
  constructor(private weatherApi: GetWeatherService) { }

  ngOnInit(): void {
  }

  teste(){
    this.weatherApi.getWeather().subscribe((data)=>{
      console.log(data)
    })
  }

}
