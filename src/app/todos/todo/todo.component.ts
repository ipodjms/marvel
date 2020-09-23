import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../shared/todo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() currentTodo: Todo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log (this.currentTodo);
  }

  public navigateToDetail(todo: Todo): void {
    this.router.navigate([ todo.id], {
      replaceUrl: false,
      relativeTo: this.activatedRoute
    });
  }

}
