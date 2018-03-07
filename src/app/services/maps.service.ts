import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapsService {
    constructor(private http: HttpClient) { }

    EachMap(): Observable<any> {
        return this.http.get('assets/data/maps.json');
    }
}
