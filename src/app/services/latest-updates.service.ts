import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class LatestUpdatesService {
	constructor(private http: Http) { }


	GetUpdates(): Observable<any> {
		return this.http.get('assets/data/latest-updates.json')
		.map(
			(res) => res.json()
		);
	}



}
