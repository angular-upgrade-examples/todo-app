import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {itemComponent, ItemComponentFacade} from './todo-item.component';

// AngularJS todo-item module
export const todoItemModule = angular.
  module('todoItem', []).
  component('todoItem', itemComponent);

// Angular todo-item module
@NgModule({
  declarations: [ItemComponentFacade],
  exports: [ItemComponentFacade],
})
export class TodoItemModule {}
