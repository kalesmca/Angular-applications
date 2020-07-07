import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(path)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    console.log('API service : formatErrors : ERR :', error);
     return throwError(error.error);
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(
      path,
      body
    ).pipe(catchError(this.formatErrors));
  }
}
