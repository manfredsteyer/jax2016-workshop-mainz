
import { Component} from 'angular2/core';

@Component({
    template: `
        <h1>{{ info }}</h1>    
    `
})
export class HomeComponent {
    info = "Home";
}