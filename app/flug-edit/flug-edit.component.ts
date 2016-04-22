
import { Component} from 'angular2/core';
import { RouteParams} from 'angular2/router';
import { Flug} from '../entities/flug';
import { FlugService} from '../services/flug.service';
import { OnInit} from 'angular2/core';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.component.html'
})
export class FlugEditComponent implements OnInit {
    id: string;
    flug: Flug;
    message: string;
    
    constructor(private flugService: FlugService, 
                routeParams: RouteParams) {
        
        this.id= routeParams.get('id');
    }

    ngOnInit() {
        
        this.flugService
            .findById(this.id)
            .subscribe(
              (flug) => {
                  this.flug = flug;
                  this.message = "";
              },
              (err) => {
                  console.error(err);
                  this.message = err.text();
              }
            );

    }    
    save() {
        
         this.flugService
            .save(this.flug)
            .subscribe(
              (flug) => {
                  this.flug = flug;
                  this.message = "";
              },
              (err) => {
                  console.error(err);
                  this.message = err.text();
              }
            );
        
    }
    
    public info: string = "FlugEdit";
}