import { Directive, provide } from 'angular2/core';
import { NG_VALIDATORS, Validator} from 'angular2/common';
import { OrtValidator} from './ort-validator';

@Directive({
    selector: 'input[ort]',
    providers: [provide(NG_VALIDATORS, 
                { useValue: OrtValidator.validate, multi: true})]
    // CSS-Selektor
    //  flug-suchen --> <flug-suchen>
    //  .x --> <div class="x">
    //  #x --> <div id="x">
    //  [x] --> <div x>
    //  input[x] --> <input x>
})
export class OrtValidatorDirective  {
}