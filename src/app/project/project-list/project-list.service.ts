import { Injectable } from '@angular/core';
import { IProject } from './Interfaces/project.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    getProjectById(id): Observable<IProject> {
        return this.http.get<IProject>(`${this.url}?id=${id}`).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
        )
    }
    updateDonated(updatedProject: IProject): Observable<void> {
        return this.http.put<void>(`${this.url}/${updatedProject.id}`, updatedProject, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
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