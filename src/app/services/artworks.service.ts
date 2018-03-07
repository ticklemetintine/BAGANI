import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ArtworksService {
	constructor(private http: Http) { }

	GetArtworks(): Observable<any> {
		return this.http.get('assets/data/artworks.json')
		.map(
		 (res) => res.json()
		);
	}



}
