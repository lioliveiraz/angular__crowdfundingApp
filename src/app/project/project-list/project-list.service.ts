import { Injectable } from '@angular/core';
import { IProject } from './Interfaces/project.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    private url = "http://localhost:3000/projects"

    constructor(private http: HttpClient) { }

    getProject(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.url).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = ''
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Something went wrong: ${err.error.message}`
        } else {
            errorMessage = err.message
        }

        return throwError(errorMessage)

    }
}