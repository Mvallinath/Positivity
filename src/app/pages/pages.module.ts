import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import {WppagesComponent}  from '../pages/wppages/wppages.component';
import { PostEditComponent } from './wppages/post-edit/post-edit.component';
import { PostListComponent } from './wppages/post-list/post-list.component';
import { UserListComponent } from './wppages/user-list/user-list.component';
import { PostNewComponent } from './wppages/post-new/post-new.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from '../httpinterceptor';


//import { PostDisplayComponent } from './wppages/post-display/post-display.component';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';



/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationComponent } from './authentication/authentication.component'

 import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular';


  export function WpApiLoaderFactory(http: Http) {

  return new WpApiStaticLoader(http, 'http://localhost/Wp-Apitest/wp-json/wp/v2/', '');
}


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,

       // WppagesModule,
         WpApiModule.forRoot({
          provide: WpApiLoader,
          useFactory: (WpApiLoaderFactory),
          deps: [Http]
        })

    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MyHttpInterceptor,
        multi: true
      }],

    declarations: [
        PagesComponent,
        LoginComponent,
        AuthenticationComponent,
        WppagesComponent,
        PostEditComponent,
        PostListComponent,
        UserListComponent,
        PostNewComponent,
       // PostDisplayComponent,

    ]
})
export class PagesModule { }
