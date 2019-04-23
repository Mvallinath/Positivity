import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './httpinterceptor';



//import {IndexModule} from './pages/index/index.module'

/* import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular';

export function WpApiLoaderFactory(http: Http) {
  debugger;
  return new WpApiStaticLoader(http, 'http://localhost/Wp-Apitest/wp-json/wp/v2/', '');

} */

//import {AuthenticationModule} from './pages/authentication/authentication.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
    HttpClientModule,
    SharedModule,

   // IndexModule,
   /*  WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    }) */

  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
