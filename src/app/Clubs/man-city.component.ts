import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from './names/jsonservice.service';
import { Clubs } from './clubs';
import { Observable, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-man-city',
  templateUrl: './man-city.component.html',
  styleUrls: ['./man-city.component.css']
})
export class ManCityComponent implements OnInit {
  players!: Observable<Clubs[]>
  readonly clubs_URL = 'http://localhost:3000/MC_club';
  show: boolean = false;
  show1: boolean = false;
  showform=false;
  updatePlayerData: Clubs[] = []
  addClubData: Clubs[] = []
  pageSettings!:Object

  constructor(private http: HttpClient){
     this.getAllPlayers();
     
  }
 
 
  getAllPlayers(){
   this.show = true;
   this.players = this.http.get<Clubs[]>(this.clubs_URL);
  }
   ngOnInit(): void {
     this.getAllPlayers();
     this.pageSettings = { pageSizes: true, pageSize: 5 };

   }
 
   EditPlayer(cl: any){
     this.show1 = true;
     this.updatePlayerData.push(cl);
     this.updatePlayerData = this.updatePlayerData.filter(item => item.id == cl.id)
   }
  
   //Updating Clubs
   updatePlayer(newPlayer: any) {
     this.updatePlayerData = [];
     this.http.put(`${this.clubs_URL}/${newPlayer.id}`, newPlayer).subscribe(
       res => {
         console.log(res);
       });
     this.getAllPlayers();
   }
 
   deletePlayer(bid: any) {
     this.http.delete(`${this.clubs_URL}/${bid}`).subscribe((data:any)=>
     { this.players=this.players.pipe(filter(data => data != bid))    })
   }
 
   goForm()
   {   this.showform=true;   }
 
 
   addPlayer(clubs:any)
   {
     this.http.post(this.clubs_URL,clubs).subscribe(
       res => {  console.log(res);      });
     this.getAllPlayers();
     this.showform=false;
   }
}
