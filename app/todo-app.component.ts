import {TodoItem, TodoItems} from './shared/todo-items.service';

export const todoAppComponent: angular.IComponentOptions = {
  template: `
    <todo-list [items]="$ctrl.items"></todo-list>
  `,
  controller: class TodoAppController {
    items: TodoItem[] = [];

    static $inject = ['todoItems'];
    constructor(protected todoItems: TodoItems) {}

    $onInit() {
      this.todoItems.fetch().then(items => this.items = items);
    }
  }
};
