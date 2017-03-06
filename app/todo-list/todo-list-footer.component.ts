import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoItems} from '../shared/todo-items.service';

@Component({
  selector: 'todo-list-footer',
  template: `
    <hr />
    <div>Completed: {{ completedCount }} / {{ totalCount }}</div>
  `,
})
export class TodoListFooterComponent implements OnInit {
  protected items: TodoItem[] = [];

  get completedCount():number {
    return this.items.filter(item => item.completed).length;
  }

  get totalCount(): number {
    return this.items.length;
  }

  constructor(protected todoItems: TodoItems) {}

  ngOnInit() {
    this.todoItems.fetch().then(items => this.items = items);
  }
}
