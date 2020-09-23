import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent, TodoComponent],
  imports: [
    CommonModule, TodosRoutingModule, SharedModule
  ]
})
export class TodosModule { }
