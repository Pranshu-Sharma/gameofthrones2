import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


// routing related code
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public getCharacterDetails:any;
  public characterDetails:any;

  constructor(private _route:ActivatedRoute, private router:Router, public httpService:HttpService) { }

  ngOnInit() {
    let characterId = this._route.snapshot.paramMap.get('characterId')
    this.getCharacterDetails = this.httpService.getCharactersDetails(characterId).subscribe(

      data =>{
        console.log(data);
        this.characterDetails = data;
        
        console.log("Character Details : "+this.characterDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}
