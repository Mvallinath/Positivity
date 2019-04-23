import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';




@Component({
  selector: 'app-root',
  templateUrl: './wppages.component.html',
 // styleUrls: ['./wppages.component.css']
})
export class WppagesComponent {
  token = null;

  constructor() {
  }

}
