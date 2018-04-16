import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InnerForestService {
    constructor(private http: HttpClient) { }

    GetInnerForest(): Observable<any> {
        return this.http.get('assets/data/wikia-inner-forest.json');
    }
}
