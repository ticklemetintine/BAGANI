import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InnerTradeService {
    constructor(private http: HttpClient) { }

    GetInnerTrade(): Observable<any> {
        return this.http.get('assets/data/wikia-inner-trade.json');
    }
}