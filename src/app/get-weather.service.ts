import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetWeatherService {

  private baseUrl = 'http://api.weatherbit.io/v2.0/current?'
  private apiKey = "f5d346153e7f4af49fa9d36337a3ab30"


  constructor(private http: HttpClient) { }

  getWeather() {
    const headers = new HttpHeaders()
    .set('content-type','aplication/json')
    .set('Access-Control-Allow-Origin','*');
    console.log(headers)
    let dados = this.http.get(this.baseUrl + "city=SaoPaulo"  + "," + `NC&key=${this.apiKey}`, {'headers':headers})
    console.log(dados)
    return this.http.get(this.baseUrl + "city=SaoPaulo"  + "," + `NC&key=${this.apiKey}`, {'headers':headers})
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
