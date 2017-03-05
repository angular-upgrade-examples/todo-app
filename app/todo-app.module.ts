import * as angular from 'angular';
import {sharedModule} from './shared/shared.module';
import {todoItemModule} from './todo-item/todo-item.module';
import {appComponent} from './todo-app.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', [
    sharedModule.name,
    todoItemModule.name,
  ]).
  component('todoApp', appComponent);
