import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {todoItemModule} from '../todo-item/todo-item.module';
import {todoListComponent} from './todo-list.component';
import {TodoListFooterComponent} from './todo-list-footer.component';

// AngularJS todo-list module
export const todoListModule = angular.
  module('todoList', [
    todoItemModule.name,
  ]).
  component('todoList', todoListComponent).
  directive('todoListFooter', downgradeComponent({
    component: TodoListFooterComponent,
    inputs: ['items'],
  }));

// Angular todo-list module
@NgModule({
  declarations: [TodoListFooterComponent],
  entryComponents: [TodoListFooterComponent],
})
export class TodoListModule {}
