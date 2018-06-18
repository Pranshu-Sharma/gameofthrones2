import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';


// routing related code
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  public getHouseDetails:any;
  public houseDetails:any;

  constructor(private _route:ActivatedRoute, private router:Router, public httpService:HttpService) { }

  ngOnInit() {
    let houseId = this._route.snapshot.paramMap.get('houseId')
    this.getHouseDetails = this.httpService.getHouseDetails(houseId).subscribe(

      data =>{
        console.log(data);
        this.houseDetails = data;
        
        console.log("Character Details : "+this.houseDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}
