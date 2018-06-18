import { Component, OnInit, OnDestroy } from '@angular/core';

// routing related code
import {ActivatedRoute,Router} from '@angular/router';

// jquery
import * as $ from 'jquery';

// import statement for service
import { MainServiceService } from '../main-service.service';
import { HttpService } from '../http.service';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  public allDetails:any = [ ];
  public allDetails2 = [1,2,3];
  

  // ActivatedRoute and Router declared in constructor
  // service declared in constructor
  constructor(public mainService:MainServiceService,public httpService:HttpService) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ALL DETAILS : "+this.allDetails);
    console.log($('.container').text());
    console.log("Home Component Initialized");

    // using method declared in service
    this.mainService.service();

   this.httpService.getCharacters().subscribe(

      data =>{
        console.log(data);
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details1 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

  this.httpService.getHouses().subscribe(

      data =>{
        console.log(data);
        // this.allDetails.push(JSON.stringify(data));
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details2 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

    this.httpService.getBooks().subscribe(

      data =>{
        console.log(data);
        // this.allDetails.push(JSON.stringify(data));
        this.allDetails = this.allDetails.concat(data);
        this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
        console.log("All Details3 : "+this.allDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )

    
    // return this.allDetails;

    
    // setTimeout(()=>{
    //   this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
    // },1000)

    $('html').ready(()=>{
      this.allDetails.sort((a, b) => a.name.localeCompare(b.name));
    })
    
  }

  // code to run after component is destroyed
  ngOnDestroy(){
    console.log("destroyed")
  }

}
