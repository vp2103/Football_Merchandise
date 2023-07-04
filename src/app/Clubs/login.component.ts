import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};

  constructor(private http: HttpClient, private routeObj:Router) {}

  loginUser() {
    this.http.get('http://localhost:3000/users?username=' + this.user.username)
      .subscribe(
        (response: any) => {
          if (response.length > 0 && response[0].password === this.user.password) {
            // alert('Login successful!');
            this.routeObj.navigate(['/home'])
          } else {
            alert('Invalid username or password!');
          }
        },
        error => {
          alert('Login failed!');
        }
      );
  }
}
