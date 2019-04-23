import { Component, OnInit, Input } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import {WpApiComments} from 'wp-api-angular';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import * as varbl from '../../varbles';

//import { HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.scss']
})

export class PostDisplayComponent implements OnInit {
  @Input()
  //token;
  posts = [];
  temp:any;
  comments = [];
  posts$: Observable<any[]>;
  editingPost = null;
   firstpost: any;
   firstcomments: any;
   sub: any;
   tid: any;
   comn: Boolean;
   postref:any;
   tempcontent: string;
   new_commnt = {
    author_email : "",
    author_name: "",
    author_url: "",
    content: "",
    date: "",
    date_gmt: "",
    karma: "",
    parent: 0,
    post: "",
    status: 'publish',
    type: 'comment'
  }
  DashboardPage=true;


  constructor( private wpApiPosts: WpApiPosts, private wpApiComments: WpApiComments,private route: ActivatedRoute,private router: Router,private http: HttpClient ) {

    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.tid = params['id'];
    });
   // debugger;
   //  let temp = this.token;

      if(localStorage.getItem('dbsts') == 'false')
      {
     // this.getOnePst(this.tid);
      this.getPosts(this.tid);
   // this.getComments(this.tid);
      }
  //  this.router.navigate(["index"]);
  }

  ngOnInit() {

  }
  getPosts(tid)
  {
    debugger;
    this.wpApiPosts.get(tid)
    .toPromise()
    .then( response => {
      let json: any = response.json();
      this.posts = json;
      this.firstpost = json;
      debugger;
      this.DashboardPage=false;
     // this.DashboardPage1=true;
    });
  }

  getComments(tid) {
    this.postref= tid;
    this.wpApiComments.getList(tid)
    .toPromise()
    .then( response => {
      let json: any = response.json();
       this.firstcomments = json;
       this.new_commnt = this.firstcomments[0];
     //  this.new_commnt.date = this.firstcomments[0].date;
     //  this.new_commnt.karma = this.firstcomments[0].karma;
         this.comments = this.firstcomments.filter(function(f) {
      return f.post == tid;

    });
   //  this.new_commnt = this.comments[0];
      });
  }

  getOnePst(tid){
    this.posts$ = this.getOnePost();
    this.posts$.subscribe(data =>
     {this.posts = data;

      // this.seedata();

     })
     debugger;
     this.somefunct();
  }

  seedata(){

    console.log(this.posts);
   // debugger;
   }

  getOnePost(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/Wp-Apitest/wp-json/wp/v2/posts?_embed', {

    });

  }

   somefunct()
  {
    debugger;

      let sdata: any = this.posts[0];

      let k = sdata.id;
      let p = sdata.title.rendered;
  }

  Back(){
        this.router.navigate(["Index"]);
  }

  addcomment(){

     this.comn = true;
     this.router.navigate(["PostDisplay"]);
  }

  savecomment(tempcontent) {


       let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         // 'apikey': this.apikey,
          'appkey': localStorage.getItem('access_token'),
        }),
      }
      //  params: new HttpParams().set('program_id', this.program_id)
     // };
    // this.token = varbl.ntoken;
     //this.new_commnt.post= '168';
    /*  let headers: Headers  = new Headers();
       headers.append('Content-Type', 'application/json' );
       headers.append('Authorization', 'Bearer' + localStorage.getItem('access_token')); */

    /*  const headers = new Headers({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
       'Access-Control-Max-Age': '1728000',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
      'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
    }); */
    //headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     this.new_commnt.content = tempcontent;
     this.new_commnt.author_name= 'vallinath mangalampalli';
     this.new_commnt.author_email='mvallinath@gmail.com';
     this.new_commnt.date=this.postref.date;
     this.new_commnt.status='publish'
      debugger;
      this.wpApiComments.create(this.new_commnt,{headers: HttpHeaders})
      .toPromise()
      .then( response => {
            console.log(response)
    debugger;

    });
    this.comn = false;
    debugger;
    this.router.navigate(["PostDisplay"]);

}
}
