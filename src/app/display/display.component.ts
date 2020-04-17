import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// imports services 
import { GetWeatherService } from '../get-weather.service';
import { BroadcastSearchService } from '../broadcast-search.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  clickEventSubscription:Subscription;

  constructor(private _weatherApi: GetWeatherService, private  _broadcastService: BroadcastSearchService) {
    
    this.clickEventSubscription = this._weatherApi.getClick().subscribe( () => 
    this.incrementCount());
  }

  ngOnInit(): void {
    this._broadcastService.inputSearch.subscribe(result => {
      console.log(result)
      // this.callApi(result)
    })
  }
 
  count = 0;

  incrementCount() {
    this.count++;
  }


  callApi(input:string): void{
    let temperatura
    let cidade
    let previsao
    let hora
    let descricao
    this._weatherApi.getWeather(input).subscribe(result =>{
      temperatura = result.data[0].temp
      cidade = result.data[0].city_name
      previsao = result.data[0].app_temp
      hora = result.data[0].ob_time
      descricao = result.data[0].weather.description
      console.log(descricao);
      
    })
  }


}
