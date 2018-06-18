import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() {
    console.log("service is working")
   }

  //  method declaration
   public service(){
    console.log("main service");
  }
}

