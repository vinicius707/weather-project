import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  private apiKey = 'country=BR&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30';
  public searchApi;
  public cityOrPostal;
  private baseUrl = `https://api.weatherbit.io/v2.0/current?`;

  constructor(private http: HttpClient) {}

  getWeather() {
    const headers = new HttpHeaders()
      .set('content-type', 'aplication/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(headers);
    return this.http.get(this.baseUrl+`${this.cityOrPostal}=${this.searchApi}&${this.apiKey}`, { headers: headers });
  }
}
