import {platformBrowser} from '@angular/platform-browser';
import {TodoAppModuleNgFactory} from './todo-app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(TodoAppModuleNgFactory);
