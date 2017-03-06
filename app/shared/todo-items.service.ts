import {Injectable} from '@angular/core';
import {Logger} from './logger.service';

export interface TodoItem {
  description: string;
  completed: boolean;
}

@Injectable()
export class TodoItems {
  protected items: TodoItem[] = [
    {description: 'Do this', completed: false},
    {description: 'Do that', completed: false},
  ];

  constructor(protected logger: Logger) {}

  fetch(): Promise<TodoItem[]> {
    return Promise.resolve(this.items);
  }

  removeCompleted() {
    const completedItems = this.items.filter(item => item.completed);
    completedItems.forEach(item => {
      this.items.splice(this.items.indexOf(item), 1);
    });

    this.logger.debug(`Removed ${completedItems.length} items`);
  }
}
