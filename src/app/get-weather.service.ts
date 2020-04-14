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

 
    /*  export class GetWeatherService {

    constructor(private http: HttpClient) { }
  
    getWeather(dataCity) {
  
      let url = "http://api.weatherbit.io/v2.0/current?" + dataCity + "key=f5d346153e7f4af49fa9d36337a3ab30"
      return this.http.get(url)
  
    } */
}
