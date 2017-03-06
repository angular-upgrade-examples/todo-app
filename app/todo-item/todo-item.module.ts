import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TodoItemComponent} from './todo-item.component';

// Angular todo-item module
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoItemComponent],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
