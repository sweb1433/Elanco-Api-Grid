import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpclientService {

    constructor(private _httpClient: HttpClient) { }
    // passing data to home component
    detailsData = new Subject<any>();
    passDetailDataToHome(data: any){
        this.detailsData.next(data)
    }

    // passing title data to header component
    titleData = new Subject<any>();
    passTitleDataToHeader(data: any){
        this.titleData.next(data)
    }


    // Get List
    getApplications(type: string):Observable<any[]> {
        return this._httpClient.get<any>(`${environment.API_URL2}/${type}`).pipe(
            retry(1),
            catchError(this.handleError)
        ) 
    }

    // Get Details
    getDetails(name: string,param: string):Observable<any[]> {
        return this._httpClient.get<any>(`${environment.API_URL2}/${param}/${name}`).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

}
