import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikiaTableOfContentsService {
    constructor(private http: HttpClient) { }

    GetMenu(): Observable<any> {
        return this.http.get('assets/data/wikia-table-of-contents.json');
    }
}

