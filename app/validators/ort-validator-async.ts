import { Control } from 'angular2/common';

// c --> Promise
export class OrtValidatorAsync {
    
    static validate(c: Control ) {
        
        return new Promise((resolve) => { 
            
            setTimeout(() => { 
                
                   if (c.value == 'Graz'
                        || c.value == 'Hamburg'
                        || c.value == 'Frankfurt'
                        || c.value == 'Zürich'
                   )
                   {
                        resolve({});                       
                   }
                   else {
                        resolve({ ortAsync: true });       
                   }

                
            }, 3000);
            
            
        });
        
    }
} 
