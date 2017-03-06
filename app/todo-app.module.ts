import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {TodoListModule} from './todo-list/todo-list.module';
import {TodoAppComponent} from './todo-app.component';

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TodoListModule,
  ],
  declarations: [TodoAppComponent],
  bootstrap: [TodoAppComponent],
})
export class TodoAppModule {}
