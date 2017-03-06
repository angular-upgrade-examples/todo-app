import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {todoItemComponent, TodoItemComponentFacade} from './todo-item.component';

// AngularJS todo-item module
export const todoItemModule = angular.
  module('todoItem', []).
  component('todoItem', todoItemComponent);

// Angular todo-item module
@NgModule({
  declarations: [TodoItemComponentFacade],
  exports: [TodoItemComponentFacade],
})
export class TodoItemModule {}
