import * as angular from 'angular';
import {sharedModule} from './shared/shared.module';
import {todoListModule} from './todo-list/todo-list.module';
import {todoAppComponent} from './todo-app.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', [
    sharedModule.name,
    todoListModule.name,
  ]).
  component('todoApp', todoAppComponent);
