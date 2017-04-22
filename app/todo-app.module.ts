import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {sharedModule} from './shared/shared.module';
import {todoItemModule} from './todo-item/todo-item.module';
import {appComponent} from './todo-app.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', [
    sharedModule.name,
    todoItemModule.name,
  ]).
  component('todoApp', appComponent);

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
})
export class TodoAppModule {
  constructor(protected upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [todoAppModule.name]);
  }
}
