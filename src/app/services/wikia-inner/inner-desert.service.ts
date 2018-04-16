import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InnerDesertService {
    constructor(private http: HttpClient) { }

    GetInnerDesert(): Observable<any> {
        return this.http.get('assets/data/wikia-inner-desert.json');
    }
}
