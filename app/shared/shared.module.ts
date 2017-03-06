import {NgModule} from '@angular/core';
import {Logger} from './logger.service';
import {TodoItems} from './todo-items.service';

// Angular shared module
@NgModule({
  providers: [
    Logger,
    TodoItems,
  ],
})
export class SharedModule {}
