import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AchievementsService {
    constructor(private http: HttpClient) { }

    GetAchievements(): Observable<any> {
        return this.http.get('assets/data/achievements.json');
    }
}
