import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _sites: BehaviorSubject<any> = new BehaviorSubject({});
  public sites: Observable<any> = this._sites.asObservable();

  saveData(data){
    this._sites.next(data);
  }
  constructor() { }
}
