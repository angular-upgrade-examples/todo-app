import * as angular from 'angular';
import {todoAppModule} from './todo-app.module';

angular.bootstrap(document.querySelector('todo-app')!, [todoAppModule.name]);
