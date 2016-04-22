import { Flug } from '../entities/flug';
import { Http, Headers, URLSearchParams } from 'angular2/http';
import { Component} from 'angular2/core';
import { FlugService} from '../services/flug.service';
import { OrtPipe} from '../pipes/ort-pipe';
import { FlugCardComponent} from '../flug-card/flug-card.component';

import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { OrtValidator} from '../validators/ort-validator';
import { OrtValidatorAsync} from '../validators/ort-validator-async';

const MY_PROVIDERS = [FlugService];
const MY_DIRECTIVES = [FlugCardComponent];

@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen-imp/flug-suchen-imp.component.html',
    providers: [MY_PROVIDERS],
    directives: [MY_DIRECTIVES],
    styleUrls: ['app/flug-suchen-imp/flug-suchen-imp.component.css'],
    pipes: [OrtPipe]
})
export class FlugSuchenImpComponent {
    
    fluege: Array<Flug> = [];
    selectedFlug: Flug;
    
    filter: ControlGroup;
    
    constructor(
        private flugService: FlugService,
        private fb: FormBuilder) {
            
            this.filter = fb.group({
                von: [
                    'Graz', 
                    Validators.compose([
                        // control --> { required: false }
                        Validators.required,
                        Validators.maxLength(30),
                        Validators.minLength(3),
                        OrtValidator.validate
                    ]),
                    Validators.composeAsync([
                        OrtValidatorAsync.validate
                    ])
                ],
                nach: ['Hamburg']
            });
            
            this.filter.valueChanges.subscribe(
              (info) => {
                  console.debug(info);
              }  
            );
            
            
    }
    
    suchen() {
        
        var von = this.filter.value.von;
        var nach = this.filter.value.nach;
        
        this.flugService
            .find(von, nach) // <-- Observable
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