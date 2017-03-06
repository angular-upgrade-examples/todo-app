import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent} from '@angular/upgrade/static';
import {todoItemModule, TodoItemModule} from '../todo-item/todo-item.module';
import {TodoListComponent} from './todo-list.component';
import {TodoListFooterComponent} from './todo-list-footer.component';

// AngularJS todo-list module
export const todoListModule = angular.
  module('todoList', [
    todoItemModule.name,
  ]).
  directive('todoList', downgradeComponent({
    component: TodoListComponent,
    inputs: ['items'],
  }));

// Angular todo-list module
@NgModule({
  imports: [BrowserModule, TodoItemModule],
  declarations: [TodoListComponent, TodoListFooterComponent],
  entryComponents: [TodoListComponent],
})
export class TodoListModule {}
