import {Component} from '@angular/core';
import {TodoItem} from '../shared/todo-items.service';

@Component({
  selector: 'todo-list-footer',
  template: `
    <hr />
    <div>Completed: {{ completedCount }} / {{ totalCount }}</div>
  `,
  inputs: [
    'items',
  ],
})
export class TodoListFooterComponent {
  protected items: TodoItem[] = [];

  get completedCount():number {
    return this.items.filter(item => item.completed).length;
  }

  get totalCount(): number {
    return this.items.length;
  }
}
