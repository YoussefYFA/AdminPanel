import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './userservice/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(private userService: UserService, public router: Router) { }

  login(username: string, password: string) {

    const users = this.userService.getUsers();
    for (let user of users){
      if (user.username === username && user.password === password) {
        this.isAuthenticated = true;
        this.router.navigate(['productspage']);
        break;}
        else {
          this.isAuthenticated = false
          console.log("wrong username and password")
        }
      }
    };


/*
    // This currently just accepts non-empty strings,
    // I will edit later to make sure username and password match
    if (username && password) {

      this.isAuthenticated = true;
      this.router.navigate(['productspage']);
    }
  }
*/

  logout() {
    this.isAuthenticated = false;
    //i need to create a logout button somewhere, set ngif to appear only if isAuth is true,
    //then, import this service, make the button activate this method
    //make the button redirect to loginpage too 
  }
}