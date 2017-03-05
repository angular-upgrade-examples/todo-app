import * as angular from 'angular';
import {todoItemComponent} from './todo-item.component';

// AngularJS todo-item module
export const todoItemModule = angular.
  module('todoItem', []).
  component('todoItem', todoItemComponent);
