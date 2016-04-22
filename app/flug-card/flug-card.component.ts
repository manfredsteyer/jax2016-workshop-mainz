import { Input, Output, EventEmitter } from 'angular2/core';
import { Component} from 'angular2/core';

@Component({
    selector: 'flug-card',
    templateUrl: 'app/flug-card/flug-card.component.html'
})
export class FlugCardComponent {
    
    
    @Input('item') flug;
    @Input() selectedItem;
    @Output() selectedItemChange = new EventEmitter();
    
    select() {
        // this.selectedItem = this.flug;
        this.selectedItemChange.emit(this.flug);
    }
    
}