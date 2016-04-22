import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app'
import { FlugSuchenComponent} from './flug-suchen/flug-suchen.component';
import {FlugService } from './services/flug.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {provide} from 'angular2/core';

var providers = [ // DI-Konfiguration
    // FlugService, // FlugService --> FlugService 
    // provide(FlugService, { useClass: FlugService } )
    // FlugService --> MockFlugService
    // FlugService --> ExtFlugService
    
    HTTP_PROVIDERS
];

bootstrap(FlugSuchenComponent, providers);

