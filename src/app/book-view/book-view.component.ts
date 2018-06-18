import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

// routing related code
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public getBookDetails:any;
  public bookDetails:any;

  constructor(private _route:ActivatedRoute, private router:Router, public httpService:HttpService) {   }

  ngOnInit() {
    let bookId = this._route.snapshot.paramMap.get('bookId')
    this.getBookDetails = this.httpService.getBookDetails(bookId).subscribe(

      data =>{
        console.log(data);
        this.bookDetails = data;
        
        console.log("Book Details : "+this.bookDetails)
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}
