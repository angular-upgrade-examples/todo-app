import * as angular from 'angular';
import {todoItemModule} from '../todo-item/todo-item.module';
import {todoListComponent} from './todo-list.component';

// AngularJS todo-list module
export const todoListModule = angular.
  module('todoList', [
    todoItemModule.name,
  ]).
  component('todoList', todoListComponent);
