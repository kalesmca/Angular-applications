import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateDonorService {

  constructor() { }

  formatSaveReq(data): any {
    console.log('data ::', data);
    let req = {};
    data.layout.fields.map((field) => {
      req[field.dbName] = field.model;
    });
    data.addressLayout.fields.map((field) => {
      req[field.dbName] = field.model;
    });
    return req;
  }

}
