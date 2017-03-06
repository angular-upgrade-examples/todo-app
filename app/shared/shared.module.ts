import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {TodoItems} from './todo-items.service';

// AngularJS shared module
export const sharedModule = angular.
  module('shared', []).
  service('todoItems', TodoItems);

// Angular shared module
@NgModule({
  providers: [
    {provide: TodoItems, useFactory: todoItemsFactory, deps: ['$injector']},
  ]
})
export class SharedModule {}

export function todoItemsFactory($injector) {
  return $injector.get('todoItems');
}
