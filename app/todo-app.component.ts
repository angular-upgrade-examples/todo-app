import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoItems} from './shared/todo-items.service';

@Component({
  selector: 'todo-app',
  template: `
    <todo-list [items]="items"></todo-list>
  `,
})
export class TodoAppComponent implements OnInit{
  items: TodoItem[] = [];

  constructor(protected todoItems: TodoItems) {}

  ngOnInit() {
    this.todoItems.fetch().then(items => this.items = items);
  }
}
