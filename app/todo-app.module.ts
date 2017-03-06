import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import {SharedModule} from './shared/shared.module';
import {TodoListModule} from './todo-list/todo-list.module';
import {TodoAppComponent} from './todo-app.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', []).
  directive('todoApp', downgradeComponent({component: TodoAppComponent}));

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TodoListModule,
    UpgradeModule,
  ],
  declarations: [TodoAppComponent],
  entryComponents: [TodoAppComponent],
})
export class TodoAppModule {
  constructor(protected upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.querySelector('todo-app')!, [todoAppModule.name]);
  }
}
