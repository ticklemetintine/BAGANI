import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikiaRegionService {
    constructor(private http: HttpClient) { }

    GetRegionData(): Observable<any> {
        return this.http.get('assets/data/wikia-region.json');
    }
}
 