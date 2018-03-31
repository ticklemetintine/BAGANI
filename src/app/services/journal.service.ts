import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JournalService {
    constructor(private http: HttpClient) { }

    GetJournal(): Observable<any> {
        return this.http.get('assets/data/journal.json');
    }
}

