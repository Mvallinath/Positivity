import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userModel } from './user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/* export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 */
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;

  ngOnInit() {
  }
  login() : void {
    debugger;
    if(this.username == 'admin' && this.password == 'admin'){
      debugger
     this.router.navigate(["Dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }

