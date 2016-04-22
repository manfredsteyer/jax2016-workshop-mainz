import { Flug } from '../entities/flug';
import { Http, Headers, URLSearchParams } from 'angular2/http';
import { Component} from 'angular2/core';
import { FlugService} from '../services/flug.service';
import { OrtPipe} from '../pipes/ort-pipe';
import { FlugCardComponent} from '../flug-card/flug-card.component';
import { OrtValidatorDirective } from '../validators/ort-validator.directive';
import { OrtValidatorAsyncDirective} from '../validators/ort-validator-async.directive';
import { ROUTER_DIRECTIVES} from 'angular2/router';

const MY_VALIDATION_DIRECTIVES = [OrtValidatorDirective, OrtValidatorAsyncDirective];
const MY_DIRECTIVES = [FlugCardComponent, MY_VALIDATION_DIRECTIVES];

@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen/flug-suchen.component.html',
    directives: [MY_DIRECTIVES, ROUTER_DIRECTIVES],
    styleUrls: ['app/flug-suchen/flug-suchen.component.css'],
    pipes: [OrtPipe]
})
export class FlugSuchenComponent {
    
    von: string = "Graz";
    nach: string = "Hamburg";
    fluege: Array<Flug> = [];
    selectedFlug: Flug;
    
    /*
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    */
    
    constructor(
        private flugService: FlugService) {
    }
    
    suchen() {
        
        this.flugService
            .find(this.von, this.nach) // <-- Observable
            .subscribe(
                (fluege: Array<Flug>) => {
                   this.fluege = fluege; 
                },
                (err) => {
                    console.error(err);
                }
            );
    }   
    
    select(flug: Flug) {
        this.selectedFlug = flug;
    } 
    
}