import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ArticlesService {
	constructor(private http: HttpClient) { }

	GetArticles(): Observable<any> {
		return this.http.get('assets/data/articles.json');
	}



}
