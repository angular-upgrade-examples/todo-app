import {NgModule} from '@angular/core';
import {TodoItems} from './todo-items.service';

// Angular shared module
@NgModule({
  providers: [TodoItems],
})
export class SharedModule {}
