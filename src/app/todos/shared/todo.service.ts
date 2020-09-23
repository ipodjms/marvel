import { Injectable, Injector } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Todo } from './todo';
import { VERSION_API } from 'src/app/shared/const';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends HttpService<Todo> {
  constructor(injector: Injector) {
    super(injector, VERSION_API, 'todos');
  }

}
