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

  constructor(private weatherApi: GetWeatherService, private  _broadcastService: BroadcastSearchService) {
    
    this.clickEventSubscription = this.weatherApi.getClick().subscribe( () => 
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


}
