import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoApi } from '../api/todo.api';
import { Todo } from '../interface/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private api: TodoApi) {}

  fetchTodos(): Observable<Todo[]> {
    return this.api.fetchTodos();
  }
}
