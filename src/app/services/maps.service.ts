import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class MapsService {
	constructor(private http: Http) { }

	EachMap(): Observable<any> {
		return this.http.get('assets/data/maps.json')
		.map(
			(res) => res.json()
		);
	}



}
