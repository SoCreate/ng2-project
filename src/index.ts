/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {httpInjectables, Http} from 'angular2/angular2';
import {formInjectables} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: `Angular2-Typescript-Starter`
})
export class AppComponent {
}
bootstrap(AppComponent, [
	routerInjectables,
	httpInjectables,
	formInjectables
]);