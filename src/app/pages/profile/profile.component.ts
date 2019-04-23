import { Component, OnInit } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
//import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = {
  user_name: "",
  user_phone: "",
  user_mail: "",
  user_profile: "",
  }
  constructor(private http: HttpClient) { }
 // private header: Headers = new Headers({});
  ngOnInit() { }

  saveuser()
  {
    let headers = new HttpHeaders({
     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
     // 'Content-Type': 'application/json',
     // 'Access-Control-Allow-Credential':'true',
     // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
      );
  let options = { headers: headers };
  const formData = new FormData();
  formData.append('user_name', this.user.user_name);
  formData.append('user_phone', this.user.user_phone,);
  formData.append('user_mail', this.user.user_mail);
  formData.append('user_profile',this.user.user_profile);

      debugger;
      localStorage.setItem('log','no');
       this.http.post('http://localhost/AnotherApi/api/InsertUser.php',formData)
      .subscribe(
      data => {
        console.log("ok")
      },
      error => {
        console.log('error');
      }
      )
    }
      /*
      this.headers.append('Content-Type','application/x-www-form-urlencoded');
      this.headers.append('Content-Type','application/json');

  let data = new URLSearchParams();
  data.append('user_name', this.user.user_name);
  data.append('user_phone',this.user.user_phone);
  data.append('user_mail', this.user.user_mail);
  data.append('user_profile',this.user.user_profile);
  this.http.post('http://localhost/AnotherApi/api/InsertUser.php', data,{  headers: this.headers})
  .subscribe(
    data => {
      console.log("ok")
    },
    error => {
      console.log('error');
    }
    );
  } */
}
