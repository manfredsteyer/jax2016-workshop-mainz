import { PipeTransform} from 'angular2/core';
import { Pipe} from 'angular2/core';


// {{ f.abflugort | ort:'short' }}
@Pipe({
    name: 'ort'
})
export class OrtPipe implements PipeTransform {
    
    transform(value: any, args: any[]): any {
       
        var fmt = args[0]; // short, long
        var long, short;
        
        switch(value) {
            
            case 'Graz':
                long = "Flughafen Graz-Thalerhof";
                short = "GRZ";
            break;
            
            case 'Hamburg':
                long = "Airport Hamburg";
                short = "HAM";
            break;

            case 'Frankfurt':
                long = "Airport Frankfurt";
                short = "FRA";
            break;
            
            default:
                long = short = "ROM";
        }        
        
        if (fmt == 'short') return short;
        return long;
        
    }
}