import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClubDetailsComponent } from './Clubs/club-details.component';
import { HomeComponent } from './Clubs/home.component';
import { ManUnitedComponent } from './Clubs/man-united.component';
import { ManCityComponent } from './Clubs/man-city.component';
// import { ActionComponent } from './Clubs/action.component';
import { RealMadridComponent } from './Clubs/real-madrid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import {MatPaginator} from
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids';
import { LoginComponent } from './Clubs/login.component';
import { SignupComponent } from './Clubs/signup.component';
// import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManUnitedComponent,
    ManCityComponent,
    RealMadridComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,GridModule
  ],
  providers: [PageService, ToolbarService, EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
