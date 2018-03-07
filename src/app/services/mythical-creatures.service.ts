import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MythicalCreaturesService {
    constructor(private http: HttpClient) { }

    GetMythicalCreatures(): Observable<any> {
        return this.http.get('assets/data/mythical-creatures.json');
    }
}
