import {Component} from '@angular/core';
import {TodoItem} from '../shared/todo-items.service';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      <label>
        <input type="checkbox" [(ngModel)]="item.completed" />
        <span [ngStyle]="{textDecoration: item.completed && 'line-through'}">
          {{ item.description }}
        </span>
      </label>
    </div>
  `,
  inputs: [
    'item',
  ],
})
export class TodoItemComponent {
  item: TodoItem;
}
