import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  visibility:number = 0
  aqui(event){
    let camp = document.getElementById("outrosValores")
    if(this.visibility == 1){
      camp.style.display = "flex"
      return this.visibility =0;
    } else{
      camp.style.display = "none"
      return this.visibility =1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
