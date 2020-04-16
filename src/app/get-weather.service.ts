import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {

  private baseUrl = `https://api.weatherbit.io/v2.0/current?`;
  private apiKey = '&country=BR&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30';

  constructor(private http: HttpClient) {}

  getWeather(city?:string, postalCode?: number) {
    
    let cityOrPostal;

    if(city.length != 0) {
      cityOrPostal = "city=" + city;
    } else {
      cityOrPostal = "postal_code=" + postalCode;
    }
    let finalUrl = this.baseUrl + cityOrPostal + this.apiKey;
    return this.http.get(finalUrl);
  }
}