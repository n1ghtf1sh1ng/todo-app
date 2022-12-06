import { Component } from '@angular/core';
import { ModalController, RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { TodoService } from '../services/todo.service';
import { TodoAddModalPage } from '../todo-add-modal/todo-add-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private todoService: TodoService, private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.todoService.fetchTodos().subscribe((todos) => {
      console.log(todos);
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async addTodo() {
    const modal = await this.modalCtrl.create({
      component: TodoAddModalPage,
    });
    await modal.present();
  }
}
