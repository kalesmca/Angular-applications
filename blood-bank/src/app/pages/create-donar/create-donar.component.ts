import { Component, OnInit } from '@angular/core';
import { CreateLayout } from './layout';
import { CreateDonor } from './model';
import { ApiService } from '../../services/api.service';
import { CreateDonorService } from './create-donor.service';

@Component({
  selector: 'app-create-donar',
  templateUrl: './create-donar.component.html',
  styleUrls: ['./create-donar.component.scss']
})
export class CreateDonarComponent implements OnInit {
  layoutConfig = new CreateLayout();
  donor = new CreateDonor();
  constructor(public apiService: ApiService, public donorService: CreateDonorService) { }

  ngOnInit() {
    console.log(this.layoutConfig)
    console.log(this.donor);
  }

  save() {
    console.log('save :', this.layoutConfig);
    let req = {
      url: 'http://localhost:8080/bloodBank/save',
      body: this.donorService.formatSaveReq(this.layoutConfig)
    }
    console.log('req::', req);
    this.apiService.saveDonor(req).subscribe((res) => {
      console.log('Response ::', res);
    })

  }

}
