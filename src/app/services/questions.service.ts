import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {
    constructor(private http: HttpClient) { }

    GetQuestions(): Observable<any> {
        return this.http.get('assets/data/questions.json');
    }
}
