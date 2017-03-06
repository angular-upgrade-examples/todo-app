import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ItemComponent} from './todo-item.component';

// Angular todo-item module
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ItemComponent],
  exports: [ItemComponent],
})
export class TodoItemModule {}
