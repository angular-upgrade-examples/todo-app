import * as angular from 'angular';
import {itemComponent} from './todo-item.component';

// AngularJS todo-item module
export const todoItemModule = angular.
  module('todoItem', []).
  component('todoItem', itemComponent);
