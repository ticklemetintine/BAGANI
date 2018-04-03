import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtworksService {
    constructor(private http: HttpClient) { }

    GetArtworks(): Observable<any> {
        return this.http.get('https://app.dialogfeed.com/en/snippet/bagani.json?api_key=719d1179edc359277eef40928ce50b32');
	}
}
