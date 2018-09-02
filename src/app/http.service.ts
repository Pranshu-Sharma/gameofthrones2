import { Injectable } from '@angular/core';

// importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

// rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

// jquery
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public allDetails = [];

  // base URL
  public baseUrl = 'https://www.anapioficeandfire.com/api'

  // HttpClient declared in constructor
  constructor(private _http:HttpClient) {
    console.log("http service is working")
   }

  //  method to get characters
   public getCharacters(){   
     let response1 = this._http.get(this.baseUrl+'/characters');
     console.log("response1 : "+response1);
     return response1;     
   }

  //  method to get houses
   public getHouses(){
    let response2 = this._http.get(this.baseUrl+'/books');
    console.log("response2 : "+response2);
    return response2;
   }

  //  method to get books
   public getBooks(){
    let response3 = this._http.get(this.baseUrl+'/houses');
     console.log("response3 : "+response3);
      return response3;
   }

   public getCharactersDetails(characterId){
    let response4 = this._http.get(this.baseUrl+'/characters/'+characterId);
    console.log("Character Response : "+response4);
    return response4;
   }

   public getHouseDetails(houseId){
    let response5 = this._http.get(this.baseUrl+'/houses/'+houseId);
    console.log("House Response : "+response5);
    return response5;
   }

   public getBookDetails(bookId){
    let response6 = this._http.get(this.baseUrl+'/books/'+bookId);
    console.log("Book Response : "+response6);
    return response6;
   }
}
