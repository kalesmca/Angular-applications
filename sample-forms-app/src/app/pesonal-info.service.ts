import { Injectable } from '@angular/core';
import {ApiService} from './shared/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesonalInfoService {

  constructor(public apiService: ApiService) { }
  getUserInfo(): Observable<any> {
    return this.apiService.get('https://giggsiesapi.azurewebsites.net/api/Person/GetPersonByEmail?emailId=thanuja.s94%40gmail.com');
  }

  update(reqParam: any): Observable<any> {
    return this.apiService.post('https://giggsiesapi.azurewebsites.net/api/ChampionLocation/AddChampionLocation', reqParam);
  }
}
