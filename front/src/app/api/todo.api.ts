import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoApi {
  url = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<any> {
    return this.http.get(`${this.url}/todos/`);
  }
}
