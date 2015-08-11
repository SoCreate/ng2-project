import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';
import {httpInjectables, Http} from 'angular2/angular2';
import {formInjectables} from 'angular2/angular2';

@Component({
	selector: 'app'
})
@View({
	template: `ng2-project`
})
export class AppComponent {
}
bootstrap(AppComponent, [
	routerInjectables,
	httpInjectables,
	formInjectables
]);