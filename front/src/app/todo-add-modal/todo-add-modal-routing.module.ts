import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAddModalPage } from './todo-add-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TodoAddModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoAddModalPageRoutingModule {}
