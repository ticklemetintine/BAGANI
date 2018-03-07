import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ArticlesService {
	constructor(private http: Http) { }

	GetArticles(): Observable<any> {
		return this.http.get('assets/data/articles.json')
		.map(
			(res) => res.json()
		);
	}



}
