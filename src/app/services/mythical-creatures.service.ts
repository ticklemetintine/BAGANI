import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MythicalCreaturesService {

	constructor(private http: Http) { }

	GetMythicalCreatures(): Observable<any> {
		return this.http.get('assets/data/mythical-creatures.json')
		.map(
			(res) => res.json()
		);
	}

}
