import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todolist.service';
import { Observable } from 'rxjs'
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router } from '@angular/router';
@Component({
  selector: 'du-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers: [TodoListService]
})

export class TodolistComponent implements OnInit {

  posts$: Observable<any[]>;
  newTaskText: string;
  post: any[]
  public posts =[];
  constructor( private router: Router) {
  // this.posts$ = this.wp.getPosts();
   /* this.posts$.subscribe(data =>
    {this.posts = data;

          this.seedata();

    }
    ) */




  }


   ngOnInit() {
    /* this.todolist = this.todoListService.getTodoList();
    this.todolist.forEach(item => {
      item.isOver = false;
      item.isEdit = false;
      item.editText = item.text;
    }); */
  }

   seedata(){

   // console.log(this.posts);
    debugger;
   }

  Displaypost(pid){


    let sdata: any = this.posts[pid];

    let k = sdata.id;
    let p = sdata.title.rendered;
    debugger;
    localStorage.setItem('dbsts','false');
   // this.router.navigate(['Post'], { queryParams: { id: k } });
   this.router.navigate(['Ind']);
  }
}
 /* edit(index) {
    if (!this.todolist[index].isOver) {
      this.todolist[index].editText = this.todolist[index].text;
      this.todolist[index].isEdit = true;
    }
  }

  overMatter(index) {
    if (!this.todolist[index].isEdit) {
      this.todolist[index].isOver = !this.todolist[index].isOver;
    }
  }

  enterTaskEdit(index) {
    this.todolist[index].text = this.todolist[index].editText;
    this.todolist[index].isEdit = false;
  }

  cancelTaskEdit(index) {
    this.todolist[index].isEdit = false;
  }

  creatNewTask() {
    const newTask = new List;
    newTask.isEdit = false;
    newTask.isOver = false;
    newTask.text = this.newTaskText;
    this.todolist.unshift(newTask);
  }

} */
