import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationsService {
    constructor(private http: HttpClient) { }

    GetNotifications(): Observable<any> {
        return this.http.get('assets/data/notifications.json');
    }
}
