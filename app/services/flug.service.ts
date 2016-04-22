import { Injectable  } from 'angular2/core';
import {Http, URLSearchParams, Headers  } from 'angular2/http';
import {Flug } from '../entities/flug';

@Injectable()
export class FlugService {
    
    constructor(private http: Http) {
    }
    
    save(flug: Flug) {
       
        var headers = new Headers();
        headers.set('Content-Type', 'text/json')
        
        var url = "http://www.angular.at/api/flug";
        
        return this.http
                    .post(url, JSON.stringify(flug),  {headers})
                    .map(resp => resp.json());
    }



    findById(id: string) {
       
        var search = new URLSearchParams();
        search.set('flugNummer', id);
        
        var headers = new Headers();
        headers.set('Accept', 'text/json')
        
        var url = "http://www.angular.at/api/flug";
        
        return this.http
                    .get(url, {search, headers})
                    .map(resp => resp.json());

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