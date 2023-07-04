import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Clubs/home.component';
import { ManUnitedComponent } from './Clubs/man-united.component';
import { ManCityComponent } from './Clubs/man-city.component';
import { RealMadridComponent } from './Clubs/real-madrid.component';
import { LoginComponent } from './Clubs/login.component';
import { SignupComponent } from './Clubs/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'man-united',component:ManUnitedComponent},
  {path:'man-city',component:ManCityComponent},
  {path:'real-madrid',component:RealMadridComponent},
  {path: '', component: LoginComponent },
  {path: 'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
