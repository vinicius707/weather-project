import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  value: string = 'value';

  staticElements = [
    {
      cidade: 'São Paulo',
      temperatura: '27°c',
    },
    {
      cidade: 'Rio de Janeiro',
      temperatura: '40°c',
    },
    {
      cidade: 'Rio Grande do Sul',
      temperatura: '17°c',
    },
    {
      cidade: 'Mato Grosso',
      temperatura: '22°c',
    },
    {
      cidade: 'Amazonas',
      temperatura: '30°c',
    },
    {
      cidade: 'Acre',
      temperatura: '38°c',
    },
  ];
  constructor(private weatherApi: GetWeatherService) {}

  ngOnInit(): void {}

  keyUp(event) {
    // -- o valorConsulta == String || Number
    // -- o valorConta:Number
    // -- o valorConsulta pega o 1 elemento verifica se ele é um numero 
    // -- o valorConta:Number true number ou se NaN false
    // if - cityOrPostal = "postal_code="
    // else - cityOrPostal = "city="
    
    let numero:Number = event.target.value;

   
    //if numero==nan
    if (numero == NaN) {
      this.weatherApi.searchApi = event.target.value;
      this.weatherApi.cityOrPostal = "city="
    }else{
      this.weatherApi.searchApi = numero;
      this.weatherApi.cityOrPostal = "postal_code="
    }
  }

  teste() {
    this.weatherApi.getWeather().subscribe((data) => {
      console.log(data);
    });
  }
}


"https://api.weatherbit.io/v2.0/current?city=RIBEIR%C3%83O%20PIRES&country=BR&key=f5d346153e7f4af49fa9d36337a3ab30"