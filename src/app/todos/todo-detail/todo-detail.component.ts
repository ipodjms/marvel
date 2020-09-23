import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  public todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    const todoId = this.getUrlsParams();
    if (!!todoId) {
      this.todoService.get(todoId).subscribe(character => {
        console.log (character);
        this.todo = character;
      });
    }
  }

  getUrlsParams() {
    return this.activatedRoute.snapshot.params.id;
  }
}
