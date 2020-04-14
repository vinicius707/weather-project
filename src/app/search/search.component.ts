import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string = "value"

  staticElements = [
    {
      cidade: "São Paulo",
      temperatura: "27°c"
    },
    {
      cidade: "Rio de Janeiro",
      temperatura: "40°c"
    },
    {
      cidade: "Rio Grande do Sul",
      temperatura: "17°c"
    },
    {
      cidade: "Mato Grosso",
      temperatura: "22°c"
    },
    {
      cidade: "Amazonas",
      temperatura: "30°c"
    },
    {
      cidade: "Acre",
      temperatura: "38°c"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
