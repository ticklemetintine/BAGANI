import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InnerFishingService {
    constructor(private http: HttpClient) { }

    GetInnerFishing(): Observable<any> {
        return this.http.get('assets/data/wikia-inner-fishing.json');
    }
}
