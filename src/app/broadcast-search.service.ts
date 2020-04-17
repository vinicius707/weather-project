import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BroadcastSearchService {

  inputSearch = new EventEmitter<string> ();
  
  constructor() { }

  getSearch(result:string) {
    this.inputSearch.emit(result);
  }

}
