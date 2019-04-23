import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  user = {
    login: '',
    password: ''
  }
  user_name: string ;
  user_phone: string;
  user_mail: string;
  user_profile: string;
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();


  constructor( private http: HttpClient, private router:Router ) { }

  ngOnInit() {
  }

  auth() {
    // localStorage.setItem('dbsts','false');
       this.http.post('http://localhost/Wp-Apitest/wp-json/jwt-auth/v1/token', {
      username: this.user.login,
      password: this.user.password
    }).subscribe((data) => {
      if (data['token']) {
        this.token = data['token'];
        this.tokenChange.emit(this.token);
        localStorage.clear();
        localStorage.setItem('access_token', this.token);
        localStorage.setItem('dbsts','True');
        localStorage.setItem('log','yes');
        this.getuserprofile();
        this.router.navigate(["Index"]);
      }
    });
   // username: this.user.login;
   // password: this.user.password
   // this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL1dwLUFwaXRlc3QiLCJpYXQiOjE1NTM1NjY5OTMsIm5iZiI6MTU1MzU2Njk5MywiZXhwIjoxNTU0MTcxNzkzLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.Tab68Iw2GRCdk9ISXdxhfaE3aFZL0f5CLsYVX1uzcpc";
  //  localStorage.setItem('token', this.token);
    //  this.router.navigate(["Index"]);

  }
  getuserprofile()
  { this.http.get<any>('http://localhost/AnotherApi/api/test_api.php')
  .toPromise()
  /* .then(response => {
   let json: any = response;
   console.log(json)
   this.userpref= json;
  }) */
   .then(
    res => {
      let resources = res;
      let resource = resources[0];
     // this.user_profile =resource["user_profile"];
     // this.user_mail = resource["user_mail"];
    //  this.user_phone = resource["user_phone"];
      localStorage.setItem('user_profile', resource["user_profile"]);
      localStorage.setItem('user_mail', resource["user_mail"]);
      localStorage.setItem('user_phone', resource["user_phone"]);
  }
   )

  }
}

