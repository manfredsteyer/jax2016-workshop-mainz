import { Injectable  } from 'angular2/core';
import {Http, URLSearchParams, Headers  } from 'angular2/http';

@Injectable()
export class FlugService {
    
    constructor(private http: Http) {
    }

    find(von, nach) {
        
        var search = new URLSearchParams();
        search.set('abflugort', von);
        search.set('zielort', nach);
        
        var headers = new Headers();
        headers.set('Accept', 'text/json')
        
        var url = "http://www.angular.at/api/flug";
        
        return this.http
                    .get(url, {search, headers})
                    .map(resp => resp.json());

        
    }
    
}