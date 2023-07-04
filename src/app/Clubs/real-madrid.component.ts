import { Component, OnInit } from '@angular/core';
import { Clubs } from './clubs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-real-madrid',
  templateUrl: './real-madrid.component.html',
  styleUrls: ['./real-madrid.component.css']
})
export class RealMadridComponent implements OnInit{
  clubs!: Observable<Clubs[]>
  readonly manu_URL = 'http://localhost:3000/MU_club';
  show: boolean = false;

  constructor(private http: HttpClient ) {
    this.getManU();
}
  ngOnInit(): void {
    this.getManU();
  }

getManU() {
  this.show = true;
  this.clubs = this.http.get<Clubs[]>(this.manu_URL);
}

}
