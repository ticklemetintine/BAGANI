import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class LatestUpdatesService {
	constructor(private http: HttpClient) { }


	GetUpdates(): Observable<any> {
		return this.http.get('assets/data/latest-updates.json');
	}



}
