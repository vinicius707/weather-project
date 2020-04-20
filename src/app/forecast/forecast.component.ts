import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { BroadcastSearchService } from '../broadcast-search.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  temp:number[] = [];
  city:string[] = [];
  hour:string[] = [];
  description:string[] = [];
  wind:number[] = [];
  max_temp:number[] = []
  min_temp:number[] = []
  precip:number[] = []

  constructor(private _forecast: GetWeatherService, private _broadcast: BroadcastSearchService) { }

  ngOnInit(): void {
    this._broadcast.inputSearch.subscribe(result => {
      console.log(result)
      this.callApiForecast(result)
    })
  }

  callApiForecast(city) {
    this._forecast.getWeatherForecast(city).subscribe((result) => {
      console.log(result);
      for(let dayData of result.data){
        this.temp.push(dayData.temp)
        this.city.push(dayData.city_name)
        this.hour.push(dayData.ob_time)
        this.description.push(dayData.weather.description)
        this.wind.push(dayData.wind_spd.toFixed(2))
        this.max_temp.push(dayData.max_temp)
        this.min_temp.push(dayData.min_temp)
        this.precip.push(dayData.precip)
      }
      
    })
  }


}
