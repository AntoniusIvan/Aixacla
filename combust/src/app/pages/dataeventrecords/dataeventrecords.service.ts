import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DataEventRecord } from './models/DataEventRecord';

@Injectable()
export class DataEventRecordsService {

    private actionUrl: string;
    private headers: HttpHeaders = new HttpHeaders();

    constructor(private http: HttpClient, private securityService: OidcSecurityService) {
        this.actionUrl = `https://localhost:44390/api/DataEventRecords/`;
    }

    private setHeaders(): any {
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');

        this.securityService.getAccessToken().subscribe((token) => {
          if (token !== '') {
            const tokenValue = 'Bearer ' + token;
            this.headers = this.headers.append('Authorization', tokenValue);
          }
        });
    }

    public GetAll = (): Observable<DataEventRecord[]> => {
        this.setHeaders();

        return this.http.get<DataEventRecord[]>(this.actionUrl, { headers: this.headers });
    }

    public GetById(id: number): Observable<DataEventRecord> {
        this.setHeaders();
        return this.http.get<DataEventRecord>(this.actionUrl + id, {
            headers: this.headers
        });
    }

    public Add(itemToAdd: any): Observable<any> {
        this.setHeaders();
        return this.http.post<any>(this.actionUrl, JSON.stringify(itemToAdd), { headers: this.headers });
    }

    public Update(id: number, itemToUpdate: any): Observable<any> {
        this.setHeaders();
        return this.http
            .put<any>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    public Delete(id: number): Observable<any> {
        this.setHeaders();
        return this.http.delete<any>(this.actionUrl + id, {
            headers: this.headers
        });
    }
}
