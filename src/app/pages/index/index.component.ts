import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { Router } from '@angular/router';
import { WpApiPosts } from 'wp-api-angular';
import { WpApiComments } from 'wp-api-angular';
import * as varbl from '../../varbles';
import { TodoListService } from '../../shared/components/todolist/todolist.service';


//import { DOCUMENT } from '@angular/common';
//import { getMaxListeners } from 'cluster';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],

  //  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  @Input() token;

  showloading: boolean = false;
  display='none';
  posts = [];
  nposts = [];
  comments = [];
  partpost: String;
  tempid: number;
  comn: Boolean;
  firstcomments: any;
  pstdply: Boolean = false;
  tempcontent: string;
  modalcnt: any;
  //public AnimationBarOption;
  firstpost: any;
  filterctgr: Number = 3;
  reqpost: Boolean = false;
  DashboardPage = true;
  tmpcomment: string;
  cmtlength: Number;
  iscmnt: Boolean = true;
  new_commnt = {
    author_email: "",
    author_name: "",
    author_url: "",
    content: "",
    date: "",
    date_gmt: "",
    karma: "",
    parent: 0,
    post: 0,
    status: 'publish',
    type: 'comment'
  }

  constructor(private router: Router, private wpApiPosts: WpApiPosts, private wpApiComments: WpApiComments, private Todo: TodoListService) {


    this.getPosts();

    this.getcomments(188);
  }

  ngOnInit() {
    // this.AnimationBarOption = this._chartsService.getAnimationBarOption();

  }


  valuechg(i) {
    this.modalcnt = this.comments[i];
    this.iscmnt= true;
    this.tmpcomment= this.comments[i].content.rendered;
   // debugger;
  }
  valuechg1() {

    this.iscmnt= false;

   // debugger;
  }

  openModal(){
    this.display="block";
 }

 onCloseHandled()
 {
  this.display='none';
 }
  getPosts() {

    this.wpApiPosts.getList()
      .toPromise()
      .then(response => {
        let json: any = response.json()
        let tmp: any;
         tmp = json.filter(function (f) {
          return f.categories[0] == 4 });

        this.posts = tmp;

        var length = 0;
        var cnt = 0;

         Object.keys(tmp).forEach(function (key) {
          var val = tmp[key];
          length = length + 1;

        });
         this.firstpost = this.posts.find(item => item.id === 188);
         this.tempid=188;
         while ( cnt != length)
         {

          this.partpost =   this.posts[cnt].content.rendered;
          var contnt = this.partpost.substring(0,60);
          this.nposts[cnt] = contnt.replace(/(<([^>]+)>)/ig,"");


          cnt = cnt + 1;
        }

      });

      this.reqpost = false;
    }



  postdetail(tid) {

      this.firstpost = this.posts.find(item => item.id === tid);
    this.getcomments(tid);
    this.pstdply = true
    this.tempid = tid;
  }

  clearcomments(){
    let i = 0;
    while(i< this.cmtlength){
    var mydiv = document.getElementById("MyDiv");
       mydiv.remove();
       i=i+1;

    }
  }

  getcomments(tid) {

   this.wpApiComments.getList(tid)
      .toPromise()
      .then(response => {
        let json: any = response.json();
        this.firstcomments = json;
        this.new_commnt = this.firstcomments[0];

        this.comments = null;

        this.comments = this.firstcomments.filter(function (f) {
          return f.post == tid;
         });
         debugger;

         var tmp = this.comments;
         var length = 0;

         Object.keys(tmp).forEach(function (key) {
          var val = tmp[key];
          length = length + 1;

        });
        this.cmtlength= length;

       });
  }

  addcomment() {
    this.token = localStorage.getItem('access_token');

    let headers: Headers = new Headers({
      /* 'Content-Type': 'application/json',
          'Accept': 'application/json',
     'Authorization': 'Basic ' + btoa('vallinath:vallinath') */
    });
    headers.set('Authorization', 'Basic ' + btoa('vallinath:vallinath'));
    debugger;
    this.new_commnt.content = ' Testing comment';
    this.new_commnt.post = this.tempid;
    let ncmnt = ' Testing comment'


    this.wpApiComments.create(this.new_commnt)
      .toPromise()
      .then(response => {
        console.log('success');
      })
  }


  addcommentnew() {

   // this.comn= true;
    this.iscmnt= false;
  }

  savecomment(){
    this.new_commnt.content = this.tempcontent;
    this.new_commnt.post = this.tempid;
    this.new_commnt.parent = this.tempid;
    this.new_commnt.author_email = 'mvallinath@gmail.com';
    this.new_commnt.status = 'publish';
    //let commentData = { author_name : 'vallinath', author_email : 'mvallinath@gmail.com', content : this.tempcontent, post :this.tempid }

   // debugger;
    // this.Todo.CreateCommentold(this.new_commnt).subscribe(result =>
    this.Todo.Createcomment(this.tempcontent, this.tempid);
    //console.log(result));
    this.comn= false;
    this.iscmnt= false;
    this.getcomments(this.tempid)

  }

}


