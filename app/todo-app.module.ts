import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {sharedModule, SharedModule} from './shared/shared.module';
import {todoListModule, TodoListModule} from './todo-list/todo-list.module';
import {todoAppComponent} from './todo-app.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', [
    sharedModule.name,
    todoListModule.name,
  ]).
  component('todoApp', todoAppComponent);

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TodoListModule,
    UpgradeModule,
  ],
})
export class TodoAppModule {
  constructor(protected upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.querySelector('todo-app')!, [todoAppModule.name]);
  }
}
