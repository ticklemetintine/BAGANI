import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RecapService {

	constructor(private http: Http) { }

	GetRecap(): Observable<any> {
		return this.http.get('assets/data/recap.json')
		.map(
			(res) => res.json()
		);
	}
}
