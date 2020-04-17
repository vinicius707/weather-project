import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BroadcastSearchService {

  inputSerch = new EventEmitter<string> ();
  
  constructor() { }

  getSearch(result:string) {
    this.inputSerch.emit(result);
  }

}
