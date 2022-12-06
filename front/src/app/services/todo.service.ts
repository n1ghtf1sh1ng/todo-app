import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoApi } from '../api/todo.api';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private api: TodoApi) {}

  fetchTodos(): Observable<any> {
    return this.api.fetchTodos();
  }
}
