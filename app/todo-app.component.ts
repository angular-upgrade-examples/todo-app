import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoItems} from './shared/todo-items.service';

@Component({
  selector: 'todo-app',
  template: `
    <h2>Todo List:</h2>
    <todo-item [item]="item" *ngFor="let item of items"></todo-item>
    <todo-app-footer [items]="items" (removeCompleted)="onRemoveCompleted()"></todo-app-footer>
  `,
})
export class AppComponent implements OnInit {
  items: TodoItem[] = [];

  constructor(protected todoItems: TodoItems) {}

  ngOnInit() {
    this.todoItems.fetch().then(items => this.items = items);
  }

  onRemoveCompleted() {
    this.todoItems.removeCompleted();
  }
}
