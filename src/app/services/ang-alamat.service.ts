import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AngAlamatService {
    constructor(private http: HttpClient) { }

    GetAlamat(): Observable<any> {
        return this.http.get('assets/data/ang-alamat.json');
    }
}
