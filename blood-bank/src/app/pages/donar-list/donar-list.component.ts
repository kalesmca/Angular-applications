import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-donar-list',
  templateUrl: './donar-list.component.html',
  styleUrls: ['./donar-list.component.scss']
})
export class DonarListComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getAllDonors();
  }

  getAllDonors() {
    let req = {
      url: 'http://localhost:8080/bloodBank/getAll',
      body: {}
    }
    console.log('getAll calling')
    this.apiService.getAll(req).subscribe((res) => {
      console.log('response ::', res);
    })
  }

}
