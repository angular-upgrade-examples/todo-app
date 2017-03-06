import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import {sharedModule} from './shared/shared.module';
import {todoItemModule} from './todo-item/todo-item.module';
import {appComponent} from './todo-app.component';
import {FooterComponent} from './todo-app-footer.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', [
    sharedModule.name,
    todoItemModule.name,
  ]).
  component('todoApp', appComponent).
  directive('todoAppFooter', downgradeComponent({component: FooterComponent}));

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [FooterComponent],
  entryComponents: [FooterComponent],
})
export class TodoAppModule {
  constructor(protected upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [todoAppModule.name]);
  }
}
