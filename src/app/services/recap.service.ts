import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecapService {
    constructor(private http: HttpClient) { }

    GetRecap(): Observable<any> {
        return this.http.get('assets/data/recap.json');
    }
}
