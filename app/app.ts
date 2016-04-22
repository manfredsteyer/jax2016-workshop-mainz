import {Component } from 'angular2/core';
                            // ^
                            // +---- Modul
                            // +---- Mappings oder Dateien
@Component({
    selector: 'app', 
    templateUrl: 'app/app.html'
})
export class AppComponent {

    title: string;

    constructor() {
        this.title = 'Hier könnte auch Ihre Überschrift stehen!';
    }
    
    doStuff() {
        this.title = "Manfred war hier. You've been haaaacked!!!";
        console.debug("Stuff done!");
    }

}