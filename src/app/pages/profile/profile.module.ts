import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyHttpInterceptor } from '../../httpinterceptor';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule,
        HttpClientModule,
        //HttpModule,

    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MyHttpInterceptor,
        multi: true
      }],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule { }
