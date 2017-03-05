import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {todoItemModule} from '../todo-item/todo-item.module';
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
  declarations: [TodoListComponent, TodoListFooterComponent],
  entryComponents: [TodoListComponent],
})
export class TodoListModule {}
