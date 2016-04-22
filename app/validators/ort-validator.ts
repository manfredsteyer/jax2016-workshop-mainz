import { Control } from 'angular2/common';


export class OrtValidator {
    
    static validate(c: Control): any {
        
        if (c.value == 'Graz'
            || c.value == 'Hamburg'
            || c.value == 'Frankfurt'
            || c.value == 'Zürich'
            || c.value == 'Wien'
        ) {
            return { };            
        }
        
        return {
            ort: true
        };
        
    }
    
}