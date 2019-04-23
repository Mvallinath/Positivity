import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListService } from '../../shared/components/todolist/todolist.service';
//import { PostDisplayComponent } from '../../pages/wppages/post-display/post-display.component';
//import { ModalModule } from 'ngx-modal';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing,
        FormsModule,
       // ModalModule

    ],
    declarations: [
        IndexComponent,

        //PostDisplayComponent

    ],
    providers: [
      TodoListService,

    ]
})
export class IndexModule { }
