import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import {SharedModule} from './shared/shared.module';
import {TodoItemModule} from './todo-item/todo-item.module';
import {AppComponent} from './todo-app.component';
import {FooterComponent} from './todo-app-footer.component';

// Main AngularJS module
export const todoAppModule = angular.
  module('todoApp', []).
  directive('todoApp', downgradeComponent({component: AppComponent}));

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TodoItemModule,
    UpgradeModule,
  ],
  declarations: [AppComponent, FooterComponent],
  entryComponents: [AppComponent],
})
export class TodoAppModule {
  constructor(protected upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [todoAppModule.name]);
  }
}
