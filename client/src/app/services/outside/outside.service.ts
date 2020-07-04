import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class OutsideService {

    constructor(private http: HttpClient) { }

    public getData(url: string): Observable<Array<any>> {
        return this.http.get<Array<any>>(url);
    }
}
