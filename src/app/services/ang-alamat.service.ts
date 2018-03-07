import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class AngAlamatService {
	constructor(private http: Http) { }

	GetAlamat(): Observable<any> {
		return this.http.get('assets/data/ang-alamat.json')
		.map(
			(res) => res.json()
		);
	}



}
