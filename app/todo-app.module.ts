import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {TodoItemModule} from './todo-item/todo-item.module';
import {AppComponent} from './todo-app.component';
import {FooterComponent} from './todo-app-footer.component';

// Main Angular module
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    TodoItemModule,
  ],
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class TodoAppModule {}
