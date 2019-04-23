import { Injectable, Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable(
)
export class TodoListService {
@Input() token;

    //token = localStorage.getItem('access_token');
   /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '  + localStorage.getItem('access_token')
    })
  }; */


  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer '  + localStorage.getItem('access_token'));
  }

  /* getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/Wp-Apitest/wp-json/wp/v2/posts?_embed', {

    }); */

    CreateCommentold(cmnt) {
      debugger;
    //  let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    this.http.options.arguments.headers.set('Authorization', 'Bearer '  + localStorage.getItem('access_token'));
      return this.http.post('http://localhost/Wp-Apitest/wp-json/wp/v2/comments?author_name=vallinath&author_email=mvallinath@gmail.com&content=NewTestingcommentposting&post=184&status=publish',this.http.options.arguments.headers.set('Authorization', 'Bearer '  + localStorage.getItem('access_token'))
      );


    }

    Createcomment( ncontent, postid )
  {
    debugger;
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer '+ localStorage.getItem('access_token'));
    let CommentData = { author_name : 'vallinath', author_email : 'mvallinath@gmail.com', content : ncontent, post : postid }
     let another = 'author_name=vallinath&author_email=mvallinath@gmail.com&content=AnotherTestingcommentposting&post=188&status=publish';
    this.http.post('http://localhost/Wp-Apitest/wp-json/wp/v2/comments',CommentData)
   .subscribe(res => {
      console.log(res)

    });
   debugger;
  }
  }


  /* getOnePost(tid): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/Wp-Apitest/wp-json/wp/v2/posts?id=tid', {

    });

  } */
//}
