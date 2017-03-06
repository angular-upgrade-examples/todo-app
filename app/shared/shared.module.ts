import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {downgradeInjectable} from '@angular/upgrade/static';
import {Logger} from './logger.service';
import {TodoItems} from './todo-items.service';

// AngularJS shared module
export const sharedModule = angular.
  module('shared', []).
  factory('logger', downgradeInjectable(Logger)).
  service('todoItems', TodoItems);

// Angular shared module
@NgModule({
  providers: [
    Logger,
    {provide: TodoItems, useFactory: todoItemsFactory, deps: ['$injector']},
  ],
})
export class SharedModule {}

export function todoItemsFactory($injector: angular.auto.IInjectorService) :TodoItems {
  return $injector.get('todoItems') as TodoItems;
}
