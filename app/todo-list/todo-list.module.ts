import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TodoItemModule} from '../todo-item/todo-item.module';
import {TodoListComponent} from './todo-list.component';
import {TodoListFooterComponent} from './todo-list-footer.component';

// Angular todo-list module
@NgModule({
  imports: [BrowserModule, TodoItemModule],
  declarations: [TodoListComponent, TodoListFooterComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
