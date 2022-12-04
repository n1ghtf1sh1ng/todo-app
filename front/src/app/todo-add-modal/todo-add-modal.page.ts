import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-add-modal',
  templateUrl: './todo-add-modal.page.html',
  styleUrls: ['./todo-add-modal.page.scss'],
})
export class TodoAddModalPage implements OnInit {
  title: string = '';
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
