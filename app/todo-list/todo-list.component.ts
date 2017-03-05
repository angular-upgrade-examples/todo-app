import {TodoItem} from '../shared/todo-items.service';

export const todoListComponent: angular.IComponentOptions = {
  template: `
    <h2>Todo List:</h2>
    <todo-item item="item" ng-repeat="item in $ctrl.items"></todo-item>
    <todo-list-footer [items]="$ctrl.items"></todo-list-footer>
  `,
  bindings: {
    items: '<'
  },
  controller: class TodoListController {
    items: TodoItem[];
  }
};
