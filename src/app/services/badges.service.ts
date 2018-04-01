import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BadgesService {
    constructor(private http: HttpClient) { }

    GetBadges(): Observable<any> {
        return this.http.get('assets/data/badges.json');
    }
}

