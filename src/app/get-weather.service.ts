import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {

  private baseUrl = `https://api.weatherbit.io/v2.0/current?`;
  private apiKey = '&country=BR&lang=pt&key=f5d346153e7f4af49fa9d36337a3ab30';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getWeather(city): Observable<any> {
    
    let cityOrPostal;

    if(typeof city == "string") {
      cityOrPostal = "city=" + city;
    } else {
      cityOrPostal = "postal_code=" + city;
    }
    let finalUrl = this.baseUrl + cityOrPostal + this.apiKey;
    return this.http.get(finalUrl);
  }

  sendWeather(): Observable<any> {
    return this.subject.asObservable();
  }

  sendClick(){
    this.subject.next();
  }

  getClick(): Observable<any> {
    return this.subject.asObservable();
  }

}