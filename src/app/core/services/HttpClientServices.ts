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
    dataEmitter = new Subject<any>();
    raiseDataEmitterEvent(data: any){
        this.dataEmitter.next(data)
    }

    // passing title data to header component
    titleData = new Subject<any>();
    raiseTitleDataEvent(data: any){
        this.titleData.next(data)
    }

    // HttpClient API get() method => Fetch details
    // get<T>(url: string) {
    //     return this._httpClient.get<T>(`${environment.API_URL}/${url}`).pipe(
    //         retry(1),
    //         catchError(this.handleError)
    //     )
    // }
    // HttpClient API get() method => Fetch details
    // getList<T>(url: string) {
    //     return this._httpClient.get<T[]>(`${environment.API_URL}/${url}`).pipe(
    //         retry(1),
    //         catchError(this.handleError)
    //     )
    // }

    getApplications(url: string):Observable<any[]> {
        return this._httpClient.get<any>(`${environment.API_URL2}/${url}`).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getDetails(name: string,param: string):Observable<any[]> {
        return this._httpClient.get<any>(`https://engineering-task.elancoapps.com/api/${param}/${name}`).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }
    // HttpClient API post() method => Create new record
    // post(paylods: any) {
    //     return this._httpClient.post(environment.API_URL, paylods).pipe(
    //         retry(1),
    //         catchError(this.handleError)
    //     );
    // }
    // HttpClient API get() method => Fetch details
    // getTableData(api: any[]) {
    //     return forkJoin(api)
    // }
    // Error handling 
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
