import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetWeatherService {

  private baseUrl = 'http://api.weatherbit.io/v2.0/current'

  constructor(private http: HttpClient) { }

  getWeather(data) {
    let apiWeather = this.baseUrl + data
    return this.http.get(apiWeather)

  }
}
