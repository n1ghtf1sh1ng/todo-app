import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoAddModalPageRoutingModule } from './todo-add-modal-routing.module';

import { TodoAddModalPage } from './todo-add-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoAddModalPageRoutingModule
  ],
  declarations: [TodoAddModalPage]
})
export class TodoAddModalPageModule {}
