import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    console.log('API service : formatErrors : ERR :', error);
    return throwError(error.error);
  }

  getAll(req) {
    return this.http.get<any>(req.url, req.body)
  }

  saveDonor(req): Observable<any> {
    // console.log('saveDonor ::', req);
    // let body = JSON.stringify(req.body);

    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(
      req.url,
      req.body
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any) {

  }

}
