import * as angular from 'angular';
import {TodoItems} from './todo-items.service';

// AngularJS shared module
export const sharedModule = angular.
  module('shared', []).
  service('todoItems', TodoItems);
