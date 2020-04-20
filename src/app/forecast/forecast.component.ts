import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { BroadcastSearchService } from '../broadcast-search.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  temp
  city
  hour
  description
  wind

  constructor(private _forecast: GetWeatherService, private _broadcast: BroadcastSearchService) { }

  ngOnInit(): void {
    this._broadcast.inputSearch.subscribe(result => {
      console.log(result)
      this.callApiForecast(result)
    })
  }

  callApiForecast(city) {
    this._forecast.getWeatherForecast(city).subscribe((result) => {
      console.log(result.data[0].temp);
      this.temp = result.data[0].temp
      this.city = result.data[0].city_name
      this.hour = result.data[0].ob_time
      this.description = result.data[0].weather.description
      this.wind = result.data[0].wind_spd

      this.wind = this.wind.toFixed(2);

     
      
    })
  }


}
