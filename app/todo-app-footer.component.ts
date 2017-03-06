import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Logger} from './shared/logger.service';
import {TodoItem} from './shared/todo-items.service';

@Component({
  selector: 'todo-app-footer',
  template: `
    <hr />
    <span>Completed: {{ completedCount }} / {{ totalCount }}</span> |
    <button (click)="removeCompleted.emit()">Remove completed</button>
  `,
})
export class FooterComponent {
  @Input() protected items: TodoItem[] = [];
  @Output() removeCompleted = new EventEmitter<void>();

  constructor(logger: Logger) {
    this.removeCompleted.subscribe(() => logger.debug('Removing completed'));
  }

  get completedCount():number {
    return this.items.filter(item => item.completed).length;
  }

  get totalCount(): number {
    return this.items.length;
  }
}
