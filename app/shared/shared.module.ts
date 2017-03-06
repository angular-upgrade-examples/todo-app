import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {downgradeInjectable} from '@angular/upgrade/static';
import {TodoItems} from './todo-items.service';

// AngularJS shared module
export const sharedModule = angular.
  module('shared', []).
  factory('todoItems', downgradeInjectable(TodoItems));

// Angular shared module
@NgModule({
  providers: [TodoItems],
})
export class SharedModule {}
