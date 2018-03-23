import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChallengeQuestionService {
    constructor(private http: HttpClient) { }

    GetQuestion(): Observable<any> {
        return this.http.get('assets/data/challenge-question.json');
    }
}
 