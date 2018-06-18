import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for routing
import {RouterModule,Routes} from '@angular/router';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HomeComponent } from './home/home.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import statement for service
import { MainServiceService } from './main-service.service';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';



// decorators
@NgModule({
  declarations: [
    AppComponent,
    BookViewComponent,
    HomeComponent,
    CharacterViewComponent,
    HouseViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    // for bootstrap
    NgbModule.forRoot(),

    // for routes
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'books/:bookId',component:BookViewComponent},
      {path:'houses/:houseId',component:HouseViewComponent},
      {path:'characters/:characterId',component:CharacterViewComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotFoundComponent},
      
    ]),

    
  ],

  // service declared in providers array
  providers: [MainServiceService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
