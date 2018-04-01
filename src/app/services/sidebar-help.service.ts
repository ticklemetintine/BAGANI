import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SidebarHelpService {
    constructor(private http: HttpClient) { }

    GetHelp(): Observable<any> {
        return this.http.get('assets/data/sidebar-help.json');
    }
}
