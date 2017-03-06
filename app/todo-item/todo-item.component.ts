import {Logger} from '../shared/logger.service';
import {TodoItem} from '../shared/todo-items.service';

export const itemComponent: angular.IComponentOptions = {
  template: `
    <div>
      <label>
        <input type="checkbox" ng-model="$ctrl.item.completed" />
        <span ng-style="{textDecoration: $ctrl.item.completed ? 'line-through' : ''}">
          {{ $ctrl.item.description }}
        </span>
      </label>
    </div>
  `,
  bindings: {
    item: '<'
  },
  controller: class ItemController {
    item: TodoItem;

    static $inject = ['logger'];
    constructor(protected logger: Logger) {}

    $onInit() {
      this.logger.debug(`Created item: ${this.item.description}`);
    }
  },
};
