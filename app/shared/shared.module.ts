import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {downgradeInjectable} from '@angular/upgrade/static';
import {Logger} from './logger.service';
import {TodoItems} from './todo-items.service';

// AngularJS shared module
export const sharedModule = angular.
  module('shared', []).
  factory('logger', downgradeInjectable(Logger));

// Angular shared module
@NgModule({
  providers: [
    Logger,
    TodoItems,
  ],
})
export class SharedModule {}
