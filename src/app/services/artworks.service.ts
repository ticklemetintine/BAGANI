import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ArtworksService {
	constructor(private http: HttpClient) { }

	GetArtworks(): Observable<any> {
		return this.http.get('assets/data/artworks.json');
	}



}
