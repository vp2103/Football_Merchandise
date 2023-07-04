import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  user: any = {};

  constructor(private http: HttpClient, private routeObj:Router) {}

  registerUser() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post('http://localhost:3000/users', this.user)
      .subscribe(
        response => {
          this.routeObj.navigate(['/'])
        },
        error => {
          alert('Registration failed!');
        }
      );
  }
}
