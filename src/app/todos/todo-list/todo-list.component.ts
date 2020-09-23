import { Todo } from './../shared/todo';
import { Component, OnInit, Injector, AfterContentInit } from '@angular/core';
import { ListBaseComponent } from 'src/app/core/list-base';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent extends ListBaseComponent<Todo, TodoService> implements OnInit {

  constructor(injector: Injector, service: TodoService) {
    super(injector, service);
  }

  ngOnInit() {
    super.ngOnInit();
   }

}
