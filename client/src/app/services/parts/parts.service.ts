import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IParts } from './parts.interface';

export { IParts };

@Injectable({
    providedIn: 'root'
})
export class PartsService {

    constructor(private http: HttpClient) { }

    getParts(): Observable<Array<IParts>> {
        return this.http.get<Array<IParts>>(`${environment.webapiUrl}/parts`);
    }

    saveParts(parts: IParts[]): Observable<any> {
        return this.http.post<any>(`${environment.webapiUrl}/parts`, parts);
    }
}
