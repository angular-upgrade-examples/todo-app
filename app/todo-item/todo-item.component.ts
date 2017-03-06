import {Component, OnInit} from '@angular/core';
import {Logger} from '../shared/logger.service';
import {TodoItem} from '../shared/todo-items.service';

@Component({
  selector: 'todo-item',
  template: `
    <div>
      <label>
        <input type="checkbox" [(ngModel)]="item.completed" />
        <span [ngStyle]="{textDecoration: item.completed ? 'line-through' : ''}">
          {{ item.description }}
        </span>
      </label>
    </div>
  `,
  inputs: [
    'item',
  ],
})
export class ItemComponent implements OnInit {
  item: TodoItem;

  constructor(protected logger: Logger) {}

  ngOnInit() {
    this.logger.debug(`Created item: ${this.item.description}`);
  }
}
