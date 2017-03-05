import {Component} from '@angular/core';
import {TodoItem} from '../shared/todo-items.service';

@Component({
  selector: 'todo-list',
  template: `
    <h2>Todo List:</h2>
    <!--<todo-item item="item" ng-repeat="item in items"></todo-item>-->
    <todo-list-footer [items]="items"></todo-list-footer>
  `,
  inputs: [
    'items',
  ],
})
export class TodoListComponent {
  items: TodoItem[];
}
