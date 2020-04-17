import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  clickEventSubscription:Subscription;

  // visibility:number = 0
  // aqui(event){
  //   let camp = document.getElementById("outrosValores")
  //   if(this.visibility == 1){
  //     camp.style.display = "flex"
  //     return this.visibility =0;
  //   } else{
  //     camp.style.display = "none"
  //     return this.visibility =1;
  //   }
  // }

  constructor(private weatherApi: GetWeatherService) {

    this.clickEventSubscription = this.weatherApi.getClick().subscribe( () => 
    this.incrementCount());
  }

  ngOnInit(): void {
  }
  count = 0;

  incrementCount() {
    this.count++;
  }

}
