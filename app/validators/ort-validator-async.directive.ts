import { Directive, provide } from 'angular2/core';
import { NG_ASYNC_VALIDATORS } from 'angular2/common';
import { OrtValidatorAsync} from './ort-validator-async';

@Directive({
    selector: 'input[ortAsync]',
    providers: [provide(NG_ASYNC_VALIDATORS, 
                { useValue: OrtValidatorAsync.validate, multi: true})]
    // CSS-Selektor
    //  flug-suchen --> <flug-suchen>
    //  .x --> <div class="x">
    //  #x --> <div id="x">
    //  [x] --> <div x>
    //  input[x] --> <input x>
})
export class OrtValidatorAsyncDirective {
}