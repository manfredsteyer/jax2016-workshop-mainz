import { Flug } from './flug';
import { Http, Headers, URLSearchParams } from 'angular2/http';
import { Component} from 'angular2/core';
import { FlugService} from '../services/flug.service';
import { OrtPipe} from '../pipes/ort-pipe';
import { FlugCardComponent} from '../flug-card/flug-card.component';

const MY_PROVIDERS = [FlugService];
const MY_DIRECTIVES = [FlugCardComponent];

@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen/flug-suchen.component.html',
    providers: [MY_PROVIDERS],
    directives: [MY_DIRECTIVES],
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