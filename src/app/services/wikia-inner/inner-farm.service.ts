import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InnerFarmService {
    constructor(private http: HttpClient) { }

    GetInnerFarm(): Observable<any> {
        return this.http.get('assets/data/wikia-inner-farm.json');
    }
}