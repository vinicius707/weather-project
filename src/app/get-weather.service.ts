import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  private apiKey = 'country=BR&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30';
  public searchApi: any;
  public cityOrPostal:any;
  private baseUrl = `https://api.weatherbit.io/v2.0/current?${this.cityOrPostal}=${this.searchApi}&${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getWeather() {
    const headers = new HttpHeaders()
      .set('content-type', 'aplication/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(headers);
    return this.http.get(this.baseUrl, { headers: headers });
    // let apiWeather = this.baseUrl + data
    // return this.http.get(apiWeather)
  }

  /*  export class GetWeatherService {

    constructor(private http: HttpClient) { }

    getWeather(dataCity) {

      let url = "http://api.weatherbit.io/v2.0/current?" + dataCity + "key=f5d346153e7f4af49fa9d36337a3ab30"
      return this.http.get(url)

    } */
}
