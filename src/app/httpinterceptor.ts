import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()

export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(

    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log('intercepted request ... ');
 //---
 const headers: any = {};

    const authToken = localStorage.getItem('access_token'); // get the token from a service
    if (authToken) {
      headers['authorization'] = authToken; // add it to the header
    }

 //----


    // Clone the request to add the new header.
    const sts =   localStorage.getItem('log')


    const authReq = req.clone({

      headers: req.headers
     // headers: req.headers.set("Access-Control-Allow-Origin","*")
     // headers: req.headers.set("Access-Control-Allow-Origin","*").set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),
      });


    if(sts=='no')
    {
    const authReq = req.clone({

      headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
     // headers: req.headers.set("Access-Control-Allow-Origin","*")
     // headers: req.headers.set("Access-Control-Allow-Origin","*").set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),
      });
    }
    console.log('Sending request with new header now ...');

    //send the newly created request
    return next.handle(authReq).catch((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log('Error Occurred');
      console.log(error);
      //return the error to the method that called it
      return Observable.throw(error);
    }) as any;
  }
}
