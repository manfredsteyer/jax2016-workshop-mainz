import {Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { FlugSuchenComponent } from './flug-suchen/flug-suchen.component';
import { PassagierSuchenComponent } from './passagier-suchen/passagier-suchen.component';
import { HomeComponent } from './home/home.component';
import { FlugEditComponent } from './flug-edit/flug-edit.component';
import {FlugService} from './services/flug.service';

const MY_PROVIDERS = [FlugService];

@Component({
    selector: 'app', 
    templateUrl: 'app/app.html',
    providers: [MY_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
    { path: '/flug-suchen', component: FlugSuchenComponent, name: 'FlugSuchen'},
    { path: '/flug-edit/:id', component: FlugEditComponent, name: 'FlugEdit'},
    { path: '/passagier-suchen', component: PassagierSuchenComponent, name: 'PassagierSuchen'}
])
export class AppComponent {

}